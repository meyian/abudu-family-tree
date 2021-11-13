import Poll from "react-polls";
import { useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const pollQuestion = "Which Naaga improvement project should we tackle?";

const GET_VOTES = gql`
  query MyQuery {
    polls(where: { poll_name: { _eq: "naaga_initiative" } }) {
      poll_name
      poll_data
      id
    }
  }
`;

const UPDATE_VOTE_COUNT = gql`
  mutation MyMutation($data: jsonb!) {
    update_polls(
      where: { poll_name: { _eq: naaga_initiative } }
      _set: { poll_data: $data }
    ) {
      affected_rows
    }
  }
`;

const AboutPage = () => {
  const { loading, error, data } = useQuery(GET_VOTES);
  const [updateVoteCount] = useMutation(UPDATE_VOTE_COUNT);
  const [pollAnswers, setPollAnswers] = useState([]);

  useEffect(() => {
    if (data) {
      const queryDataStr = data.polls[0].poll_data;
      const queryData = JSON.parse(queryDataStr);

      console.log("queryData");
      console.log(queryData);

      setPollAnswers(queryData);
    }
  }, [data]);

  const updateDBVoteCount = (newData) => {
    updateVoteCount({ variables: { data: JSON.stringify(newData) } });
  };

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    updateDBVoteCount(pollAnswers);
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
