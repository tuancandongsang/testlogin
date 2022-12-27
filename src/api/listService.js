import request from './request';

const API_ENDPOINT = {
  LIST_DETAIL: '/list',
  LIST_ALL: '/list',
};
class listService {
  constructor() {
    if (listService._instance) {
      return listService._instance;
    }
    listService._instance = this;
  }
  getListAll() {
    return request.get(API_ENDPOINT.LIST_DETAIL);
  }
  getListDetail(id) {
    return request.get(API_ENDPOINT.LIST_PRODUCT + `/${id}`);
  }
}

const Service = new listService();

export default Service;
