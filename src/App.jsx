import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { InputArea } from "./components/InputArea";
import { WordContainer } from "./components/WordContainer";
import { numState } from "./numState";

export const App = () => {
  const currentNumF = useSetRecoilState(numState);

  const [wordList, setWordList] = useState([
    "asd",
    "translucent",
    "transmit",
    "transplant",
    "transport",
    "transpose",
    "trap",
    "trash",
    "traverse",
    "treacherous",
    "tread",
    "treason",
    "treat",
    "treatment",
    "treaty",
    "tremble",
    "trend",
    "tribal",
    "tribute",
    "trickle",
    "trifle",
    "trim",
    "tripartite",
    "triple",
    "triumphantly",
    "trivial",
    "tropical",
    "trunk",
    "trying",
    "tuition",
    "tumble",
    "tumultuous",
    "tune",
    "tunnel vision",
    "Turkey",
    "turmoil",
    "turn up",
    "tutor",
    "tutorial",
    "twilight",
    "twist",
    "twitch",
    "twofold",
    "tyranny",
    "ultimate",
    "unadventurous",
    "unbridled",
    "underlying",
    "undermine",
    "underneath",
    "underpin",
    "undertake",
    "underworld",
    "undo",
    "unduly",
    "unease",
    "uneasy",
    "unemployment",
    "unenviable",
    "unequivocally",
    "uneven",
    "unfairly",
    "unfeeling",
    "unfold",
    "unhook",
    "unidirectionally",
    "unify",
    "uninterrupted",
    "union",
    "unitary",
    "unity",
    "unprecedented",
    "unqualified",
    "unravel",
    "unreliable",
    "unrequited",
    "unrivaled",
    "unsatisfactory",
    "unshakeable",
    "unsoundness",
    "unwittingly",
    "up to a point",
    "upcoming",
    "uperfluous",
    "uphold",
    "uplift",
    "upright",
    "uproar",
    "upward",
    "urge",
    "urgent",
    "usage",
    "usher",
    "utility",
    "utilize",
    "utmost",
    "utter",
    "utter",
    "utterance",
    "vacant",
    "vacuum"
  ]);

  let counter = 0;
  const matchJudgment = (e) => {
    const judgeWord = e.target.value;
    counter = 0;

    if (judgeWord === wordList[0]) {
      e.target.value = "";
      const newList = [...wordList];
      setWordList(newList.slice(1, wordList.length));
    } else {
      for (let i = 0; i < wordList[0].length; i++) {
        if (judgeWord[i] === undefined || wordList[0][i] !== judgeWord[i]) {
          currentNumF(counter);
        }
        counter += 1;
      }
    }
  };
  return (
    <>
      <SApp>
        <WordContainer wordList={wordList} />
        <InputArea onChange={matchJudgment} />
      </SApp>
    </>
  );
};

const SApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;
