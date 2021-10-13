import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const BASE_URL = 'http://localhost:3000';
const request = chai.request(BASE_URL);

export default class Rest {
  static get(rota = '/') {
    return request.get(rota);
  }

  static post(rota = '/', body, auth) {
    return request.post(rota).send(body).set('Authorization', auth);
  }
}
