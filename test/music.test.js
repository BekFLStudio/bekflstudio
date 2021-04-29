const chai = require('chai');
const chaihttp = require('chai-http');
const {token} = require('morgan')
const should = chai.should();
const server = require('../app');
chai.use(chaihttp);

describe('music sahifani test qildik', () => {
  
    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({username: 'baron', password: '12345'})
        .end((err, res) => {
            const token = res.body.token
            console.log(token);
            done()
        })
    })
    describe('get music', () => {
        it('get method orqali musicni tekshirdik', (done) => {
            chai.request(server)
            .get('/music')
            .send('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                done()
            })
        })
    })
})