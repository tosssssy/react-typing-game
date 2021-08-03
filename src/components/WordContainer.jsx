import styled from "styled-components";
import { CurrentWordBox } from "./CurrentWordBox";
import { WordBox } from "./WordBox";

export const WordContainer = (props) => {
  const { wordList } = props;
  return (
    <SWordContainer>
      {wordList.map((word, index) => {
        if (index === 0) {
          return <CurrentWordBox key={index}>{word}</CurrentWordBox>;
        } else return <WordBox key={index}>{word}</WordBox>;
      })}
    </SWordContainer>
  );
};

const SWordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: skyblue;
  width: 600px;
`;
