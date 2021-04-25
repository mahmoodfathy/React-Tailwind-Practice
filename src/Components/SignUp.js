import { formContext } from "../Contexts";
import { useContext, useReducer } from "react";
import Login from "./Login";
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setIsSignedUp(true);
  };

  const { isSignedUp, setIsSignedUp } = useContext(formContext);

  const [formState, setFormState] = useReducer(
    (old, updates) => ({ ...old, ...updates }),
    { username: "", email: "", password: "", confirmPassword: "" }
  );
  const { username, email, password, confirmPassword, age } = formState;
  return (
    <>
      {!isSignedUp && (
        <section className="text-gray-700 text-center ">
          <div className="flex justify-center">
            <h1 className="text-center mt-12 flex font-semibold justify-center items-center text-blue-100 bg-purple-500 py-2 w-36   rounded-md">
              TeenLearn
            </h1>
          </div>
          <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
            <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="username"
                        className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                        value={username}
                        onChange={(e) => {
                          setFormState({ username: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full p-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => {
                        setFormState({ email: e.target.value });
                      }}
                      className="w-full px-4 py-2 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => {
                        setFormState({ password: e.target.value });
                      }}
                      className="w-full px-4 py-2 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setFormState({ confirmPassword: e.target.value });
                      }}
                      id="password"
                      name="password"
                      placeholder="confirm password"
                      className="w-full px-4 py-2 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>

                  <div className="w-full p-2 ">
                    <button className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      {isSignedUp && <Login />}
    </>
  );
};
export default SignUp;
