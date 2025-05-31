import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFoundImage from "../assets/images/404_error.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <img src={NotFoundImage} alt="404 Not Found Error" className="max-w-sm w-full mb-8" />
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <a href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
