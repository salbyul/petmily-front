import { useState } from 'react';

function Navbar() {
    const [input, setInput] = useState('');
    const onChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap shadow-md bg-gray-50 p-6 fixed-top">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <a href="/" className="flex items-center justify-center">
                        <img
                            src="/assets/pawprint.png"
                            alt="Petmily Logo"
                            className="fill-current h-8 w-8 mr-2"
                        />
                        <span className="font-semibold text-xl tracking-tight">
                            Petmily
                        </span>
                    </a>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3  py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {/* <a
                            href="#!"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
                        >
                            Docs
                        </a>
                        <a
                            href="#!"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
                        >
                            Examples
                        </a>
                        <a
                            href="#!"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
                        >
                            Blog
                        </a> */}
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                    placeholder="Search"
                                    required
                                    value={input}
                                    onChange={onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
