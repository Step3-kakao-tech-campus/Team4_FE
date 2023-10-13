import { useSearchParams } from 'react-router-dom';
import PageTitleCard from '../molecules/pageTitleCard';

export default function SearchResultTemplate() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('q');

  return (
    <PageTitleCard pageTitle={`${searchString || ''} 검색 결과`} />
  );
}
