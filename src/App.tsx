import { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding-left: 32px;
`;
const Title = styled.h3``;
const AnimationButton = styled.button<{ x?: number; y?: number }>`
  ${({ x, y }) =>
    x &&
    y &&
    css`
      position: absolute;
      top: ${y}%;
      left: ${x}%;
    `}
  transition-property: all;
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const NoButton = () => {
  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);

  const handlePositionChange = useCallback(() => {
    setX(getRandomInt(10, 70));
    setY(getRandomInt(10, 70));
  }, []);

  return (
    <AnimationButton
      onClick={handlePositionChange}
      onMouseOver={handlePositionChange}
      x={x || 0}
      y={y || 0}
    >
      NO
    </AnimationButton>
  );
};

function App() {
  return (
    <Container>
      <Title>Are you Gay ?</Title>

      <ButtonWrap>
        <button onClick={() => alert("Yes. You are Gay.")}>YES</button>
        <NoButton />
      </ButtonWrap>
    </Container>
  );
}

export default App;
