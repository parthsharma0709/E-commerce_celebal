import mongoose, { mongo } from "mongoose";

const connectDB = async () => {

mongoose.connection.on('connected',() => {
    console.log("DB connected.")
})
await mongoose.connect(`${process.env.MONGODB_URL}/ECOMMERCE`)

}

export default connectDB