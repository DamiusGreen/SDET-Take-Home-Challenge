/*RUNNING FUNCTIONAL AND BEHAVIOR TEST ON THE /SEEINSTORE ENDPOINT 
FOR EXPECTED RESPONSES AFTER USING GET REQUEST*/

'use strict';

let chai = require('chai');
let chaihttp = require('chai-http');
let should = chai.should();

chai.use(chaihttp);

describe('/GET', () => {
  it('returns status and valid contains responses', function(done) {
    chai.request("http://seeinstore.rtg-prod.com")
        .get("/seeInStore?sku=7005451p&zipcode=33610")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.contain('Dale Mabry');
          res.text.should.contain('Brandon');
          res.text.should.contain('Clermont');
          res.text.should.contain('Sarasota');
          res.text.should.contain('Port Richey');
          res.text.should.contain('Lakeland');
          done();
        })
  })
})