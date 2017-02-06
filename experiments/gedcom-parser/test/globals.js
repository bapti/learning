const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const mockery = require('mockery')

global.expect = chai.expect;
global.sinon = sinon
global.mockery = mockery

chai.use(sinonChai);
