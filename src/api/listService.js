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
    return request.get(API_ENDPOINT.LIST_ALL);
  }
  getListDetail(id) {
    return request.get(API_ENDPOINT.LIST_DETAIL + `/${id}`);
  }
}

const Service = new listService();

export default Service;
