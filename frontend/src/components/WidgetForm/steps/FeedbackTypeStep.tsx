import React from "react";
import { FeedbackTypes, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbacktypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackTypes) => void;
}

const FeedbackTypeStep = (Props: FeedbacktypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 py-5 rounded-lg w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => Props.onFeedbackTypeChanged(key as FeedbackTypes)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt}></img>
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackTypeStep;
