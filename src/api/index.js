// this is aliased in webpack config based on server/client build
import { getCookBook } from './cookbook';

const logRequests = !!process.env.DEBUG_API

export {
  getCookBook
}
