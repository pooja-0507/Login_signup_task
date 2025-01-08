import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">WELCOME</h1>

            {/* Tabs */}
            <div className="flex">
                <button className="w-1/2 py-3 text-black font-medium bg-yellow-500 rounded-l-[0.3rem]">
                    <Link to="/">
                        Login
                    </Link>
                </button>
                <button className="w-1/2 py-3 text-gray-600 bg-gray-200 font-medium rounded-r-[0.3rem]">
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Header