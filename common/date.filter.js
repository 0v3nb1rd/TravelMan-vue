export default (value, type) => {
  const date = new Date(value)
  if (type === 'date') {
    return date.getDate()
  } else if (type === 'month') {
    return date.toLocaleString('default', { month: 'short' })
  } else if (type === 'time') {
    return date.toLocaleTimeString()
  }
  return date.toLocaleString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })
}
