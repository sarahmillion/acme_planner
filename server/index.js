const db = require('./db');
const client = db.client;
const createTables = db.createTables;
const createCustomer = db.createCustomer;
const createRestaurant = db.createRestaurant;
const fetchCustomers = db.fetchCustomers;


const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
    const [jack, jill, jane, TexasRoadhouse, Charlestons, RibCrib] = await Promise.all([
        createCustomer({ name: 'jack'}),
        createCustomer({ name: 'jill'}),
        createCustomer({ name: 'jane'}),
        createRestaurant({ name: 'TexasRoadhouse'}),
        createRestaurant({ name: 'Charlestons'}),
        createRestaurant({ name: 'RibCrib'}),
    ]);
    console.log('TexasRoadhouse.id');
};

init();