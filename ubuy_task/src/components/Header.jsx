import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">WELCOME</h1>

            {/* Tabs */}
            <div className="flex">
                <button className="w-1/2 py-2 text-black font-medium bg-yellow-500 rounded-tl-lg">
                    <Link to="/">
                        Login
                    </Link>
                </button>
                <button className="w-1/2 py-2 text-gray-600 bg-gray-200 font-medium rounded-tr-lg">
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Header