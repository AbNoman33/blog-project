import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Loader from "../Component/Loader";
import { useEffect, useState } from "react";
import { postByCategory } from "../ApiRequest/ApiRequest.js";
import BlogList from "../Component/Bloglist.jsx";

const PostByCategory = () => {
  let { categoryID } = useParams();

  let [list, SetList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      SetList(res);
    })();
  }, [categoryID]);
  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default PostByCategory;
