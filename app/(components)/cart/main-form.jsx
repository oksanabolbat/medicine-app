import Input from "./input";

const MainForm = () => {
    return (
        <form action="post" className="col-span-12 sm:col-span-6">
            <Input
                id="name"
                name="name"
                label="Name"
                placeholder="Please enter your full name"
            />
            <Input id="email" type="text" name="email" label="Email" />
            <Input
                id="phone"
                name="phone"
                label="Phone"
                placeholder="international format: +38..."
            />
            <Input id="address" name="address" label="Address" />
        </form>
    );
};

export default MainForm;
