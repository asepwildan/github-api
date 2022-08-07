import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            {/* <Link to={"/"}>homr</Link>
            <Link to={"user-detail/sapi"}>user</Link> */}

            <nav className="w-full bg-blue-300 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="">
                            <h2 className="text-2xl font-bold text-white">Nebeng</h2>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
