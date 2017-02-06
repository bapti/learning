const gedcom = require('./gedcom')

describe('Given a gedcom file', () => {
  it('Should parse', () => {
    expect(gedcom('./test.ged')).to.eql({})
  })
})
