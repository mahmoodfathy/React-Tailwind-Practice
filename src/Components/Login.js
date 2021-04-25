import { useContext } from "react";
import { formContext } from "../Contexts";
import Home from "./Home";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignedIn(true);
  };
  const { isSignedIn, setIsSignedIn } = useContext(formContext);

  return (
    <>
      {!isSignedIn && (
        <section className="flex flex-col items-center h-screen bg-gray-100 md:flex-row ">
          <div className="relative hidden w-full h-screen  lg:block md:w-1/3 lg:w-2/3">
            <img
              src="6 SCENE.svg"
              alt=""
              className="absolute object-cover w-full h-full"
            />
            <div className="relative z-10 m-12 text-left">
              <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
                <h2 className="text-lg font-bold tracking-tighter text-blue-400 uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 ">
                  TeensLearn
                </h2>
              </a>
              <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-black-700 tsm:text-5xl title-font">
                Discover 20+
                <br />
                Courses to Learn.
              </h1>
            </div>
          </div>
          <div className="flex w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
            <div className="w-full py-32 lg:py-6 lg:h-100">
              <h1 className="my-12 text-center text-2xl font-semibold bg-blue-200 rounded-md py-1 max-w-3xl tracking-tighter text-purple-600 md:hidden  sm:text-3xl ">
                TeensLearn
              </h1>
              <h1 className="my-12 text-2xl font-semibold text-center tracking-tighter text-black-700 sm:text-3xl title-font">
                Sign Up to a new world.
              </h1>
              <div className="flex text-center justify-center">
                <button
                  type="button"
                  className="inline-flex text-center w-full  px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                >
                  Login with Google
                </button>
                <button
                  type="button"
                  className="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black focus:bg-gray-100 hover:text-black-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email "
                    className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    autoFocus
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Your Password"
                    minLength="6"
                    className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    required
                  />
                </div>
                <div className="mt-2 text-right">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black-700 focus:text-black-700"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  Log In
                </button>
              </form>
              <p className="mt-8 text-center">
                Need an account?
                <a
                  href="#"
                  className="font-semibold text-black-500 hover:text-black-400"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </section>
      )}
      {isSignedIn && <Home />}
    </>
  );
};
export default Login;
