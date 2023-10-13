import { fetchInstance } from './instance';

export async function getSearchedStore(searchString: string | null) {
  return fetchInstance.get(`/search?q=${searchString}`);
}
