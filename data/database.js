import mongoose, { mongo } from "mongoose";

export const connectDB = () => {
mongoose.connect(process.env.MONGO_URI, {
        dbName: "todo",
    })
        .then(() => console.log("DB Connected"))
        .catch((e) => console.log(e));
};
