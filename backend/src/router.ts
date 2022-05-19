import { Router } from "express";

import FeedbackController from "./controllers/FeedbackController";

const router = Router();

router.post("/feedback", FeedbackController.create);

export default router;
