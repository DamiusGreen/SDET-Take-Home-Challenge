/*RUNNING BEHAVIOR TEST ON THE /SEEINSTORE ENDPOINT 
FOR RESPONSE TO HAVE EXPECTED FORMAT*/

'use strict';

let chai = require('chai');
let chaihttp = require('chai-http');
let should = chai.should();
const { expect } = chai;
chai.use(chaihttp);

describe('/GET', () => {
  it('should have body greater than 0', (done) => {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end(function(err, res) {
            should.equal(err, null);
            res.body.length.should.be.greaterThan(0);
             done();
        });
  });

  it('should be json format', (done) => {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end((err, res) => {
          should.equal(err, null);
          res.should.be.json;
          done();
        })
  })

  it('should be an array', (done) => {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end((err, res) => {
            should.equal(err, null);
            res.body.should.be.a('array');
            done();
        });
});

it('should include these keys', (done) => {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end(function(err, res) {
            should.equal(err, null);
            expect(res)
                .to.have.nested.property('body[0]')
                .that.includes.all.keys([ 'address1', 
                'city', 'hours','latitude',
                'longitude', 'phoneNumber', 'state', 'storeName',
                'storeNumber', 'zipcode'])
            done();
        });
});
  
})