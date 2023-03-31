import React from "react";
import { FaSuitcase } from "react-icons/fa";
export default function MainCompo() {
  return (
    <div className="container-fluid mt-3 mb-3">
      <h6>
        <FaSuitcase style={{ color: "grey", fontSize: "0.85em" }} />
        &nbsp;
        Post A Job
      </h6>
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
            <label htmlFor="exampleFormControlSelect1">
              Industry Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected disabled>
                Select industry type
              </option>
              <option>Industry Demo One</option>
              <option>Industry Demo Two</option>
              <option>Industry Demo Three</option>
              <option>Industry Demo Four</option>
            </select>
          </div>
          <div class="col">
            <label htmlFor="exampleFormControlSelect1">
              Job Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect11">
              <option selected disabled>
                Select job type
              </option>
              <option>Job Demo One</option>
              <option>Job Demo Two</option>
              <option>Job Demo Three</option>
              <option>Job Demo four</option>
            </select>
          </div>
        </div>
        <br />
        <div class="form-row">
          <div class="col">
            <label htmlFor="exampleFormControlSelect13">
              Work Type<span>*</span>
            </label>
            <select class="form-control" id="exampleFormControlSelect14">
              <option selected disabled>
                Select work type
              </option>
              <option>Work Demo One</option>
              <option>Work Demo Two</option>
              <option>Work Demo Three</option>
              <option>Work Demo Four</option>
            </select>
          </div>
          <div class="col">
            <label htmlFor="exampleFormControlSelect15">
              Experience<span>*</span>
            </label>
            <div className="form-inline">
              <select
                class="form-control mr-3 "
                id="exampleFormControlSelect16"
              >
                <option selected disabled>
                  Enter min exp
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select class="form-control mr-3" id="exampleFormControlSelect17">
                <option selected disabled>
                  Enter max exp
                </option>
                <option>1</option>
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
