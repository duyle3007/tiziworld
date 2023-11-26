import { renderClient } from "@/utils/utils";

const Layout = ({ children }) => {
  return renderClient(
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
