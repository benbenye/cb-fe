/**
 * Created by bby on 17/12/1.
 */
import axios from 'axios';

export default axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'http://api.chunbo.com'
});
