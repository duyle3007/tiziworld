import { useEffect } from "react";

import client from "@/utils/contentfulClient";

const HomePage = () => {
  useEffect(() => {
    // Fetch banner data from Contentful
    client
      .getEntries({ content_type: "banner" }) // Replace 'banner' with your content type ID
      .then((response) => {
        console.log("hehe", response.items[0].fields.image);
        // setBannerData(response.items);
      })
      .catch(console.error);
  }, []);

  return <div>Home page</div>;
};

export default HomePage;
