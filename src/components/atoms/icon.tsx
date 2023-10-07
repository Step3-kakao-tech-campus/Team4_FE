import { BsPerson } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { PiMoon, PiClipboard } from 'react-icons/pi';
import { IoLanguage } from 'react-icons/io5';
import {
  AiOutlineHeart, AiOutlineLike, AiOutlineStar, AiOutlineClose, AiOutlineLeft, AiOutlineBell,
} from 'react-icons/ai';
import { HiUserGroup, HiCreditCard } from 'react-icons/hi';

function Icon({ name, size, ariaLabel }:{ name:string; size:string; ariaLabel:string }) {
  switch (name) {
    case 'BsPerson': // 사람
      return <BsPerson size={size} aria-label={ariaLabel} />;
    case 'GoHome': // 홈버튼
      return <GoHome size={size} aria-label={ariaLabel} />;
    case 'GoSearch': // 검색
      return <GoSearch size={size} aria-label={ariaLabel} />;
    case 'PiMoon': // 다크모드
      return <PiMoon size={size} aria-label={ariaLabel} />;
    case 'PiClipboard': // 클립보드
      return <PiClipboard size={size} aria-label={ariaLabel} />;
    case 'IoLanguage': // 랜딩페이지 지구본
      return <IoLanguage size={size} aria-label={ariaLabel} />;
    case 'AiOutlineHeart': // 하트
      return <AiOutlineHeart size={size} aria-label={ariaLabel} />;
    case 'AiOutlineLike': // 좋아요
      return <AiOutlineLike size={size} aria-label={ariaLabel} />;
    case 'HiUserGroup': // 유저들
      return <HiUserGroup size={size} aria-label={ariaLabel} />;
    case 'HiCreditCard': // 결제
      return <HiCreditCard size={size} aria-label={ariaLabel} />;
    case 'AiOutlineStar': //  즐겨찾기(별)
      return <AiOutlineStar size={size} aria-label={ariaLabel} />;
    case 'AiOutlineClose': // <
      return <AiOutlineClose size={size} aria-label={ariaLabel} />;
    case 'AiOutlineLeft': // >
      return <AiOutlineLeft size={size} aria-label={ariaLabel} />;
    case 'AiOutlineBell': // 종
      return <AiOutlineBell size={size} aria-label={ariaLabel} />;
    default:
      return <GoHome size={size} aria-label={ariaLabel} />;
  }
}

export default Icon;
