interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}

export { FeedbackCreateData, FeedbacksRepository };
