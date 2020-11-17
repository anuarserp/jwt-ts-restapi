import { RequestHandler, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
   return jwt.sign({ id: user.id, emai: user.email }, config.jwtSecret, {
      expiresIn: 86000,
   });
}

export const singup: RequestHandler = async (req, res) => {
   if (!req.body.email || !req.body.password) {
      return res
         .status(400)
         .json({ message: "Ingrese su correo y contraseña" });
   }

   const user = await User.findOne({ email: req.body.email });
   if (user) {
      return res
         .status(400)
         .json({ msg: "El Correo ya se encuentra registrado" });
   }

   const newUser = new User(req.body);
   await newUser.save();
   return res.status(201).json(newUser);
};

export const singin: RequestHandler = async (req, res) => {
   if (!req.body.email || !req.body.password) {
      return res
         .status(400)
         .json({ message: "Por favor tu E-Mail y Contraseña" });
   }
   const user = await User.findOne({ email: req.body.email });
   if (!user) {
      return res.status(400).json({ message: "el usuario no nexiste" });
   }
   const istMatch = await user.comparedPass(req.body.password);
   if (istMatch) {
      return res.status(200).json({ token: createToken(user) });
   }
   return res
      .status(400)
      .json({ message: "El E-mail o la contraseña son incorrectas" });
};
