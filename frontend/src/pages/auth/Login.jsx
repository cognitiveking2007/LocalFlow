
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../api/authAPI";
import useAuthStore from "../../store/authStore";

function Login() {

  const navigate = useNavigate();

  const getProfile = useAuthStore(
    state => state.getProfile
  );

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

 
async function handleLogin() {

  try {

    const res =
      await login({

        email,

        password

      });

    await getProfile();

    const role =
      res.data.user.role;

    if (role === "admin") {

      navigate("/admin");

    }

    else if (role === "rider") {

      navigate("/rider");

    }

    else {

      navigate("/customer");

    }

  }

  catch (err) {

    console.log(err);

  }

}



  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-950
      "
    >

      <div
        className="
        bg-slate-900
        border
        border-white/5
        p-10
        rounded-3xl
        w-96
        shadow-xl
        "
      >

        <div className="text-center">

          <h1 className="text-4xl font-bold">

            Welcome Back

          </h1>

          <p className="text-slate-400 mt-3">

            Sign in to continue

          </p>

        </div>


        <div className="space-y-5 mt-10">

          <input

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            placeholder="Email"

            className="
            w-full
            bg-slate-800
            rounded-2xl
            px-4
            py-4
            outline-none
            "

          />


          <input

            type="password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            placeholder="Password"

            className="
            w-full
            bg-slate-800
            rounded-2xl
            px-4
            py-4
            outline-none
            "

          />


          <button

            onClick={handleLogin}

            className="
            w-full
            py-4
            rounded-2xl
            bg-blue-500
            hover:bg-blue-600
            transition
            "

          >

            Login

          </button>

        </div>


        <div className="mt-8 text-center">

          <span className="text-slate-400">

            Don't have an account?

          </span>

          <Link

            to="/register"

            className="
            ml-2
            text-blue-400
            hover:text-blue-300
            "

          >

            Register

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Login;
