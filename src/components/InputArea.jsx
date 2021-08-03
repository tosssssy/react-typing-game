import styled from "styled-components";

export const InputArea = (props) => {
  const { onChange } = props;

  return (
    <>
      <SInput type="text" onChange={onChange} />
    </>
  );
};

const SInput = styled.input`
  width: 550px;
  margin: auto;
  padding: 10px 15px;
  outline: none;
  font-size: 25px;
  border-radius: 15px;
  border: 2px solid #ddd; /*枠線*/
  text-align: center;
  position: relative;
  top: -70px;
`;
