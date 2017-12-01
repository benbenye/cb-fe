/** * Created by bby on 17/12/1. */
import { createAPI } from '../create-api';
const api = createAPI();

export function getCookBook() {
  return api.get(`/api/getCookBook`)
}
