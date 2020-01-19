'use strict';

let chai = require('chai');
let chaihttp = require('chai-http');
let should = chai.should();

chai.use(chaihttp);

describe('/GET', () => {
  it('returns see in store info', (done) => {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
  })
})