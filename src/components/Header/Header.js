import React from "react";

import {
  HeaderWrapper,
  TextWrapper,
  Title,
  Balance,
  LogoWrapper,
  TranpsarentPart,
  BlackPart,
} from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper>
      <TextWrapper>
        <Title> My balance </Title>
        <Balance> $921.48 </Balance>
      </TextWrapper>
      <LogoWrapper>
        <TranpsarentPart></TranpsarentPart>
        <BlackPart></BlackPart>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
