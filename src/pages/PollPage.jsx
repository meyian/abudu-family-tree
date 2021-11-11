import Poll from "react-polls";
import { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const pollQuestion = "Which project should we tackle?";

const GET_VOTES = gql`
  query MyQuery {
    polls {
      poll_name
      poll_data
    }
  }
`;

const UPDATE_VOTE_COUNT = gql`
  mutation MyMutation($data: String!) {
    update_polls(
      where: { poll_name: { _eq: naaga_initiative } }
      _set: { poll_data: $data }
    ) {
      affected_rows
    }
  }
`;

const AboutPage = () => {
  const { loading, error, voteData } = useQuery(GET_VOTES);
  const [updateVoteCount] = useMutation(UPDATE_VOTE_COUNT);
  const [pollAnswers, setPollAnswers] = useState([]);

  console.log(error);

  if (voteData) {
    console.log(voteData);
    // setPollAnswers();
  }
  const updateDBVoteCount = (voteData) => {
    updateVoteCount({ variables: { data: voteData } });
  };

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    updateDBVoteCount({ voteData: newPollAnswers });
    setPollAnswers(newPollAnswers);
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>
      Error loading page. <span style={{ fontSize: "1.3rem" }}>😭</span>{" "}
    </div>
  ) : (
    <div>
      <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} />
    </div>
  );
};

export default AboutPage;

/*

mutation MyMutation {
  insert_polls(objects: {poll_name: "naga_initiative", poll_data: "{}"}){
    affected_rows
  }
}

--

[
    { option: "Renovation of old family house", votes: 0 },
    { option: "Renovation of old primary school block", votes: 0 },
    {
      option:
        "Provision of potable water (e.g. borehole) to other parts of Naaga",
      votes: 0,
    },
    { option: "Supporting the clinic in Naaga", votes: 0 },
  ]


*/
