"use client";
import { useState } from "react";
import Button from "../ui/button";
import Input from "./input";
import { useAppContext } from "@/app/(context)";

const MainForm = () => {
    const { updateUserData, contactForm } = useAppContext();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [warning, setWarning] = useState("");

    const formIsFilled = contactForm.isReady;

    const handleConfirmUserForm = (e) => {
        e.preventDefault();
        const missedFields = [];
        if (userData.name.trim() === "") {
            missedFields.push("name");
        }
        if (userData.email.trim() === "") {
            missedFields.push("email");
        }
        if (userData.phone.trim() === "") {
            missedFields.push("phone");
        }
        if (userData.address.trim() === "") {
            missedFields.push("address");
        }

        setWarning(
            missedFields.length > 0
                ? `Please  enter ${missedFields.join(", ")}`
                : ""
        );

        updateUserData(userData, true);
    };

    const handleEditUserForm = (e) => {
        e.preventDefault();
        updateUserData(userData, false);
    };

    const handleEditInput = (name, val) => {
        setUserData((prev) => ({ ...prev, [name]: val }));
    };

    return (
        <form className="col-span-12 sm:col-span-6 pt-4 pr-2">
            <Input
                id="name"
                name="name"
                label="Name"
                placeholder="Please enter your full name"
                required={true}
                readOnly={formIsFilled}
                onChange={handleEditInput}
            />
            <Input
                id="email"
                type="text"
                name="email"
                label="Email"
                required={true}
                readOnly={formIsFilled}
                onChange={handleEditInput}
            />
            <Input
                id="phone"
                name="phone"
                label="Phone"
                placeholder="international format: +38..."
                required={true}
                readOnly={formIsFilled}
                onChange={handleEditInput}
            />
            <Input
                id="address"
                name="address"
                label="Address"
                onChange={handleEditInput}
                readOnly={formIsFilled}
            />
            <div className="flex justify-between  mt-4 items-center1">
                <p className="text-xs text-red-700">{warning ?? { warning }}</p>
                <div className="text-right flex gap-4">
                    <Button onClick={handleConfirmUserForm}>confirm</Button>
                    <Button onClick={handleEditUserForm}>edit</Button>
                </div>
            </div>
        </form>
    );
};

export default MainForm;
