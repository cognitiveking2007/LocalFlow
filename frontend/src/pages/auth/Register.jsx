import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
        rounded-3xl
        p-10
        w-96
        shadow-xl
        "
      >

        <div className="text-center">

          {/* Put logo here */}

          <div className="text-5xl">

            🚚

          </div>

          <h1 className="text-4xl font-bold mt-4">

            Create Account

          </h1>

          <p className="text-slate-400 mt-3">

            Join Hyper Local Delivery

          </p>

        </div>


        <div className="space-y-5 mt-10">

          <input

            value={name}

            onChange={(e)=>
              setName(
                e.target.value
              )
            }

            placeholder="Name"

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

            value={email}

            onChange={(e)=>
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

            onChange={(e)=>
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


          <select

            value={role}

            onChange={(e)=>
              setRole(
                e.target.value
              )
            }

            className="
            w-full
            bg-slate-800
            rounded-2xl
            px-4
            py-4
            "

          >

            <option value="customer">

              Customer

            </option>

            <option value="rider">

              Rider

            </option>

          </select>


          <button

            onClick={handleRegister}

            className="
            w-full
            py-4
            rounded-2xl
            bg-blue-500
            hover:bg-blue-600
            transition
            "

          >

            Register

          </button>

        </div>


        <div className="mt-8 text-center">

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

  );

}

export default Register;