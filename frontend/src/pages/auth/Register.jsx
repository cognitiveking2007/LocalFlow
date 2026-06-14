import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  ArrowRight
} from "lucide-react";

import { register } from "../../api/authAPI";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("customer");


  async function handleRegister() {

    try {

      await register({

        name,

        email,

        password,

        role

      });

      navigate("/login");

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

        bg-white/5

        border
        border-white/10

        backdrop-blur-2xl

        overflow-hidden
        "
      >

        {/* Left Section */}

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
              Order.
            </h2>

            <h2 className="text-4xl font-bold">
              Deliver.
            </h2>

            <h2 className="text-4xl font-bold">
              Track.
            </h2>

          </div>

        </div>


        {/* Right Section */}

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
              Create Account
            </h1>

            <p
              className="
              text-slate-400
              mt-3
              "
            >
              Join LocalFlow today
            </p>


            <div
              className="
              space-y-6
              mt-10
              "
            >

              {/* Name */}

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

                <User size={18} />

                <input

                  value={name}

                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }

                  placeholder="Name"

                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "

                />

              </div>


              {/* Email */}

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

                  onChange={(e) =>
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


              {/* Role */}

              <div
                className="
                bg-slate-900

                border
                border-white/10

                rounded-2xl

                px-5
                py-4
                "
              >

                <select

                  value={role}

                  onChange={(e) =>
                    setRole(
                      e.target.value
                    )
                  }

                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "

                >

                  <option value="customer">

                    Customer

                  </option>

                  <option value="rider">

                    Rider

                  </option>

                </select>

              </div>


              {/* Password */}

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

                  onChange={(e) =>
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


              {/* Button */}

              <button

                onClick={handleRegister}

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

                Create Account

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

                Already have an account?

              </span>

              <Link

                to="/login"

                className="
                ml-2
                text-blue-400
                hover:text-blue-300
                "

              >

                Login

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;