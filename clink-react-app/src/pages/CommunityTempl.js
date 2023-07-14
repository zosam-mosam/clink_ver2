import { Route, Routes } from "react-router-dom";
import Category from "../components/community/CommunityCategory";
import FinInfo from "../components/community/finInfo";
import ListPrint from "../components/community/listPrint";
import axios from "axios";
import { useEffect, useState } from "react";
function Community({ list }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //   const ID_KEY = 'FaodiymBSIFGKB1jVbkU';
        //   const SECRET_KEY = 'rz1LWa559t';
        const newsAPIKey = "e797558e0c3c4523940a90152d3872c2";
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=" +
            newsAPIKey
        );
        const d = response.data.articles;
        const dl = [];
        for (let i = 0; i < d.length; i++) {
          if (d[i].urlToImage != null) {
            dl.push(d[i]);
          }
        }
        console.log(d);
        setData(dl);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="contents" style={{ paddingBottom: "20%"}}>
      <Routes>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
      <Category />
      <div className="expcategory" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px"}}>
        {data && <FinInfo data={data} />}
        <ListPrint list={list} />
        {/* 타이틀+타이틀 리스트 넘기기*/}
        <ListPrint list={list} />
        <ListPrint list={list} />
        <ListPrint list={list} />
      </div>
    </div>
  );
}
export default Community;
