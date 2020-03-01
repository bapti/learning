export default {
  parse: (item) => {
    return item
      .replace(",","")              // remove commas
      .replace(/:.*$/, '')          // trim right of :
      .split(/(?:-| )+|(?=[A-Z])/)  // split on capitals, spaces etc
      .map(x => x[0])
      .join("")
      .toUpperCase()
  }
}
