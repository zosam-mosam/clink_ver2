import React, { useState, useEffect } from "react";
import "../../styles/CommunityPost.scss";
import {
  Heart,
  ChatDots,
  Eye,
  HeartFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import Logo from "../../assets/maru.jpg";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function CommunityPost({ post, key }) {
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (post && post.likes) {
      setLikes(post.likes);
    }
  }, [post]);

  const clickLike = () => {
    if (isLike === false) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLike(!isLike);
  };

  const { writer, boardContent, views } = post || {}; // 구조 분해할 때 기본값으로 빈 객체를 사용
  const { id } = key || {};
  const navigate = useNavigate();
  const [view, setView] = useState(false); 
  return (
    <>
      <div
        className="CommunityPostContainer"
        onClick={(event) => {
          event.stopPropagation();
          navigate("/community/post/" + { id });
        }}
      >
        <div className="CommunityPostTags">
          <Button variant="primary" size="sm">
            #안녕
          </Button>{" "}
          <Button variant="primary" size="sm">
            #안녕
          </Button>{" "}
          <Button variant="primary" size="sm">
            #안녕
          </Button>{" "}
        </div>
        <div className="CommunityPost">
          <div className="PostProfileDiv">
            <div className="CommunityPostProfile">
              <div className="CommunityPostProfileImg">
                <img src={Logo} alt="Profile" />
              </div>
              <div className="CommunityPostProfileText">
                <p className="CommunityPostProfileNickname">{writer}</p>
                <p className="CommunityPostProfileTime">2분 전</p>
              </div>
            </div>
            
            <div className="menu">
              <ThreeDotsVertical onClick={() => setView(!view)}/>
              {view && <ul className="sub">
                <li><a href="#">글 수정</a></li>
                <li><a href="#">글 삭제</a></li>
              </ul>
              }
            </div>
          </div>
          <br />
          <div className="CommunityPostContent">{boardContent}</div>
          <br />
        </div>

        <div className="CommunityPostInfo">
          <button onClick={clickLike}>
            {isLike ? <HeartFill /> : <Heart />}
            &nbsp;좋아요 {likes}
          </button>
          <button>
            <ChatDots />
            &nbsp;댓글쓰기
          </button>
          <button>
            <Eye />
            &nbsp;조회 {views}
          </button>
        </div>
      </div>
    </>
  );
}
