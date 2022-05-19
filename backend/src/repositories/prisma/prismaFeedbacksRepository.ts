import { prisma } from "../../services/prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedbacks.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot,
      },
    });
  }
}
