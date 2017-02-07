const gedcom = require('./gedcom')

describe('Given a gedcom file', () => {
  it('Should parse', () => {
    expect(gedcom('./simple.ged')).to.eql({
      fileInfo: {
        charset: 'ASCII',
        createdBy: 'ID_OF_CREATING_FILE',
        version: '5.5',
        form: 'Lineage-Linked'
      }
    })

// Submitters address: 'Submitters address, address continued here'
// Fathers name: 'Father'
// Father born at 1 january 1899 in 'birth place'
// Father died at 31 december 1990 in 'death place'
// Mothers name: 'Mother'
// Mother born at 1 january 1899 in 'birth place'
// Mother died at 31 december 1990 in 'death place'
// They married at 1 april 1950 in 'marriage place'
// Childs name: 'Child'
// Child born at 31 july 1950 in 'birth place'
// Child died at 29 february 2000 in 'death place'
  })
})
