// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { arvanVideosRequest } from "../../../utils/requestMethods";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await arvanVideosRequest({
        url: "",
        method: "GET",
      }).then((response) => {
        res.status(200).send(response.data.data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
