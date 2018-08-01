import styled from "styled-components";

const RangeItemText = (disabled: boolean, selected: boolean, secondary: boolean ) =>  styled.span`
  color: ${({
    theme: { colorDisabled, colorSelected, colorText }
  }) => (disabled ? colorDisabled : selected ? colorSelected : colorText)}
  font-size: ${(secondary ? "x-small" : "x-large")};
  text-transform: uppercase;
`;

 const RangeItemTextTheme = {
  theme: {
    colorDisabled: "#b8bcc7",
    colorSelected: "#ffffff",
    colorText: "#373a41"
  }
};


export {
  RangeItemText as getRangeItemText,
  RangeItemTextTheme,
};
