import { useSearchParams } from 'react-router-dom';
import SearchResultTemplate from '../template/searchResultTemplate';
import { useSearchStore } from '../../hooks/query';
import { StoreCardInfo } from '../../types/store';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('q');

  const { data, isLoading } = useSearchStore(searchString);
  const stores: StoreCardInfo[] = data?.data.response;

  return (
    <>
      {isLoading ? <div>...</div> : (
        <>
        </>
      )}
      {stores ? (
        <SearchResultTemplate
          searchString={searchString || ''}
          stores={stores}
        />
      ) : (
        <>
        </>
      )}
    </>
  );
}
