import React from "react";

const Input = (props: {
  name: string | undefined;
  label: React.ReactNode; //a light, stateless, immutable, virtual representation of a DOM node.
  value: string | number | string[] | undefined;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => {
  return (
    <div className="form-row">
      <div className="col-7">
        <label htmlFor={props.name}>{[props.label]}</label>
        <input
          autoFocus
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={props.name}
          type="text"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default Input;
