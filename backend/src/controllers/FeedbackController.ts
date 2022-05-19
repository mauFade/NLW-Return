import { Request, Response } from "express";
import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prismaFeedbacksRepository";
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailerMailAdapter";

class FeedbackController {
  async create(request: Request, response: Response) {
    const {
      type,
      comment,
      screenshot,
    }: { type: string; comment: string; screenshot: string } = Object(
      request["body"]
    );

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    // Retorna dados
    return response
      .status(200)
      .send({ success: true, data: "Feedback created sucessfully!" });
  }
}

export default new FeedbackController();
