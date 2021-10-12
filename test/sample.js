import chai from 'chai';
import chaiHttp from 'chai-http';
import Produtos from '../services/Produtos.js';

chai.use(chaiHttp);

describe('Algumas requisições FEIAS', () => {
  it.only('Deve rodar uma requisição FEIA do tipo GET', (done) => {
    // console.log('Hello bug');
    Produtos.listarProdutos().end((err, res) => {
      console.log(res.body);
      done();
    });
  });

  it('Deve rodar uma requisição FEIA do tipo POST', () => {
    // console.log('Hello bug');
    chai
      .request('http://localhost:3000')
      .post('/login')
      .send({
        email: 'fulano@qa.com',
        password: 'teste',
      })
      .end((err, res) => {
        console.log(res.body);
      });
  });

  it('Só pra dar agonia, mais uma requisição FEIA', () => {
    // console.log('Hello bug');
    chai
      .request('http://localhost:3000')
      .post('/produtos')
      .send({
        nome: 'Caneta azul',
        preco: 470,
        descricao: 'Azul caneta',
        quantidade: 381,
      })
      .set('Authorization', 'Bearer token mágico que abre portas')
      .end((err, res) => {
        console.log(res.body);
      });
  });
});
