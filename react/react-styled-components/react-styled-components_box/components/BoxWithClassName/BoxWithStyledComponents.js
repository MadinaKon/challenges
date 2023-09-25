import styled from "styled-components";

const StyledBox = styled.div`
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
`;

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
}
