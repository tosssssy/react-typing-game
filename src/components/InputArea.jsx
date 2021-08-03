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
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #ddd; /*枠線*/
  box-sizing: border-box;
`;
