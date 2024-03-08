import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGODB_URI}`);

mongoose.Promise = global.Promise;

const orderSchema = Schema(
    {
        slug: String,
        user_name: String,
        email: String,
        phone: String,
        address: String,
        sum: Number,
        items_count: Number,
        pharmacy: String,
        order: Array,
    },
    [
        {
            product_slug: String,
            price: Number,
            count: Number,
            total: Number,
        },
    ],
    {
        timestamps: true,
    }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
