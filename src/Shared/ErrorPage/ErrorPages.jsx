/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorPage from "../../assets/error.json"

const ErrorPages = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <div className="flex flex-col items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Lottie
            animationData={errorPage}
            loop={true}
            height="90%"
            width="99%"
          />
            <Link to="/">
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPages;
