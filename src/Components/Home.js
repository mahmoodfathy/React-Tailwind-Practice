import { useContext } from "react";
import { formContext } from "../Contexts";

const Home = () => {
  const { isSignedIn, setIsSignedIn } = useContext(formContext);
  const handleClick = () => {
    setIsSignedIn(false);
  };
  return (
    <section class="text-gray-700 body-font">
      <div class="container px-8 mx-auto py-36 lg:px-4">
        <div class="flex flex-col  w-full mb-12 text-left lg:text-center">
          <h2 class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">
            Welcome Home !
          </h2>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="bg-purple-400  rounded-md w-36 text-center text-white "
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
