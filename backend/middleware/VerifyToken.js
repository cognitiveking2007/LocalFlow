import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const verifyToken = (...allowedRoles)=>{

  return (req,res,next)=>{

    const authHeader =
      req.headers.authorization;

    if(
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ){

      return res.status(401).json({

        message:
        "Access denied. Token missing."

      });

    }

    const token =
      authHeader.split(" ")[1];

    try{

      const decoded =
        jwt.verify(
          token,
          process.env.SECRET_KEY
        );

      if(

        allowedRoles.length &&

        !allowedRoles.includes(
          decoded.role
        )

      ){

        return res.status(403).json({

          message:
          "Forbidden"

        });

      }

      req.user = decoded;

      next();

    }

    catch(err){

      return res.status(401).json({

        message:
        "Invalid token"

      });

    }

  };

};