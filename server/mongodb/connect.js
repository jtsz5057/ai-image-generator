import mongoose, { connect } from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => connect.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;