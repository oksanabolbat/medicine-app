export const addMedicine = (medicine, phSlug) => {
    const productData = { ...medicine, phSlug };
    const productsArrLocal =
        JSON.parse(localStorage.getItem("medicines")) || [];

    if (productsArrLocal && productsArrLocal.length > 0) {
        let ind = productsArrLocal.findIndex(
            (el) => el.slug === productData.slug && el.phSlug === phSlug
        );

        if (ind > -1) {
            productsArrLocal[ind].count++;
        } else {
            productsArrLocal.push({ ...productData, count: 1 });
        }
    } else {
        productsArrLocal.push({ ...productData, count: 1 });
    }

    localStorage.setItem("medicines", JSON.stringify(productsArrLocal));
};

export const getBasketData = () => {
    if (typeof window !== "undefined") {
        const ls = localStorage.getItem("medicines");
        return ls ? JSON.parse(ls) : [];
    }
    return [];
};

export const getBasketCount = () => {
    if (typeof window !== "undefined") {
        const basketData = getBasketData();
        return basketData.reduce((acc, el) => (acc += el.count), 0) || 0;
    }
    return 0;
};

export const updateMedicineCount = (phSlug, medSlug, inc) => {
    const basketData = getBasketData();
    const ind = basketData.findIndex(
        (el) => el.slug === medSlug && el.phSlug === phSlug
    );
    if (ind > -1) {
        if (inc) {
            basketData[ind].count++;
        } else {
            if (basketData[ind].count > 0) {
                basketData[ind].count--;
                if (basketData[ind].count === 0) {
                    basketData.splice(ind, 1);
                }
            } else {
                return;
            }
        }

        localStorage.setItem("medicines", JSON.stringify(basketData));
    }
};

export const sendOrder = (phSlug) => {
    const basketData = getBasketData();
    localStorage.setItem(
        "medicines",
        JSON.stringify(basketData.filter((el) => el.phSlug !== phSlug))
    );
};
