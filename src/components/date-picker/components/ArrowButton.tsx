import * as React from "react";
import { ButtonTheme }from "../styled/Button";
import { Moment } from "moment";
import styled from "styled-components";

interface ArrowButtonProps {
  text: string,
  clickHandler,
  small?: boolean,
  disabled: boolean
};

const getButton = (small: boolean, disabled: boolean) => styled.button`
  width: ${ButtonTheme.width}
  border: none;
  outline: none;
  height: ${small ? ButtonTheme.singleHeight : ButtonTheme.rangeHeight};
  background-color: ${ButtonTheme.colorArrow};
  color: ${disabled ? ButtonTheme.colorArrow : ButtonTheme.colorArrowDisabled};
`;

const ArrowButton = (props: ArrowButtonProps) => {
  const {
    text,
    clickHandler,
    small,
    disabled } = props;
    const Button = getButton(small,disabled);
  return (
      <Button
        {...ButtonTheme}
        onClick={!disabled ? clickHandler : () => {}}
      >
        {text}
      </Button>
    );
};

export default ArrowButton;
