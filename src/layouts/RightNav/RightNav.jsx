import React, { useContext } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bg1 from "../../assets/bg1.png";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";

const RightNav = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const signUpGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const createdUser = result.user;
      })
      .catch((error) => console.error(error));
  };

  const signUpGithub = () => {
    signInWithGithub()
      .then((result) => {
        const createdUser = result.user;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-black font-bold text-2xl mb-5">Login With</h1>
        <button
          onClick={signUpGoogle}
          className="flex items-center justify-center w-64 h-12 bg-white text-blue-800 rounded-lg shadow-md border-2 border-transparent hover:border-black hover:border-solid hover:bg-gray-100 hover:text-black"
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>
        <button
          onClick={signUpGithub}
          className="flex items-center justify-center w-64 h-12 bg-white text-black rounded-lg shadow-md border-2 border-transparent hover:border-black hover:border-solid hover:bg-gray-100 hover:text-blue-900 mt-3 mb-5"
        >
          <FaGithub className="mr-2" /> Login with GitHub
        </button>
      </div>
      <div className="mt-20">
        <h1 className="text-black font-bold text-2xl mb-5">Find Us On</h1>
        <Link to={"https://www.facebook.com/Hamim.webDevloper"}>
          <div className="flex text-2xl items-center text-gray-700 w-64 mt-5 mb-5">
            <FaFacebook className="mr-2"></FaFacebook>
            <p>Facebook</p>
          </div>
        </Link>
        <hr className="border-1 border-solid border-gray-300 w-[80%]" />
        <Link to={"https://twitter.com/HamimWebDeV2004"}>
          <div className="flex text-2xl items-center  text-gray-700 w-64  mb-5 mt-5">
            <FaTwitter className="mr-2"></FaTwitter>
            <p>Twitter</p>
          </div>
        </Link>
        <hr className="border-1 border-solid border-gray-300 w-[80%]" />
        <Link to={'https://www.instagram.com/sarder.shihab.6531?igsh=aW84OGJ2cHZrZ3Ji'}>
          <div className="flex text-2xl items-center  text-gray-700 w-64  mb-5 mt-5">
            <FaInstagram className="mr-2"></FaInstagram>
            <p>Instagram</p>
          </div>
        </Link>
      </div>
      <div className="mt-20">
        <h1 className="text-black font-bold text-2xl mb-5">Q-Zone</h1>
        <div>
          <img className="mb-5" src={qZone1} alt="" />
          <img className="mb-5" src={qZone2} alt="" />
          <img className="mb-5" src={qZone3} alt="" />
        </div>
      </div>

      <div className="mt-10 mb-5 relative">
        <img src={bg1} alt="" />
        <div className="absolute top-0 left-0 text-white bg-black bg-opacity-50 p-3 h-[505px] w-[69%] ">
          <h1 className="text-4xl text-center mt-10 mb-10">
            Create an
            <br /> Amazing
            <br /> Newspaper
          </h1>
          <p className="text-center text-xl">
            Discover thousands of
            <br /> options, easy to
            <br /> customize layouts, one-
            <br />
            click to import demo
            <br /> and much more.
          </p>
          <div className="flex justify-center mt-10">
            <button className="bg-pink-600 p-5 text-xl font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
