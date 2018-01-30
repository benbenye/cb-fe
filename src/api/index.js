const logRequests = !!process.env.DEBUG_API

export default function createAPI(httpClient) {
  return {
    getCookBook() {
      return httpClient.get('/getCookBook')
    },
    getHomeData() {
      return httpClient.get(`/home/newindex`)
    },
    getProductInfo(id) {
      return httpClient.get(`/Product/GetProductInfo/product_id/${id}`)
    }
  }
}
