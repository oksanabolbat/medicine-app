import Input from "./input";

const MainForm = () => {
    return (
        <div className="col-span-12 sm:col-span-6 pt-4 pr-2">
            <Input
                id="name"
                name="user_name"
                label="Name"
                placeholder="Please enter your full name"
                required={true}
            />
            <Input
                id="email"
                type="text"
                name="email"
                label="Email"
                required={true}
            />
            <Input
                id="phone"
                name="phone"
                label="Phone"
                placeholder="international format: +38..."
                required={true}
            />
            <Input id="address" name="address" label="Address" />
        </div>
    );
};

export default MainForm;
