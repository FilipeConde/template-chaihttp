import Rest from './_rest.js';

const ROTA = '/login';

export default class Login extends Rest {
  static realizarLogin(body) {
    return Rest.post(ROTA, body);
  }
}
