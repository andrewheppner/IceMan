import mongoose from 'mongoose';

const connection = 'mongodb://127.0.0.1:27017/usdafacts';

mongoose.Promise = global.Promise;

// if the connection to database is successful, in console will see:
// 'Connected to mongo server.'
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});

// if server can not connect to the database:
// 'Could not connect to mongo server!' + errors
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

// connecting to MongoDB
mongoose.connect(connection);
