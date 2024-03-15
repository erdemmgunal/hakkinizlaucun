import { MongoClient } from 'mongodb';
import { NextResponse } from "next/server"

export async function fetchData() {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        console.log('connected to mongodb')

        const database = client.db('hakkiscanner');
        const collection = database.collection('PegasusFlights');
        const flights = await collection.find({}).sort({ totalPrice: 1 }).limit(1000).toArray();

        return flights;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    } finally {
        await client.close();
    }
}

export async function GET(request) {
    const flights = await fetchData();

    if (flights) {
        return NextResponse.json(flights)
    } else {
        return NextResponse.json({ error: 'Error fetching flights', message: error.message, status: 500 });
    }
}