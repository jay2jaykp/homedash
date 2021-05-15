import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from "carbon-components-react";
import { Notification20, Search20 } from "@carbon/icons-react";
import { Link } from "react-router-dom";

const NavOptions: React.FC = () => {
  return (
    <>
      <Link to="/expense" component={HeaderMenuItem}>
        Expense
      </Link>
      <Link to="/budget" component={HeaderMenuItem}>
        Budget
      </Link>
    </>
  );
};

export const AppHeader: React.FC = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="header">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="header button"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName prefix="HDX">Finance</HeaderName>
          <HeaderNavigation aria-label="menu options">
            <NavOptions />
          </HeaderNavigation>
          <SideNav
            aria-label="side nav"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <NavOptions />
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="search">
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="notification">
              <Notification20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};
