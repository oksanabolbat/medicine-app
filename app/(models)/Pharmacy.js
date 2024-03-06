import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;

const pharmacySchema = Schema(
    {
        slug: String,
        title: String,
        url: String,
        logo: String,
        medicines: Array,
    },
    [
        {
            product_slug: String,
            price: Number,
        },
    ],
    {
        timestamps: true,
    }
);

const Pharmacy =
    mongoose.models.Pharmacy || mongoose.model("Pharmacy", pharmacySchema);

export default Pharmacy;
