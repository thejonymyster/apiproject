/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ handleChange, handleSubmit, Input }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="name"
            onChange={handleChange}
            type="text"
            value={Input}
            placeholder="post name"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
