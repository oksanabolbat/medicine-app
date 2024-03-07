import Basket from "./basket";
import NavHeaderLink from "./nav-header-link";

export default function Header() {
    return (
        <header className="bg-sky-700 pt-10 pb-32 relative overflow-hidden">
            <nav className="">
                <ul className="flex gap-4 px-10">
                    <li>
                        <NavHeaderLink href="/">Shop</NavHeaderLink>
                    </li>
                    <li>
                        <NavHeaderLink href="/shopping-cart">
                            Shopping cart
                        </NavHeaderLink>
                    </li>
                    <li>
                        <Basket />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
