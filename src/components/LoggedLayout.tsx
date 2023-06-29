import { LayoutContainer } from "../style/LoggedLayout";
import SideBar from "./SideBar";

const LoggedLayout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <SideBar />
      <div className="routedContent">{children}</div>
    </LayoutContainer>
  );
};

export default LoggedLayout;
