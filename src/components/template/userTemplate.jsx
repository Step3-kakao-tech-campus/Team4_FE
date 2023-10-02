import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineBell } from 'react-icons/ai';
import MyPageList from '../molecules/myPageList';
import Button from '../atoms/button';

function UserTemplate() {
  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-65% to-white to-45%">
        <div className="flex justify-between items-center pt-5 text-white text-lg">
          <AiOutlineLeft className="ml-4" />
          <span>마이 페이지</span>
          <AiOutlineBell className="mr-4" />
        </div>
        <div className="flex flex-col items-center pt-12">
          <img src="/image/fakeDb/userPage/userImage.png" alt="유저 대표 이미지" className="w-[9rem]" />
          <span className="py-3 font-bold text-xl">사용자</span>
          <Link to="/profileEditingPage">
            <Button>프로필 수정</Button>
          </Link>
        </div>
      </div>
      <div>
        <MyPageList text="좋아요 한 맛집" linkTo="/likedRestaurant" />
        <MyPageList text="최근 본 맛집" linkTo="/recentlyViewedRestaurant" />
        <MyPageList text="작성 한 리뷰" linkTo="/writtenReview" />
        <MyPageList text="좋아요 한 리뷰" linkTo="/likedReview" />
        <MyPageList text="코인 충전 내역" linkTo="/coinRechargeHistory" />
        <MyPageList text="코인 사용 내역" linkTo="/coinUsageHistory" />
        <MyPageList text="언어" linkTo="/recentlyViewRestaurnt" />
        <div className="text-center text-matgpt-gray mb-8 pb-8">
          <span>로그아웃</span>
        </div>
      </div>
    </div>
  );
}

export default UserTemplate;
