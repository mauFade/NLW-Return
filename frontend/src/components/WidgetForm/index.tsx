import { useState } from "react";

import CloseButton from "../CloseButton";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";

import FeedbackTypeStep from "./steps/FeedbackTypeStep";
import FeedbackContentStep from "./steps/FeedbackContentStep";
import FeedbackSuccessStep from "./steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "Bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: "Idea",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: "Thought",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbacktype] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const handleRestarFeedback = () => {
    setFeedbackSent(false);
    setFeedbacktype(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleRestarFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbacktype} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onReturn={handleRestarFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 💜 por{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/mauricio-cardoso-2283541a4/"
          target="_blank"
        >
          Mauricio Cardoso
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
