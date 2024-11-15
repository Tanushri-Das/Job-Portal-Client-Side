import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="flex items-center p-5 border border-gray-500 rounded-full">
        <p className="flex items-center justify-center text-black rounded-full">
          <FaGoogle className="text-xl"/>
        </p>
      </button>
      <button className="flex items-center p-5 border border-gray-500 rounded-full">
        <p className="flex items-center justify-center text-black rounded-full">
          <FaGithub className="text-xl"/>
        </p>
      </button>
    </div>
  );
};

export default SocialLogin;
