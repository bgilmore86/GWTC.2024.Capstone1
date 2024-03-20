//Navbar
export default function Navbar() {
    return (
        <nav className="navbar" style= {{
            display:"flex", justifyContent: "space-between"}}>
            <h3>
            <a href="/">Home</a>
            <a href="/products">Store</a>
            <a href="/cart">Cart</a>
            <a href="/aboutus">Contact</a>
            </h3>
        </nav>
    );
}
