import { useState } from 'react';
import './category.css';
const dum = [
  {
    src: '/images/best.png',
    select: true,
  },
  {
    src: '/images/free.png',
    select: false,
  },
  {
    src: '/images/info.png',
    select: false,
  },
  {
    src: '/images/announcement.png',
    select: false,
  },
];
function Category() {
  const [contents, setContents] = useState(dum);
  const onClick = (src) => {
    setContents(
      contents.map((con) =>
        con.src === src ? { ...con, select: true } : { ...con, select: false }
      )
    );
  };
  return (
    <div className="category">
      <h3 className="categoryTitle">카테고리</h3>
      <div className="categoryImg">
        <img
          onClick={() => {
            onClick(contents[0].src);
          }}
          className="contentIcon"
          src={contents[0].src}
          alt="best"
        />
        <img
          onClick={() => {
            onClick(contents[1].src);
          }}
          className="contentIcon"
          src={contents[1].src}
          alt="best"
        />
        <img
          onClick={() => {
            onClick(contents[2].src);
          }}
          className="contentIcon"
          src={contents[2].src}
          alt="best"
        />
        <img
          onClick={() => {
            onClick(contents[3].src);
          }}
          className="contentIcon"
          src={contents[3].src}
          alt="best"
        />
      </div>
    </div>
  );
}
export default Category;
