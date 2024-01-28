import styled from "styled-components";
import { Header } from "antd/es/layout/layout";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

export const StyledHeader = styled(Header)`
  background-color: #141414;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  fill: white;
  cursor: pointer;

  & > path {
    transition: all 0.2s ease-in-out;
    fill: white;
  }
`;
