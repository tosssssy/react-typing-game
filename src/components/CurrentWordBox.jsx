import styled from "styled-components";

export const CurrentWordBox = (props) => {
  const { children } = props;

  return <SWordBox>{children}</SWordBox>;
};

const SWordBox = styled.div`
  height: 42px;
  font-size: 25px;
  padding: 4px;
  margin: 2px;
`;
