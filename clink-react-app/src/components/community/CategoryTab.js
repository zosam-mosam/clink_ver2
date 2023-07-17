import React from 'react';
import '../../styles/CommunityCategoryTab.scss';

export default function CommunityCategory() {
  //{카테고리 자유 0, 정보 1, 공지 2}
  return (
    <div className="CommunityCategoryContainer">
      <a href="#">베스트</a>
      <a href="#">자유</a>
      <a href="#">정보</a>
      <a href="#">공지</a>
    </div>
  );
}
