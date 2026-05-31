import type { NextFunction, Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://dttrtfkndflccxmkaakg.supabase.co",
  process.env.SUPABASE_SECRET_KEY!,
);
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    const address = user?.user_metadata.custom_fields.address;

    if (address) {
      req.userId = address;
      next();
    } else {
      res.status(403).json({
        meassage: "Incorrect credentials",
      });
    }
    console.log(user);
    console.log(error);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
