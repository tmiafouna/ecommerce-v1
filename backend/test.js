const { MongoClient } = require('mongodb');

async function testMongoConnection() {
  try {
    const uri = 'mongodb://localhost:27017/ecommerce';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });

    await client.connect();
    console.log('Successfully connected to MongoDB');
    
    const database = client.db('ecommerce');
    const testCollection = database.collection('test');
    
    // Test insertion
    await testCollection.insertOne({ test: 'test document' });
    console.log('Test document inserted successfully');
    
    // Test query
    const result = await testCollection.findOne({ test: 'test document' });
    console.log('Test document found:', result);
    
    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

testMongoConnection();
