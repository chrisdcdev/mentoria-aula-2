import styled from "styled-components";

type SideBarProps = {
  isopen: boolean;
};

export const SideBarContainer = styled.div<SideBarProps>`
  height: 100vh;
  min-width: ${({ isopen }) => (!isopen ? `5rem` : `14rem`)};
  transition: 0.1s;

  /* min-width: 14rem; */
  background-color: #1f1f1fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const SidebarButton = styled.button<SideBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: #363636;
  border: solid 3px #fff;
  margin-right: -0.75rem;
  color: #76dcf7ff;
  transform: ${({ isopen }) => (!isopen ? `rotate(180deg)` : `initial`)};
  cursor: pointer;
  :hover {
    background-color: #e2f8ff;
    border-radius: 2rem;
    color: #000;
  }
`;

export const OptionLinkContainer = styled.div`
  margin-top: 3rem;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .deselected {
    height: 4rem;
    width: 92%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    font-weight: 600;
    gap: 0.4rem;
    border: none;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    padding: 1rem;
  }

  .selected {
    height: 4rem;
    width: 92%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    font-weight: 600;
    gap: 0.4rem;
    border: none;
    cursor: pointer;
    text-decoration: none;
    padding: 1rem;
    background-color: #363636;
    color: #76dcf7ff;
    transition: 0.2s;
  }
`;
