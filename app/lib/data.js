const baseUrl = process.env.BASE_URL;

export const getMedicines = async () => {
    try {
        const res = await fetch(`${baseUrl}/api/medicine`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};

export const getMedicineDetails = async (slug) => {
    try {
        const res = await fetch(`/api/medicine/details/${slug}`, {
            cache: "no-store",
        });
        console.log(res);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};

export const getPharmacies = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/pharmacy`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error loading pharmacies: ", error);
    }
};

export const getMedicinesInPh = async (phSlug) => {
    try {
        const res = await fetch(
            `${process.env.BASE_URL}/api/medicine/${phSlug}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};
