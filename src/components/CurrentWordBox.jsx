import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useNumState } from "../useNumState";

export const CurrentWordBox = (props) => {
  const { children = "" } = props;
  const num = useRecoilValue(useNumState);
  const head = children.substr(0, num);
  const tail = children.substr(num, children.length);

  return (
    <SWordBox>
      <SDiv>
        <Shead>{head}</Shead>
        <Stail>{tail}</Stail>
      </SDiv>
    </SWordBox>
  );
};

const SWordBox = styled.div`
  height: 45px;
  font-size: 25px;
  padding: 4px 8px;
  margin: 2px;
  background-color: lightgreen;
  border-radius: 15px;
`;

const Shead = styled.div`
  color: white;
`;

const Stail = styled.div`
  color: black;
`;

const SDiv = styled.div`
  display: flex;
`;
