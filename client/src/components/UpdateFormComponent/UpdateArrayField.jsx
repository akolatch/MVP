import React from 'react';
const UpdateArrayField = ({
  field,
  category,
  updateChange,
  display,
  setFieldState,
  fieldState,
  addToField,
  btnLabel,
  toggleDisplay,
}) => (
  <div>
    {category.map((fieldValue, i) => (
      <li>
        <input
          type='text'
          placeholder={field}
          defaultValue={fieldValue}
          onChange={(e) => {
            updateChange(field, i, e.target.value);
          }}
        />
      </li>
    ))}
    {display ? (
      <div>
        <input type='text' onChange={setFieldState} value={fieldState} />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            addToField(field, fieldState);
          }}
        >
          {btnLabel}
        </button>
      </div>
    ) : (
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleDisplay(field, true);
        }}
      >
        {btnLabel}
      </button>
    )}
  </div>
);

export default UpdateArrayField;
