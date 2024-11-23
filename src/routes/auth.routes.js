import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
    
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerShema, loginShema } from "../schemas/authk.shema.js";

const router = Router();

router.post("/register", validateSchema(registerShema), register);

router.post("/login", validateSchema(loginShema), login);

router.post("/logout", logout);

router.get("/verify", verifyToken);

router.get("/profile", authRequired, profile);

export default router;
