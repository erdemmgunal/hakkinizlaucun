import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function fetchData(tableName) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log('connected to mongodb');
    const database = client.db('hakkiscanner');
    const collection = database.collection(tableName);
    const flights = await collection.find({}).sort({ totalPrice: 1 }).limit(1000).toArray();

    return flights;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  const { action, site } = await request.json();
  let tableName;

  if (action === 'dealItems') {
    if (site === 'pegasus') {
      tableName = 'PegasusFlights';
    } else if (site === 'biryere') {
      tableName = 'Flights';
    } else {
      return NextResponse.json({ error: 'Bu site ekli değil.', status: 400 });
    }

    const flights = await fetchData(tableName);
    const response = NextResponse.json(flights);
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    return response;
  } else {
    return NextResponse.json({ error: 'action not found', status: 500 });
  }
}
