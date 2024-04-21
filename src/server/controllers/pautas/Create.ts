import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface IPautas {
  nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IPautas>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IPautas>, res: Response) => {
  console.log(req.body);

  return res.send("Create!");
};