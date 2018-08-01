import styled, { keyframes } from "styled-components";
import { merge, flipInY, zoomIn } from "react-animations";

const flipY = merge(flipInY, zoomIn);

const slideInRightAnimation = keyframes`${flipY}`;

const ItemContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  animation: ${({ theme: { animationDuration } }) =>
    `${animationDuration} ${slideInRightAnimation} forwards`}; 
`;

export const getRangeItemContainer = (selected: boolean) => ItemContainers.extend`
  background-color: ${({ theme: { bgSelected, bgPrimary } }) =>
    selected ? bgSelected : bgPrimary};
  flex-direction: column;
  width: ${({ theme: { rangeWidth } }) => rangeWidth};
  height: ${({ theme: { rangeHeight } }) => rangeHeight};
`;

export const getSingleItemContainer = (selected: boolean) => ItemContainers.extend`
  background-color: ${({ theme: { bgSelected, bgPrimary } }) =>
    selected ? bgSelected : bgPrimary};
  flex-direction: row;
  width: ${({ theme: { singleWidth } }) => singleWidth};
  height: ${({ theme: { singleHeight } }) => singleHeight};
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
