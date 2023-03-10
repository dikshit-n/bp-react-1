import { Actions } from "./actions";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import styled from "styled-components";
import { NAVIGATION_LINKS } from "src/routes";
import {
  CustomButton,
  CustomText,
  FlexRow,
  JustifyBetween,
  YCenter,
} from "src/components";
import { customizedTheme as theme, HamburgerIcon, mediaQuery } from "src/theme";
import { Sidebar } from "../sidebar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const StyledDesktopHeaderWrapper = styled(JustifyBetween)`
  padding: 20px;
  align-items: center;
  ${mediaQuery.down(1200)} {
    display: none;
  }
`;

const StyledTabletHeaderWrapper = styled(JustifyBetween)`
  padding: 20px;
  align-items: center;
  ${mediaQuery.down("md")} {
    display: none;
  }
  ${mediaQuery.up(1200)} {
    display: none;
  }
`;

const StyledMobileHeaderWrapper = styled(JustifyBetween)`
  width: 100%;
  background-color: ${theme.colors.themeColors.primary};
  padding: 19px;
  align-items: center;
  ${mediaQuery.up("md")} {
    display: none;
  }
`;

const StyledNavigationWrapper = styled(YCenter)``;

export interface HEADER_PROPS {
  navigationLinks?: NAVIGATION_LINKS;
  actions?: React.ReactNode;
}

export const Header = ({ navigationLinks = [], actions = null }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  const sidebarToggler = (
    <CustomButton
      style={{ margin: 0, padding: 0 }}
      onClick={() => setIsSidebarOpen(true)}
      icon={<HamburgerIcon />}
    />
  );

  return (
    <>
      <Helmet onChangeClientState={(newState) => setTitle(newState.title)} />
      <StyledMobileHeaderWrapper>
        {sidebarToggler}
        <CustomText
          as="h4"
          style={{ fontWeight: "bold", color: theme.colors.themeColors.white }}
        >
          {title}
        </CustomText>
        {actions}
      </StyledMobileHeaderWrapper>
      <StyledTabletHeaderWrapper>
        <Logo />
        <FlexRow style={{ alignItems: "center", gap: 10 }}>
          {actions}
          {sidebarToggler}
        </FlexRow>
      </StyledTabletHeaderWrapper>
      <StyledDesktopHeaderWrapper>
        <Logo />
        <StyledNavigationWrapper>
          <Navbar navigationLinks={navigationLinks} />
          {actions && <Actions>{actions}</Actions>}
        </StyledNavigationWrapper>
      </StyledDesktopHeaderWrapper>
      <Sidebar
        handleClose={() => setIsSidebarOpen(false)}
        isOpen={isSidebarOpen}
        navigationLinks={navigationLinks}
      />
    </>
  );
};
