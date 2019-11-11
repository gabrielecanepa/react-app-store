export const paginateRecords = (records, currentPage, recordsPerPage) =>
  records.slice(currentPage * recordsPerPage, currentPage * recordsPerPage + recordsPerPage)

export const hexToRgba = (hex, alpha) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
