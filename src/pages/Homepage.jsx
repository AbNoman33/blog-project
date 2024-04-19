import { useEffect, useState } from "react";
import { postLatest } from "../ApiRequest/ApiRequest.js";
import BlogList from "../Component/Bloglist";
import Layout from "../Layout/Layout";
import Loader from "../Component/Loader.jsx";

const Homepage = () => {
  let [list, SetList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await postLatest();
      SetList(res);
    })();
  }, []);
  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default Homepage;
