import bannerImg from "../../../assets/task.json";
import Lottie from "lottie-react";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaArrowAltCircleRight,  } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/3">
          <Lottie
            animationData={bannerImg}
            loop={true}
            height="90%"
            width="99%"
          />
        </div>
        <div className="w-2/3 text-justify">
          <h1 className="text-2xl md:text-5xl font-bold">
            Manage your <span className="text-teal-400">Efficiently</span>
          </h1>
          <h1 className="text-xl md:text-3xl font-semibold mt-2">
            Plan, Track and Organize your work
          </h1>
          <p className="py-3">
            An Intranet platform to Manage projects, organise work and focus on
            what’s important.
          </p>
          <AwesomeButtonProgress
                  after={<FaArrowAltCircleRight className="text-xl" />}
                  type="primary"
                  key={`login`}
                  href="/login"
                  onPress={async (element, next) => {
                    next();
                  }}
                >
                  Let’s Explore
                </AwesomeButtonProgress>
        </div>
      </div>
    </div>
  );
};

export default Banner;
