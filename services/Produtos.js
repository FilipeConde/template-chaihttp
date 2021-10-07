import Rest from './_rest.js'

const ROTA = '/produtos'

export default class Produtos extends Rest {

    static listarProdutos() {
        return Rest.get(ROTA)
    }

}