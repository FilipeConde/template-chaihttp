import Rest from './_rest.js'

const ROTA = '/login'

export class Login extends Rest {

    static realizarLogin() {
        return Rest.get(ROTA)
    }

}