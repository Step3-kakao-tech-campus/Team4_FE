import { fetchInstance } from './instance';

export async function getSearchedStore(searchString: string) {
  return fetchInstance.get(`/search?q=${searchString}`);
}
