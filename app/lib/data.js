import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getMedicines = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/medicine`, {
            cache: "no-store",
        });

        const data = res.data;
        if (!data) {
            throw new Error("Failed to fetch data");
        }

        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};

export const getMedicineDetails = async (slug) => {
    try {
        const res = await axios.get(`/api/medicine/details/${slug}`, {
            cache: "no-store",
        });
        const data = res.data;
        if (!data) {
            throw new Error("Failed to fetch data");
        }

        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};

export const getPharmacies = async () => {
    try {
        const res = await axios.get(`${process.env.BASE_URL}/api/pharmacy`, {
            cache: "no-store",
        });
        const data = res.data;
        if (!data) {
            throw new Error("Failed to fetch data");
        }

        return data;
    } catch (error) {
        console.log("Error loading pharmacies: ", error);
    }
};

export const getMedicinesInPh = async (phSlug) => {
    try {
        const res = await axios.get(
            `${process.env.BASE_URL}/api/medicine/${phSlug}`,
            {
                cache: "no-store",
            }
        );
        const data = res.data;
        if (!data) {
            throw new Error("Failed to fetch data");
        }

        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};
