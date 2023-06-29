import {
  LogoContainer,
  OptionLinkContainer,
  // SideBarButton,
  SideBarContainer,
  SideButtonContainer,
  SidebarButton,
  TopContent,
} from "../style/SideBar";
import { useState } from "react";

import LogoExpanded from "../assets/react-expanded.svg";
import Logo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const paths = [
  {
    id: 2,
    label: "Usuários",
    icon: "group",
    link: "/users",
  },
  {
    id: 3,
    label: "Bancos",
    icon: "account_balance",
    link: "/banks",
  },
  {
    id: 5,
    label: "Campanhas",
    icon: "volunteer_activism",
    link: "/campaigns",
  },
];

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const router = window.location.pathname;

  return (
    <SideBarContainer isopen={sidebarOpen}>
      <TopContent>
        <LogoContainer>
          {sidebarOpen ? (
            <img src={LogoExpanded} alt="ProjectLogoExpanded" />
          ) : (
            <img src={Logo} alt="ProjectLogo" />
          )}
        </LogoContainer>
        <SideButtonContainer>
          <SidebarButton
            isopen={!sidebarOpen}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </SidebarButton>
        </SideButtonContainer>
        <OptionLinkContainer>
          {paths.map(({ id, link, icon, label }) => {
            return (
              <Link
                key={id}
                to={link} 
                // onClick={() => navigate(`${link}`)}
                className={link === router ? "selected" : "deselected"}
                style={!sidebarOpen ? { width: `fit-content` } : {}}              >
                <span className="material-symbols-outlined">{icon}</span>
                {sidebarOpen ? label : null}
              </Link>
            );
          })}
        </OptionLinkContainer>
      </TopContent>
    </SideBarContainer>
  );
}
