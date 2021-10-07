import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const request = chai.request('http://localhost:3000');
const expect = chai.expect;
const should = chai.should();

describe('Algumas requisições FEIAS', () => {
  it('Deve rodar uma requisição FEIA do tipo GET', () => {
    // console.log('Hello bug');
    request.get('/produtos').end((err, res) => {
      console.log(res.body);
    });
  });

  it('Deve rodar uma requisição FEIA do tipo POST', () => {
    // console.log('Hello bug');
    request
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
    request
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
