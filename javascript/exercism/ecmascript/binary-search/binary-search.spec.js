import BinarySearch from './binary-search';

describe('BinarySearch', () => {

  const sortedArray = [1, 2, 3, 4, 5, 6];
  const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12];
  const unsortedArray = [10, 2, 5, 1];

  it ('should require a sorted array', () => {
    const invalidBinarySearch = new BinarySearch(unsortedArray);
    const validBinarySearch = new BinarySearch(sortedArray);

    expect(typeof invalidBinarySearch.array).toEqual('undefined');
    expect(Array.isArray(validBinarySearch.array)).toEqual(true);
  });

  it('should find the correct index of an included value', () => {
    expect(new BinarySearch(sortedArray).indexOf(3)).toEqual(2);
  });

  it('should search the middle of the array', () => {
    expect(new BinarySearch(sortedArrayOfOddLength).indexOf(2)).toEqual(3);
  });

  it('should return -1 for a value not in the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(10)).toEqual(-1);
  });

  describe('Even array tests', () => {
    const arrayOf10 = [2, 4, 6, 8, 10, 12, 14, 16,18, 20];
    const spaces = [3, 5, 7, 9, 11, 13, 15, 17, 19]

    spaces.forEach(x => {
      it(`should return -1 for a value ${x}`, () => {
        expect(new BinarySearch(arrayOf10).indexOf(x)).toEqual(-1);
      });
    })

    arrayOf10.forEach(x => {
      it(`should return index for a value ${x}`, () => {
        expect(new BinarySearch(arrayOf10).indexOf(x))
        .toEqual(arrayOf10.indexOf(x));
      });
    })
  })

  describe('Odd array tests', () => {
    const arrayOf9 = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    const spaces = [3, 5, 7, 9, 11, 13, 15, 17]

    spaces.forEach(x => {
      it(`should return -1 for a value ${x}`, () => {
        expect(new BinarySearch(arrayOf9).indexOf(x)).toEqual(-1);
      });
    })

    arrayOf9.forEach(x => {
      it(`should return index for a value ${x}`, () => {
        expect(new BinarySearch(arrayOf9).indexOf(x))
        .toEqual(arrayOf9.indexOf(x));
      });
    })
  })

  describe('Array of duplicates', () => {
    const arrayWithDuplicates = [1, 2, 2, 2, 3];

    it(`should return index 2 for a value 2`, () => {
      expect(new BinarySearch(arrayWithDuplicates).indexOf(2)).toEqual(2);
    });

    it(`should return index 0 for a value 1`, () => {
      expect(new BinarySearch(arrayWithDuplicates).indexOf(1)).toEqual(0);
    });

    it(`should return index 4 for a value 3`, () => {
      expect(new BinarySearch(arrayWithDuplicates).indexOf(3)).toEqual(4);
    });
  })
});
