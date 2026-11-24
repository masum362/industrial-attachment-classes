import { z,ZodSchema, ZodError } from "zod";

import {Request,Response, NextFunction } from "express";

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;



const registerUserSchema = z.object({
    name:z.string().min(6).max(50),
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().regex(regex),
    profile_image: z.string(),
});
const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(regex),
});

// Generic validation middleware
function validateBody<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.message,
        });
      }
      next(error);
    }
  };
}





export type RegisterUserInput = z.infer<typeof registerUserSchema>;

export type LoginUserInput = z.infer<typeof loginUserSchema>;




export {validateBody,registerUserSchema,loginUserSchema}