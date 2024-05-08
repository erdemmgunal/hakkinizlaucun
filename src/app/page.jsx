"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  	const [isLoading, setIsLoading] = useState(true);
    
	const [flightsData, setFlightsData] = useState([]);

    const [lastUpdated, setLastUpdated] = useState("");
    const [totalFlights, setTotalFlights] = useState(0);

	const [durations, setDurations ] = useState([]);
	const [checkedDurations, setCheckedDurations] = useState([]);
	const [priceRange, setPriceRange] = useState({ price_min: '', price_max: '' });

	const [checkedDepartureCities, setCheckedDepartureCities] = useState([]);
	const [checkedArrivalCities, setCheckedArrivalCities] = useState([]);

	const [departureCities, setDepartureCities] = useState([]);
	const [arrivalCities, setArrivalCities] = useState([]);

    const [filteredFlights, setFilteredFlights] = useState([]);

    const handleDurationChange = (duration) => {
        const updatedDurations = checkedDurations.includes(duration)
            ? checkedDurations.filter((dur) => dur !== duration)
            : [...checkedDurations, duration];
        setCheckedDurations(updatedDurations);
        filterFlights(updatedDurations, priceRange, checkedDepartureCities, checkedArrivalCities);
    };

    const handlePriceChange = (event) => {
        const { id, value } = event.target;
        setPriceRange((prevRange) => ({
            ...prevRange,
            [id]: value,
        }));
        filterFlights(checkedDurations, { ...priceRange, [id]: value }, checkedDepartureCities, checkedArrivalCities);
    };
  
    const handleDepartureCityChange = (city) => {
        const updatedCities = checkedDepartureCities.includes(city)
            ? checkedDepartureCities.filter((c) => c !== city)
            : [...checkedDepartureCities, city];
        setCheckedDepartureCities(updatedCities);
        filterFlights(checkedDurations, priceRange, updatedCities, checkedArrivalCities);
    };
  
    const handleArrivalCityChange = (city) => {
        const updatedCities = checkedArrivalCities.includes(city)
            ? checkedArrivalCities.filter((c) => c !== city)
            : [...checkedArrivalCities, city];
        setCheckedArrivalCities(updatedCities);
        filterFlights(checkedDurations, priceRange, checkedDepartureCities, updatedCities);
    };
  
    const toggleAllCheckboxes = (event, type) => {
        const isChecked = event.target.checked;
        if (type === 'departure') {
            setCheckedDepartureCities(isChecked ? departureCities.map(city => city.city) : []);
        } else if (type === 'arrival') {
            setCheckedArrivalCities(isChecked ? arrivalCities.map(city => city.city) : []);
        }
    };
    
    const filterFlights = (durations, price, departureCities, arrivalCities) => {
        const updatedFlights = flightsData.filter((flight) => {
            return (
                (durations.length === 0 || durations.includes(flight.duration)) &&
                (price.price_min === '' || parseInt(price.price_min) <= flight.totalPrice) &&
                (price.price_max === '' || parseInt(price.price_max) >= flight.totalPrice) &&
                (departureCities.length === 0 || departureCities.includes(flight.departure.city)) &&
                (arrivalCities.length === 0 || arrivalCities.includes(flight.arrival.city))
            );
        });
        setFilteredFlights(updatedFlights);
    };
    
	useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/v1', {
                    method: 'POST',
                    body: JSON.stringify({ action: 'dealItems', site: 'pegasus' }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                setLastUpdated(data[0].lastUpdated);
                setTotalFlights(data.length);
				const allDurations = [...new Set(data.map((flight) => flight.duration))].sort((a, b) => a - b);
                setDurations(allDurations);
				setCheckedDurations(allDurations);
				
                setPriceRange({ price_min: '', price_max: '' });
                setDepartureCities([]);
                setArrivalCities([]);
                
                const allDepartureCities = Array.from(new Set(data.map((flight) => flight.departure.city))).sort().map((city) => ({
                    city,
                    key: data.find((flight) => flight.departure.city === city).departure.code,
                }));
                setDepartureCities(allDepartureCities);
                setCheckedDepartureCities(allDepartureCities.map(city => city.city));

                const allArrivalCities = Array.from(new Set(data.map((flight) => flight.arrival.city))).sort().map((city) => ({
                    city,
                    key: data.find((flight) => flight.arrival.city === city).arrival.code,
                }));
                setArrivalCities(allArrivalCities);
                setCheckedArrivalCities(allArrivalCities.map(city => city.city));

                filterFlights(
                    [...new Set(data.map((flight) => flight.duration))].sort((a, b) => a - b),
                    { price_min: '', price_max: '' },
                    [],
                    []
                );

                setIsLoading(false);
                setFlightsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(true);
            }
        };

        fetchData();
    }, []);
	
	useEffect(() => {
		filterFlights(durations, priceRange, checkedDepartureCities, checkedArrivalCities);
    }, [durations, priceRange, checkedDepartureCities, checkedArrivalCities]);
    
    return (
			<div>
				{isLoading ? (
					<div>
						<div className="flex justify-center items-center mb-6">
							<Skeleton className="text-white font-bold underline"/>
							<Skeleton className="text-white font-bold"/>
						</div>
						<div className="px-2 float-left mb-4">
							<div className="space-y-4"> 
								<Skeleton className="border mb-2 m-0 p-2 w-[226px] h-[185px]"/>
								<Skeleton className="border mb-2 m-0 p-2 w-[226px] h-[105px]"/>
								<Skeleton className="border mb-2 m-0 p-2 w-[226px] h-[233px]"/>
								<Skeleton className="border mb-2 m-0 p-2 w-[226px] h-[881px]"/>
							</div>
						</div>
					</div>
				) : (
					<div>
						<div className="flex justify-center items-center mb-6 ">
								<ul className="flex">
										<li className="mr-6">
												<Link href='/' className="text-white font-bold underline">Pegasus</Link>
										</li>
										<li>
												<Link href='/biryere' className="text-white font-bold">Biryere</Link>
										</li>
								</ul>
						</div>
						<div className="px-2 float-left">
							<fieldset className="border mb-2 w-full m-0 p-2 border-white">
								<legend className="font-bold text-white">Toplam Gün</legend>
								{durations.map(duration => (
									<label key={duration} className="flex items-center space-x-1 text-white">
										<input
											type="checkbox"
											data-duration={duration}
											checked={checkedDurations.includes(duration)}
											onChange={() => handleDurationChange(duration)}
										/>
										{duration}
									</label>
								))}
							</fieldset>
			
							<fieldset className="border mb-2 w-full m-0 p-2 border-white">
								<legend className="font-bold text-white">Fiyat</legend>
								<div className="pt-2 flex flex-col">
									<div className="flex items-center">
										<input
											className="block w-14 mr-1 text-black"
											type="number"
											placeholder="TL"
											id="price_min"
											value={priceRange.min}
											onChange={handlePriceChange}
										/>
										<label htmlFor="price_min" className="font-bold text-white">
											Min
										</label>
									</div>
									<div className="flex items-center mt-2">
										<input
											className="block w-14 mr-1 text-black"
											type="number"
											placeholder="TL"
											id="price_max"
											value={priceRange.max}
											onChange={handlePriceChange}
										/>
										<label htmlFor="price_max" className="font-bold text-white">
											Max
										</label>
									</div>
								</div>
							</fieldset>
		
							<fieldset className="border mb-2 w-full m-0 p-2 border-white">
								<legend className="font-bold text-white">
									<label className="block text-bold">
										<input type="checkbox" defaultChecked={true} onChange={(event) => toggleAllCheckboxes(event, 'departure')} />
										Kalkış Yeri
									</label>
								</legend>
								{departureCities.map((departureCity, index) => (
									<label key={index} className="block font-bold text-white">
										<input
											className="mr-1"
											type="checkbox"
											data-departure_cities={departureCity.city}
											checked={checkedDepartureCities.includes(departureCity.city)}
											onChange={() => handleDepartureCityChange(departureCity.city)}
										/>
										{departureCity.city}
									</label>
								))}
							</fieldset>
			
							<fieldset className="border mb-2 w-full m-0 p-2 border-white">
								<legend className="font-bold text-white">
									<label className="block text-bold">
										<input type="checkbox" defaultChecked={true} onChange={(event) => toggleAllCheckboxes(event, 'arrival')}/>
										Varış Şehri
									</label>
								</legend>
								{arrivalCities.map((arrivalCity, index) => (
									<label key={index} className="block font-bold text-white">
										<input
											className="mr-1"
											type="checkbox"
											data-arrival_cities={arrivalCity.city}
											checked={checkedArrivalCities.includes(arrivalCity.city)}
											onChange={() => handleArrivalCityChange(arrivalCity.city)}
										/>{arrivalCity.city}
									</label>
								))}
							</fieldset>
			
							<fieldset className="border m-0 w-full p-2 mb-5 border-white">
								<ul>
									<li className="pt-2">
										<Link href="/faq" className="underline font-bold text-[#02aff1]">SSS</Link>
									</li>
									<li className="pt-2">
										<Link href="/privacy" className="underline font-bold text-[#02aff1]">Gizlilik Politikası</Link>
									</li>
									<li className="pt-2 mb-2">
										<Link href="http://linkedin.com/in/hakkierdem/" className="underline font-bold text-[#02aff1]">Bana ulaşın</Link>
									</li>
								</ul>
							</fieldset>
						</div>
						<table className="border-0 pt-2">
							<thead>
								<tr className="leading-5 text-white">
									<th className="px-4 text-left">Kalkış Tarihi</th>
									<th className="px-4 text-left">Kalkış Yeri</th>
									<th className="px-4 text-left">Fiyat</th>
									<th className="px-4 text-left">Varış Tarihi</th>
									<th className="px-4 text-left">Varış Ülkesi</th>
									<th className="px-4 text-left">Varış Şehri</th>
									<th className="px-4 text-left">Fiyat</th>
									<th className="px-4 text-left">Toplam Fiyat</th>
									<th className="px-4 text-left">Toplam Gün</th>
									<th className="px-4 text-left">LINK</th>
								</tr>
							</thead>
							<tbody>
								{filteredFlights.map((flight, index) => (
									<tr key={index}  className={index % 2 === 0 ? 'bg-black text-white' : 'bg-slate-800 text-white'}>
										<td className="px-4 text-left">{flight.departure.date}</td>
										<td className="px-4 text-left">{flight.departure.city}</td>
										<td className="px-4 text-left">{flight.departure.price}</td>
										<td className="px-4 text-left">{flight.arrival.date}</td>
										<td className="px-4 text-left">{flight.arrival.country}</td>
										<td className="px-4 text-left">{flight.arrival.city}</td>
										<td className="px-4 text-left">{flight.arrival.price}</td>
										<td className="px-4 text-left">{flight.totalPrice}</td>
										<td className="px-4 text-left">{flight.duration}</td>
										<td className="px-4 text-left">
											<a href={flight.slug} target="_blank" className="underline font-bold text-[#02aff1]">LINK</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<footer>
							<h1 className="m-10 font-bold text-xs py-4 text-white">
								Son güncelleme: {lastUpdated} Toplam uçuşlar {totalFlights} (BU SİTEDE GÖRÜNEN İÇERİKLER <a href="https://www.flypgs.com" className="underline" target="_blank">FLYPGS.COM</a> API 'INDAN GELİR. BU İÇERİK 'OLDUĞU GİBİ' SAĞLANIR VE HERHANGİ BİR ZAMAN DEĞİŞTİRİLEBİLİR VEYA KALDIRILABİLİR. KAR AMACI GUTMEDEN KENDIM VE ARKADASLARI ICIN YAPILIP DAHA SONRASINDA GEZMEK ISTEYIP BILET BULAMAYAN SEN ICIN ACILMISTIR. TURKIYE VE CEVRESINDEN YAKIN TARIHLI KISA SURELI AVRUPA UCUSLARINI LISTELER DAHA DETAYLI ARAMALAR ICIN LUTFEN <a href="https://www.flypgs.com" className="underline" target="_blank">FLYPGS.COM</a>'U KULLAN.)
							</h1>
						</footer>
					</div>
				)}
			</div>
		);
}
