import { renderClient } from "@/utils/utils";
import Header from "./Header";

const Layout = ({ children }) => {
  return renderClient(
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
