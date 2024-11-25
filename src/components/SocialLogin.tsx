import useAuth from "@/Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://job-portal-server-side-tau.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  const handleGithubSignIn = () => {
    githubSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://job-portal-server-side-tau.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center p-5 border border-gray-500 rounded-full"
      >
        <p className="flex items-center justify-center text-black rounded-full">
          <FaGoogle className="text-xl" />
        </p>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="flex items-center p-5 border border-gray-500 rounded-full"
      >
        <p className="flex items-center justify-center text-black rounded-full">
          <FaGithub className="text-xl" />
        </p>
      </button>
    </div>
  );
};

export default SocialLogin;
