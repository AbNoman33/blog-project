import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export const postCategories = async () => {
  let res = await axios.get(BaseURL + "/post-categories");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

export const postLatest = async () => {
  let res = await axios.get(BaseURL + "/post-newest");
  //console.log(res);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};
