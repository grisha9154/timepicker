import styled from "styled-components";

const Button = (small: boolean, disabled: boolean) => styled.button`
  width: 30px; //TODO: change to variable
  border: none;
  outline: none;
  height: ${({ theme: { singleHeight, rangeHeight } }) =>
   small ? singleHeight : rangeHeight};
  background-color: ${({ theme: { arrowColor } }) => arrowColor};
  color: ${({ theme: { colorArrow, colorArrowDisabled } }) =>
    disabled ? colorArrow : colorArrowDisabled};
`;

const ButtonTheme = {
  rangeHeight: "80px",
  singleHeight: "30px",
  colorArrow: "#90949f",
  colorArrowDisabled: "#c8ccd7",
}

export {
   Button as getButton,
   ButtonTheme,
  }
