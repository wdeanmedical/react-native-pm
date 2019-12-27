import React from 'react'
import PropTypes from 'prop-types'
import FieldShape from '../../state/shapes/FieldShape'
import SelectInputStyled from './form_select_input_styles'
import { handleFieldChange } from '../../config/functions'

const FormSelectInput = props => {
  const { field, submitted, currentForm, value, errorMessage } = props
  return (
    <SelectInputStyled>
      <SelectInputStyled.itemLabel>{field.label}</SelectInputStyled.itemLabel>
      <SelectInputStyled.selectWrapper>
        <SelectInputStyled.select
          {...props}
          disabled={submitted === true}
          options={field.options}
          selectedValue={value}
          onValueChange={e => handleFieldChange(field.name, e, currentForm)}
        >
          <SelectInputStyled.option value="" label={field.placeholder} />
          {field.options.map(option => (
            <SelectInputStyled.option
              key={option.id}
              value={option.value}
              label={option.label}
            />
          ))}
        </SelectInputStyled.select>
      </SelectInputStyled.selectWrapper>
      <SelectInputStyled.errorMsg>{errorMessage}</SelectInputStyled.errorMsg>
    </SelectInputStyled>
  )
}

FormSelectInput.propTypes = {
  handleFieldChange: PropTypes.func,
  submitted: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  field: PropTypes.shape(FieldShape),
}

FormSelectInput.defaultProps = {
  handleFieldChange: undefined,
  submitted: false,
  value: '',
  errorMessage: '',
  field: {},
}

export default FormSelectInput
