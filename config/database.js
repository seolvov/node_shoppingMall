import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // 1순위
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected database")
    } catch (err) { // err 를 상수화 시킴
        // console.log(err)
        console.log(err.message)
    }
}

export default connectDB