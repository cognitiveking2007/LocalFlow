import exp from "express";
import { ProductModel } from "../models/ProductModel.js";
import { StoreModel } from "../models/StoreModel.js";
import { UserModel } from "../models/UserModel.js";
import { verifyToken } from "../middleware/VerifyToken.js";

export const productapp = exp.Router();

async function getOwnedStore(userId){

  return StoreModel.findOne({
    owner:userId
  });

}

async function ensureOwnedStore(userId){

  const existingStore =
  await getOwnedStore(userId);

  if(existingStore){

    return existingStore;

  }

  const owner =
  await UserModel.findById(userId);

  return StoreModel.create({
    owner:userId,
    name:owner?.name || "My Store"
  });

}

productapp.post(
  "/create",
  verifyToken("admin","store"),
  async (req, res, next) => {

    try {

      const payload = {
        ...req.body
      };

      if(req.user.role==="store"){

        const store =
        await ensureOwnedStore(req.user.id);

        payload.storeId = store._id;

      }

      const product =
        await ProductModel.create(
          payload
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
  "/mine",
  verifyToken("store"),
  async (req, res, next) => {

    try {

      const store =
      await getOwnedStore(req.user.id);

      if(!store){

        return res.json([]);

      }

      const products =
      await ProductModel.find({
        storeId:store._id
      }).sort({
        createdAt:-1
      });

      res.json(products);

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

productapp.put(
  "/:id",
  verifyToken("admin","store"),
  async (req, res, next) => {

    try {

      const product =
      await ProductModel.findById(req.params.id);

      if(!product){

        return res.status(404).json({
          message:"Product not found"
        });

      }

      if(req.user.role==="store"){

        const store =
        await getOwnedStore(req.user.id);

        if(
          !store ||
          product.storeId?.toString() !== store._id.toString()
        ){

          return res.status(403).json({
            message:"Forbidden"
          });

        }

      }

      const payload = {
        ...req.body
      };

      if(req.user.role==="store"){
        delete payload.storeId;
      }

      Object.assign(product,payload);

      await product.save();

      res.json(product);

    }
    catch (err) {

      next(err);

    }

  }
);

productapp.delete(
  "/:id",
  verifyToken("admin","store"),
  async (req, res, next) => {

    try {

      const product =
      await ProductModel.findById(req.params.id);

      if(!product){

        return res.status(404).json({
          message:"Product not found"
        });

      }

      if(req.user.role==="store"){

        const store =
        await getOwnedStore(req.user.id);

        if(
          !store ||
          product.storeId?.toString() !== store._id.toString()
        ){

          return res.status(403).json({
            message:"Forbidden"
          });

        }

      }

      await product.deleteOne();

      res.json({
        message:"Product deleted"
      });

    }
    catch (err) {

      next(err);

    }

  }
);
