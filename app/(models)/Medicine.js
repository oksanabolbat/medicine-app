import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGODB_URI}`);

mongoose.Promise = global.Promise;

const medicineSchema = Schema(
    {
        slug: String,
        title: String,
        image: String,
        description: String,
        features: String,
        warnings: String,
        suitable_for: String,
        ingredients: String,
        prescription: String,
        specification: String,
    },
    {
        timestamps: true,
    }
);

const Medicine =
    mongoose.models.Medicine || mongoose.model("Medicine", medicineSchema);

export default Medicine;
