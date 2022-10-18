// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { arvanVideosRequest } from "../../utils/requestMethods";
import mongoose from "mongoose";
import User from "../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = req.body;
    const newUser = new User({
      id: user.id,
      userName: user.email,
      image: user.image,
      name: user.userName,
      email: user.email,
    });
    mongoose
      .connect(process.env.CONNECTION_URL || "")
      .then(() => {
        newUser.save();
      })
      .then(() => res.status(200).json("Login success"))
      .catch((error) => console.log(error));
  }
}
