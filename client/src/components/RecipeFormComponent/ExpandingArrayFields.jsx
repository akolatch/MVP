import React from 'react';

const ExpandingFields = ({
  ordered,
  fieldList,
  label,
  field,
  onChange,
  fieldState,
  addToVersion,
}) => (
  <div>
    <label htmlFor=''>{label}</label>
    {ordered ? (
      <ol>
        {fieldList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    ) : (
      <ul>
        {fieldList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
    <input
      placeholder={field}
      type='text'
      name={field}
      value={fieldState}
      onChange={onChange}
    />
    <button
      onClick={(e) => {
        e.preventDefault();
        addToVersion();
      }}
    >
      {`More ${label}`}
    </button>
  </div>
);

export default ExpandingFields;
