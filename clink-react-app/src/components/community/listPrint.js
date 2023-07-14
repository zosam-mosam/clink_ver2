import './listPrint.css';
import LikeButton from './likeButton';
function ListPrint({ list }) {
  const lists = () => {
    const bestList = [];
    for (let i = 0; i < list.length; i++) {
      bestList.push(
        <li className="li" key={list[i].id}>
          <b className="listNum">{i + 1}</b>
          <b className="d">{list[i].title}</b>
          <LikeButton className="likeButton" />
        </li>
      );
    }
    return bestList;
  };
  return (
    <div className="listForm">
      <p className="listTitle">
        <b>실시간 인기글</b>
      </p>
      <ol className="list">{lists()}</ol>
    </div>
  );
}
export default ListPrint;
