import { useState, FormEvent } from "react";

import { ArrowLeft } from "phosphor-react";
import { FeedbackTypes, feedbackTypes } from "..";

import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackTypeProps {
  feedbackType: FeedbackTypes;
  onFeedbackSent: () => void;
  onReturn: () => void;
}

const FeedbackContentStep = (Props: FeedbackTypeProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const FeedbackData = feedbackTypes[Props.feedbackType];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    Props.onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="left-5 top-5 text-zinc-400 hover:text-zinc-100 absolute"
          onClick={Props.onReturn}
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
        <span className="text-xl leadeing-6 flex items-center gap-2">
          <img
            src={FeedbackData.image.source}
            alt={FeedbackData.image.alt}
            className="w-6 h-6"
          />
          {FeedbackData.title}
        </span>
        <CloseButton />
      </header>

      <form className="py-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex mt-2 gap-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            className="rounded-md bg-brand-500 text-zinc-100 border-none p-2 flex-1 justify-center items-start text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
            disabled={comment.length === 0}
          >
            Envie seu Feedback
          </button>
        </footer>
      </form>
    </>
  );
};

export default FeedbackContentStep;
