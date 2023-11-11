import { BsPerson, BsJournalBookmarkFill } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { PiMoon, PiClipboard } from 'react-icons/pi';
import { IoEllipseOutline, IoEllipse, IoLanguageOutline } from 'react-icons/io5';
import {
  AiOutlineLike, AiOutlineStar, AiOutlineClose, AiOutlineHeart,
  AiOutlineLeft, AiOutlineBell, AiOutlineRight, AiFillHeart, AiFillStar, AiOutlineCheck,
  AiOutlineDislike, AiFillDislike, AiFillLike, AiOutlinePlus, AiOutlineMinus,

} from 'react-icons/ai';
import { TbEyeClosed, TbEyeCheck, TbMinusVertical } from 'react-icons/tb';
import { HiUserGroup, HiCreditCard } from 'react-icons/hi';

interface IconProps {
  name: 'Person' | 'Home' | 'Search' | 'Moon' | 'Clipboard' | 'Language' | 'FillHeart' | 'OutlineLike' |
  'OutlineCheck' | 'OutlineStar' | 'OutlineClose' | 'OutlineLeft' | 'OutlineBell' | 'UserGroup' | 'CreditCard' | 'OutlineRight' |
  'OutlineHeart' | 'FillStar' | 'OutlineDislike' | 'EllipseOutline' | 'Ellipse' | 'FillDislike' | 'FillLike'
  | 'JournalBookmarkFill' | 'OutlinePlus' | 'OutlineMinus' | 'EyeCheck' | 'EyeClosed' | 'MinusVertical'
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
      return <IoLanguageOutline size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineLike': // 좋아요
      return <AiOutlineLike size={size} aria-label={ariaLabel} className={color} />;
    case 'UserGroup': // 유저들
      return <HiUserGroup size={size} aria-label={ariaLabel} className={color} />;
    case 'CreditCard': // 결제
      return <HiCreditCard size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineStar': //  즐겨찾기(별)
      return <AiOutlineStar size={size} aria-label={ariaLabel} className={color} />;
    case 'FillStar': //  별 채워짐
      return <AiFillStar size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineClose': // x
      return <AiOutlineClose size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineLeft': // <
      return <AiOutlineLeft size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineRight': // >
      return <AiOutlineRight size={size} aria-label={ariaLabel} className={color} />;
    case 'FillHeart': // 채운 하트
      return <AiFillHeart size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineHeart': // 빈 하트
      return <AiOutlineHeart size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineBell': // 종
      return <AiOutlineBell size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineCheck': // 체크
      return <AiOutlineCheck size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineDislike': // 싫어요
      return <AiOutlineDislike size={size} aria-label={ariaLabel} className={color} />;
    case 'EllipseOutline': // 빈 원
      return <IoEllipseOutline size={size} aria-label={ariaLabel} className={color} />;
    case 'Ellipse': // 원 채워짐
      return <IoEllipse size={size} aria-label={ariaLabel} className={color} />;
    case 'FillDislike': // 싫어요 채워짐
      return <AiFillDislike size={size} aria-label={ariaLabel} className={color} />;
    case 'FillLike': // 좋아요 채워짐
      return <AiFillLike size={size} aria-label={ariaLabel} className={color} />;
    case 'JournalBookmarkFill': // 프롬프트 선택
      return <BsJournalBookmarkFill size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlinePlus': // +
      return <AiOutlinePlus size={size} aria-label={ariaLabel} className={color} />;
    case 'OutlineMinus': // -
      return <AiOutlineMinus size={size} aria-label={ariaLabel} className={color} />;
    case 'MinusVertical': // |
      return <TbMinusVertical size={size} aria-label={ariaLabel} className={color} />;
    case 'EyeClosed': // 눈 감음
      return <TbEyeClosed size={size} aria-label={ariaLabel} className={color} />;
    case 'EyeCheck': // 눈 뜸
      return <TbEyeCheck size={size} aria-label={ariaLabel} className={color} />;
    default:
      return <div>해당 이름의 아이콘이 없습니다.</div>;
  }
}

export default Icon;
