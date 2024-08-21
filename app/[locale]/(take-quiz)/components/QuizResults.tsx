import { Button, Progress } from "@nextui-org/react";
import happyReaction from "@/public/assets/happy-reaction.svg";
import badReaction from "@/public/assets/bad-reaction.svg";
import Image from "next/image";
import { cn } from "@/lib";
import { useTranslations } from "next-intl";

interface QuizResultsProps {
  correctAnswers: number;
  quizLength: number;
  setIsHistoryVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizResults = ({
  correctAnswers,
  quizLength,
  setIsHistoryVisible,
}: QuizResultsProps) => {
  const scorePercentage = (correctAnswers / quizLength) * 100;
  const t = useTranslations("TakeQuiz");
  const message = scorePercentage > 60 ? t("awesome") : t("notYourDay");

  return (
    <div className="bg-default-100 px-6 py-6 pt-8 rounded-xl flex flex-col gap-8 items-center w-[700px]">
      <Progress
        aria-label="Progress"
        value={100}
        color="primary"
        className="w-full"
      />
      <div className="w-full flex flex-col gap-4">
        <p className="text-4xl font-semibold text-foreground-700">
          {t("summary")}
        </p>
        <p className="text-foreground-600 text-base mt-1">{t("thankYou")}</p>
        <p className="text-4xl font-semibold text-foreground-700 mt-2">
          {t("yourScoreIs")}
        </p>
        <p
          className={cn(
            "text-4xl font-semibold text-foreground-700 mt-2 text-center",
            scorePercentage > 60 ? "text-green-700" : "text-red-700"
          )}
        >
          {correctAnswers}/{quizLength}
        </p>
        <p
          className={cn(
            "text-2xl font-semibold text-foreground-700 text-center -mt-2",
            scorePercentage > 60 ? "text-green-700" : "text-red-700"
          )}
        >
          {message}
        </p>
        {scorePercentage > 60 ? (
          <Image
            alt="happy-animation"
            src={happyReaction}
            className="self-center mt-2"
          />
        ) : (
          <Image
            alt="happy-animation"
            src={badReaction}
            className="self-center mt-2"
          />
        )}
      </div>
      <Button
        color="primary"
        className="ml-auto"
        onClick={() => setIsHistoryVisible(true)}
      >
        {t("seeResults")}
      </Button>
    </div>
  );
};

export default QuizResults;
