const regex = /[\s* \s*]/;

class Words {
  count(sentance){
    return sentance
      .toLowerCase()
      .split(regex)
      .filter( item => item.trim() !== "" )
      .reduce( (acc, item) => {
        acc[item] = !Number.isInteger(acc[item])
          ? 1
          : acc[item] + 1
        return acc
      },{})
  }
}

export default Words
