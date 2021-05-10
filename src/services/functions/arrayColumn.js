export default key =>
  entry => (entry?.[key] || []).join(', ')
