export default (stringMatrix) => {
  const rows = stringMatrix
    .split("\n")
    .map(row => row.split(" ").map(n => Number(n)))

  const columns = rows.map((_, i) => rows.map(row => row[i]))

  return { rows, columns }
}
