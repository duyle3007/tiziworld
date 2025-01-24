import { createContext, useEffect, useState } from "react";

import { renderClient } from "@/utils/utils";
import Header from "./Header";
import client from "@/utils/contentfulClient";

export const FileContext = createContext();

const Layout = ({ children }) => {
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    client
      .getEntries({ content_type: "logo" })
      .then((response) => {
        setLogo(response.items[0].fields.image.fields.file.url);
      })
      .catch(console.error);

    client
      .getEntries({ content_type: "background" })
      .then((response) => {
        setBackground(response.items[0].fields.url.fields.file.url);
      })
      .catch(console.error);
  }, []);

  return renderClient(
    <FileContext.Provider value={{ logo, background }}>
      <Header />
      {children}
      {/* <Footer /> */}
    </FileContext.Provider>
  );
};

export default Layout;
