import { BsPerson } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { PiMoon, PiClipboard } from 'react-icons/pi';
import { IoLanguage } from 'react-icons/io5';
import {
  AiFillHeart, AiOutlineLike, AiOutlineStar, AiOutlineClose,
  AiOutlineLeft, AiOutlineBell, AiOutlineRight,
} from 'react-icons/ai';
import { HiUserGroup, HiCreditCard } from 'react-icons/hi';

interface IconProps {
  name: 'Person' | 'Home' | 'Search' | 'Moon' | 'Clipboard' | 'Language' | 'FillHeart' | 'OutlineLike' |
  'OutlineStar' | 'OutlineClose' | 'OutlineLeft' | 'OutlineBell' | 'UserGroup' | 'CreditCard' | 'OutlineRight';
  size: string;
  ariaLabel: string;
  color?: string;
}

function Icon({
  name, size, ariaLabel, color = 'text-inherit',
}: IconProps) {
  switch (name) {
    case 'Person': // 사람
      return <BsPerson size={size} aria-label={ariaLabel} className={color} />;
    case 'Home': // 홈버튼
      return <GoHome size={size} aria-label={ariaLabel} className={color} />;
    case 'Search': // 검색
      return <GoSearch size={size} aria-label={ariaLabel} className={color} />;
    case 'Moon': // 다크모드
      return <PiMoon size={size} aria-label={ariaLabel} className={color} />;
    case 'Clipboard': // 클립보드
      return <PiClipboard size={size} aria-label={ariaLabel} className={color} />;
    case 'Language': // 랜딩페이지 지구본
      return <IoLanguage size={size} aria-label={ariaLabel} className={color} />;
    case 'FillHeart': // 하트
      return <AiFillHeart size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineLike': // 좋아요
      return <AiOutlineLike size={size} aria-label={ariaLabel} className={color} />;
    case 'UserGroup': // 유저들
      return <HiUserGroup size={size} aria-label={ariaLabel} className={color} />;
    case 'CreditCard': // 결제
      return <HiCreditCard size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineStar': //  즐겨찾기(별)
      return <AiOutlineStar size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineClose': // x
      return <AiOutlineClose size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineLeft': // <
      return <AiOutlineLeft size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineRight': // >
      return <AiOutlineRight size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineBell': // 종
      return <AiOutlineBell size={size} aria-label={ariaLabel} className={color} />;
    default:
      return <div>해당 이름의 아이콘이 없습니다.</div>;
  }
}

export default Icon;
