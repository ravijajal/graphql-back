import mongoose from "mongoose";
const connect = () => {
    mongoose.connect(process.env.MONGOOSE_URL);
}
export default {
    connect
}