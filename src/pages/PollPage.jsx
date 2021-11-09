import Poll from "react-polls";
import { useState } from "react";

const pollQuestion = "Is react-polls useful?";

const AboutPage = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Yes", votes: 8 },
    { option: "No", votes: 2 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
  };

  return (
    <div>
      <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} />
    </div>
  );
};

export default AboutPage;
