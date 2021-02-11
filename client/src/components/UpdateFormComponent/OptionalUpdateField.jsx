import React from 'react';

const OptionalUpdateField = ({
  field,
  display,
  toggleView,
  version,
  onChange,
}) => (
  <div>
    {display ? (
      <div>
        <label htmlFor=''>{field}</label>
        <br />
        <input
          type='text'
          name={field}
          defaultValue={version[field]}
          onChange={(e) => {
            onChange(field, e.target.value);
          }}
        />
      </div>
    ) : (
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleView(field, true);
        }}
      >{`Add ${field}`}</button>
    )}
  </div>
);

export default OptionalUpdateField;
