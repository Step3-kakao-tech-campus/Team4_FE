import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface IMyPageListProps {
  text: string;
  linkTo: string;
}

function MyPageList({ text, linkTo } : IMyPageListProps) {
  return (
    <Link to={linkTo}>
      <div className="bg-white flex justify-between my-9 text-base">
        <span className="ml-3">{text}</span>
        <AiOutlineRight className="mr-3" />
      </div>
    </Link>
  );
}

export default MyPageList;
