import * as React from "react";
import {getButton, ButtonTheme }from "../styled/Button";
import { Moment } from "moment";

interface ArrowButtonProps {
  text: string,
  clickHandler,
  small?: boolean,
  disabled: boolean
};

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
