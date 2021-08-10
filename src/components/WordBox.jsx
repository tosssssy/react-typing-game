import styled from "styled-components";

export const WordBox = (props) => {
  const { children } = props;

  return (
    <>
      <SWordBox>{children}</SWordBox>
    </>
  );
};

const SWordBox = styled.div`
  height: 45px;
  font-size: 25px;
  padding: 4px;
  margin: 2px;
`;
