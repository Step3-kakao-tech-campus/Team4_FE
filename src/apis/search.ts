import { fetchInstance } from './instance';

export async function getSearchedStore(
  searchString: string | null,
  cursor: number,
  lastId: number,
) {
  const response = await fetchInstance.get(`/store/search?sort=id&q=${searchString}&cursor=${cursor}&lastid=${lastId}`);

  return response.data.data;
}
