import React from "react";

export default function MainCompo() {
  return (
    <div className="container-fluid mt-3 ">
      <h6>Post A Job</h6>
      <form>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput">
            Job Title<span>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter job title"
          />
        </div>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput2">
            Job Description<span>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
          />
        </div>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput3">
            Skiils Required<span>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput3"
            placeholder="Enter skills required"
          />
        </div>
        <div class="form-row">
          <div class="col">
            <label for="exampleFormControlSelect1">
              Industry Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select industry type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">
              Job Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select job type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <br />
        <div class="form-row">
          <div class="col">
            <label for="exampleFormControlSelect1">
              Work Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select work type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">
              Experience<span>*</span>
            </label>
            <div className="form-inline">
              <select class="form-control mr-3 " id="exampleFormControlSelect1">
                <option>Enter min exp</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select class="form-control col" id="exampleFormControlSelect1">
                <option>Enter max exp</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
