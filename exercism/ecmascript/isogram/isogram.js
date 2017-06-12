const isIsogram = word => () => {
  const cleaned = word
    .toLowerCase()
    .replace(/\s+|-/g, '')
  return new Set([...cleaned]).size === cleaned.length
}

export default (word) => ({ isIsogram: isIsogram(word) })
