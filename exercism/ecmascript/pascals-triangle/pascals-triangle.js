const nextRow = row => [0, ...row].map((n, i, arr) => n + (arr[i+1] || 0))

const triangle = (n, rows = [[1]]) => {
  if(rows.length === n) return rows
  return triangle(n, [...rows, nextRow(rows.pop())])
}

export default n => {
  const rows = triangle(n)
  return { rows, lastRow: [...rows].pop() }
}
