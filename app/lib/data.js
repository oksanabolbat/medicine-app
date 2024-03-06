export const getMedicines = async () => {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/medicine`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
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
            throw new Error("Failed to fetch topics");
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
            throw new Error("Failed to fetch topics");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error loading medicines: ", error);
    }
};
