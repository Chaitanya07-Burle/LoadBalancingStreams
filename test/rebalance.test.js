process.env.NODE_ENV = 'test';
let should = require('chai').should(),
    expect = require('chai').expect,
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../app');
chai.use(chaiHttp);

describe('SLT', function () {
    //success case
    it('get rebalance output', function (done) {
        chai.request(server)
            .get('/rebalance?dollar=100')

            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    //failure case
    it('get rebalance output', function (done) {
        chai.request(server)
            .get('/rebalance?dollar=')

            .end(function (err, res) {
                res.body.should.be.a('object');
                done();
            });
    });
})