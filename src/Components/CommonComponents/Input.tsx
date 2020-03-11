import React from "react";

const Input = (props: {
  name: string | undefined;
  label: React.ReactNode;
  value: string | number | string[] | undefined;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  error: any;
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
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default Input;
