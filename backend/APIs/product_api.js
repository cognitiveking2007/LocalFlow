import exp from "express";
import { ProductModel } from "../models/ProductModel.js";

export const productapp = exp.Router();

productapp.post(
  "/create",
  async (req, res, next) => {

    try {

      const product =
        await ProductModel.create(
          req.body
        );

      res
        .status(201)
        .json(product);

    }
    catch (err) {

      next(err);

    }

  }
);

productapp.get(
  "/store/:id",
  async (req, res, next) => {

    try {

      const products =
        await ProductModel.find({

          storeId: req.params.id

        });

      res.json(products);

    }
    catch (err) {

      next(err);

    }

  }
);