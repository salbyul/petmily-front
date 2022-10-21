import { useEffect, useState } from 'react';

function Login() {
    const [image, setImage] = useState('');
    useEffect(() => {
        const max = 4;
        const min = 1;
        const prefix = '/assets/login/login0';
        const suffix = '.jpg';
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        setImage(prefix + randomNumber + suffix);
    }, []);
    return (
        <>
            <div className="flex min-h-screen items-center justify-center">
                <section className="h-full gradient-form md:h-screen">
                    <div className="container py-12 px-6 h-full">
                        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div className="xl:w-10/12">
                                <div className="block bg-white shadow-lg rounded-lg">
                                    <div className="lg:flex lg:flex-wrap g-0">
                                        <div className="lg:w-6/12 px-4 md:px-0">
                                            <div className="md:p-12 md:mx-6">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto w-40"
                                                        src="/assets/login/pawprint.png"
                                                        alt="logo"
                                                    />
                                                    <h4 className="text-3xl font-semibold mt-1 mb-12 pb-1 text-green-600">
                                                        Petmily
                                                    </h4>
                                                </div>
                                                <form>
                                                    <p className="mb-4">
                                                        Please login to your
                                                        account
                                                    </p>
                                                    <div className="mb-4">
                                                        <input
                                                            type="text"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <input
                                                            type="password"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="text-center pt-1 mb-12 pb-1">
                                                        <button
                                                            className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                            type="button"
                                                            // data-mdb-ripple="true"
                                                            // data-mdb-ripple-color="light"
                                                            // style={{
                                                            //     background:
                                                            //         'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                                            // }}
                                                        >
                                                            Login
                                                        </button>
                                                        <a
                                                            className="text-gray-500"
                                                            href="#1"
                                                        >
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center justify-between pb-6">
                                                        <p className="mb-0 mr-2">
                                                            Don't have an
                                                            account?
                                                        </p>
                                                        <button
                                                            type="button"
                                                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                        >
                                                            Sign up
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                            // style={{
                                            //     background:
                                            //         'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                            // }}
                                        >
                                            <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                                <img
                                                    src={image}
                                                    alt="loginImage"
                                                />
                                                {/* <h4 className="text-xl font-semibold mb-6">
                                                    We are more than just a
                                                    company
                                                </h4>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit, sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Login;
