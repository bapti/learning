const regex = /[\s* \s*]/;

class Words {
  count(sentance){
    return sentance
      .toLowerCase()
      .split( regex )
      .filter( word => word )
      .reduce( (acc, word) => {
        !Number.isInteger(acc[word])
          ? acc[word] = 1
          : acc[word] += 1
        return acc
      },{})
  }
}

export default Words
