import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./category";
import FinInfo from "./finInfo";
import ListPrint from "./listPrint";
import axios from "axios";
import { useEffect, useState } from "react";
function Community({ list }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
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
    <div className="contents" style={{ paddingBottom: "20%" }}>
      <Routes>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
      <Category />
      {data && <FinInfo data={data} />}
      <ListPrint list={list} />
      {/* 타이틀+타이틀 리스트 넘기기*/}
      <ListPrint list={list} />
      <ListPrint list={list} />
      <ListPrint list={list} />
    </div>
  );
}
export default Community;
