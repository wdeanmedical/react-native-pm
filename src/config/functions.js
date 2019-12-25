export const handleFieldChange = (field, value, currentForm) => {
  const { fields } = currentForm.state
  fields[field] = value
  currentForm.setState({ fields })
}
