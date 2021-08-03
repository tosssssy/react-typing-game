import styled from "styled-components";

export const CurrentWordBox = (props) => {
  const { children } = props;

  return <SWordBox>{children}</SWordBox>;
};

const SWordBox = styled.div`
  height: 45px;
  font-size: 25px;
  padding: 4px 8px;
  margin: 2px;
  background-color: lightgreen;
  border-radius: 15px;
`;
