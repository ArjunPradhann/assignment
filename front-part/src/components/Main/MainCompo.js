import React from "react";

export default function MainCompo() {
  return (
    <div className="container-fluid p-0">
      <div className="mx-auto">
        <h6>Post A Job</h6>
        <label>
          Job Title<span>*</span>
        </label>
        <br />
        <input placeholder="Enter job title" type="text"></input>
      </div>
      <div>
        <label>
          Job Description<span>*</span>
        </label>
        <br />
        <input type="text"></input>
      </div>
      <div>
        <label>
          Skiils Required<span>*</span>
        </label>
        <br />
        <input placeholder="Enter skills required" type="text"></input>
      </div>
      <div className="d-flex flex-row">
        <div>
          <label for="cars">
            Industry Type<span>*</span>
          </label>
          <br />
          <select class="form-select" aria-label="Default select example">
            <option selected>Select industry type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <label for="cars">
            Job Type<span>*</span>
          </label>
          <br />
          <select class="form-select" aria-label="Default select example">
            <option selected>Select job type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <label for="cars">
            Work Type<span>*</span>
          </label>
          <br />
          <select class="form-select" aria-label="Default select example">
            <option selected>Enter work rate</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <label for="cars">
            Experience<span>*</span>
          </label>
          <br />
          <input placeholder="Enter min exp"></input>
          <input placeholder="Enter max exp"></input>
        </div>
      </div>
    </div>
  );
}
