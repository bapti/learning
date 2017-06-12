const isIsogram = word => () => {
  const cleaned = word
    .toLowerCase()
    .replace(/([^a-z\u0000-\u007F\u0080-\u00FF]|[- ])+/g, '')
  return new Set([...cleaned]).size === cleaned.length
}

export default (word) => ({ isIsogram: isIsogram(word) })
