import mongoose from 'mongoose';

const connection = {};


async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    connection.isConnected = db.connections[0].readyState;
    console.log('x',connection.isConnected);
}


export default dbConnect;