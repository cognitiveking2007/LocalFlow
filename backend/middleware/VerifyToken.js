import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. Please login."
      });
    }

    try {

      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY
      );
      console.log(decoded);


      if (
        allowedRoles.length &&
        !allowedRoles.includes(decoded.role)
      ) {
        return res.status(403).json({
          message:
          "Forbidden: Access denied for your role"
        });
      }

      req.user = decoded;

      next();

    } catch (err) {

      return res.status(401).json({
        message:
        "Invalid or expired token"
      });
    }
  };
};