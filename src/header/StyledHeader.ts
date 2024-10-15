import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  min-width: 350px;
  padding: 0 100px;
  border-bottom: 1px solid #eee;
  background-color: ${(props) => props.theme.color.bgSurface};
  z-index: 999;

  @media (max-width: 650px) {
    padding: 0 10px;
  }
`;

export const PageTitle = styled.h1`
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.grey80};
  white-space: nowrap;

  @media (max-width: 650px) {
    font-size: 25px;
  }
`;

export const MenuButton = styled.button`
  width: auto;
  height: auto;
`;

export const ModeWrap = styled.div`
  width: auto;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  &:last-child {
    justify-content: flex-end;
  }
`;
