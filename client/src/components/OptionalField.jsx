import React from 'react';

const OptionalField = ({ field, display, toggleView, version, onChange }) => (
  <div>
    {display ? (
      <div>
        <label htmlFor=''>{field}</label>
        <br />
        <input
          type='text'
          name={field}
          value={version[field]}
          onChange={onChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleView(field, false);
          }}
        >
          X
        </button>
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

export default OptionalField;
