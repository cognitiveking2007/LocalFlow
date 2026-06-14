import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  ArrowRight
} from "lucide-react";

import { login } from "../../api/authAPI";
import useAuthStore from "../../store/authStore";

function Login() {

  const navigate = useNavigate();

  const getProfile =
    useAuthStore(
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

      localStorage.setItem(
        "token",
        res.data.token
      );

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
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-blue-950

      flex
      items-center
      justify-center

      p-6
      "
    >

      <div
        className="
        w-full
        max-w-7xl

        grid
        lg:grid-cols-2

        rounded-[40px]

        border
        border-white/10

        bg-white/5

        backdrop-blur-2xl

        overflow-hidden
        "
      >

        <div
          className="
          hidden
          lg:flex

          flex-col
          justify-center

          p-16
          "
        >

          <h1
            className="
            text-6xl
            font-black
            "
          >
            LOCALFLOW
          </h1>

          <p
            className="
            text-slate-400
            mt-4
            text-xl
            "
          >
            Hyperlocal Delivery Platform
          </p>

          <div
            className="
            mt-16
            space-y-10
            "
          >

            <h2 className="text-4xl font-bold">
              Fast.
            </h2>

            <h2 className="text-4xl font-bold">
              Reliable.
            </h2>

            <h2 className="text-4xl font-bold">
              Real-Time.
            </h2>

          </div>

        </div>


        <div
          className="
          flex
          items-center
          justify-center

          p-10
          md:p-16
          "
        >

          <div className="w-full max-w-md">

            <h1
              className="
              text-5xl
              font-bold
              "
            >
              Welcome Back
            </h1>

            <p
              className="
              text-slate-400
              mt-3
              "
            >
              Sign in to continue
            </p>

            <div
              className="
              space-y-6
              mt-10
              "
            >

              <div
                className="
                flex
                items-center

                gap-3

                px-5
                py-4

                rounded-2xl

                bg-slate-900

                border
                border-white/10
                "
              >

                <Mail size={18} />

                <input

                  value={email}

                  onChange={(e)=>
                    setEmail(
                      e.target.value
                    )
                  }

                  placeholder="Email"

                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "

                />

              </div>


              <div
                className="
                flex
                items-center

                gap-3

                px-5
                py-4

                rounded-2xl

                bg-slate-900

                border
                border-white/10
                "
              >

                <Lock size={18} />

                <input

                  type="password"

                  value={password}

                  onChange={(e)=>
                    setPassword(
                      e.target.value
                    )
                  }

                  placeholder="Password"

                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "

                />

              </div>


              <button

                onClick={handleLogin}

                className="
                w-full

                py-4

                rounded-2xl

                bg-gradient-to-r

                from-blue-500
                to-indigo-500

                flex
                items-center
                justify-center

                gap-2

                hover:scale-[1.02]

                transition
                "

              >

                Login

                <ArrowRight size={18} />

              </button>

            </div>


            <div
              className="
              mt-10
              text-center
              "
            >

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

      </div>

    </div>

  );

}

export default Login;