import chai from 'chai';
import chaiHttp from 'chai-http';
import Produtos from '../services/Produtos.js';
import Login from '../services/Login.js';

chai.use(chaiHttp);

describe('Algumas requisições INCRÍVEIS', () => {
  it('Deve rodar uma requisição INCRÍVEL do tipo GET', (done) => {
    // console.log('Hello bug');
    Produtos.listarProdutos().end((err, res) => {
      console.log(res.body);
    });
    done();
  });

  it('Deve rodar uma requisição INCRÍVEL do tipo POST', (done) => {
    let body = {
      email: 'fulano@qa.com',
      password: 'teste',
    };
    Login.realizarLogin(body).end((err, res) => {
      console.log(res.body);
    });
    done();
  });

  it.only('Só pra dar um quentinho no peito, mais uma requisição INCRÍVEL', () => {
    // console.log('Hello bug');
    // chai
    //   .request('http://localhost:3000')
    //   .post('/produtos')
    //   .send({
    //     nome: 'Caneta azul',
    //     preco: 470,
    //     descricao: 'Azul caneta',
    //     quantidade: 381,
    //   })
    //   .set('Authorization', 'Bearer token mágico que abre portas')
    //   .end((err, res) => {
    //     console.log(res.body);
    //   });
    let body = {
      nome: 'Caneta azul',
      preco: 470,
      descricao: 'Azul caneta',
      quantidade: 381,
    };
    let auth =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNjM0MDg3MDY3LCJleHAiOjE2MzQwODc2Njd9.4rwruB5HTTk63Ic_c0NNNMHWqbMjVq8Kv5uP_VDcge4';
    Produtos.cadastrarProduto(body, auth).end((err, res) => {
      console.log(res.body);
    });
  });
});
