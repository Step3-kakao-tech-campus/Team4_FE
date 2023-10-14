import { createFetchInstance } from '../utils/fetch';

export const fetchInstance = createFetchInstance(process.env.REACT_APP_FETCH_URL, 1000);
