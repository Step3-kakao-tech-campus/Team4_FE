import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface MyPageListProps {
  text: string;
  linkTo: string;
}

function MyPageList({ text, linkTo } : MyPageListProps) {
  return (
    <Link to={linkTo}>
      <div className="my-9 flex justify-between bg-white text-base">
        <span className="ml-3">{text}</span>
        <AiOutlineRight className="mr-3" />
      </div>
    </Link>
  );
}

export default MyPageList;
