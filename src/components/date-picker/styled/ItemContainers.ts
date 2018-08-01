import styled, { keyframes } from "styled-components";
import { merge, flipInY, zoomIn } from "react-animations";

const flipY = merge(flipInY, zoomIn);

const slideInRightAnimation = keyframes`${flipY}`;

export const ItemContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: ${({ theme: { singleWidth } }) => singleWidth};
  height: ${({ theme: { singleHeight } }) => singleHeight};
  animation: ${({ theme: { animationDuration } }) =>
    `${animationDuration} ${slideInRightAnimation} forwards`};
`;

ItemContainers.defaultProps = {
  theme: {
    rangeWidth: "80px",
    rangeHeight: "80px",
    singleWidth: "200px",
    singleHeight: "30px",
    bgSelected: "#6a96ff",
    bgPrimary: "#ffffff",
    animationDuration: "0.5s"
  }
};
