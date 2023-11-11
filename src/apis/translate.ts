import axios from 'axios';

export function translateContent(q: string, target: string) {
  return axios.post(`/language/translate/v2?q=${q}&key=${process.env.REACT_APP_GOOGLE_TRANSLATION_API_KEY}&target=${target}&format=text`);
}
