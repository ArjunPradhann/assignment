import React from "react";
import { FaSuitcase } from "react-icons/fa";
import axios from "axios";
export default function MainCompo() {
  const submitHandler = (event) => {
    event.preventDefault();
    // let formData = new FormData(document.querySelector("form"));
    // let data = Object.fromEntries(formData);
    // let jsonData = JSON.stringify(data);
    // console.log(jsonData);

    const data = {
      jobTitle: document.querySelector("#jobTitle").value,
      jobTDesc: document.querySelector("#jobDesc").value,
      skillsRequired: document.querySelector("#skillsRequired").value,
      industryType: document.querySelector("#industryType").value,
      jobType: document.querySelector("#jobType").value,
      workType: document.querySelector("#workType").value,
      minExperience: document.querySelector("#minExperience").value,
      maxExperience: document.querySelector("#maxExperience").value,
    };

    console.log(data);
    axios
      .post("http://localhost:8000/form-data", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    document.querySelector("#jobTitle").value = "";
    document.querySelector("#jobDesc").value = "";
    document.querySelector("#skillsRequired").value = "";
    document.querySelector("#industryType").value = defaultValue;
    document.querySelector("#jobType").value = defaultValue;
    document.querySelector("#workType").value = defaultValue;
    document.querySelector("#minExperience").value = defaultValue;
    document.querySelector("#maxExperience").value = defaultValue;
  };

  const defaultValue = "Deafult Value";

  return (
    <div className="container-fluid mt-3 mb-3">
      <h6>
        <FaSuitcase style={{ color: "grey", fontSize: "0.85em" }} />
        &nbsp; Post A Job
      </h6>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="jobTitle">
            Job Title<span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Enter job title"
            name="jobTitle"
            required={true} //Doubts
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDesc">
            Job Description<span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="jobDesc"
            placeholder="Another input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillsRequired">
            Skills Required<span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="skillsRequired"
            placeholder="Enter skills required"
          />
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="industryType">
              Industry Type<span>*</span>
            </label>
            <select
              className="form-control"
              id="industryType"
              defaultValue={defaultValue}
            >
              <option value="">Select industry type</option>
              <option value="Industry 1">Industry Demo One</option>
              <option value="Industry 2">Industry Demo Two</option>
              <option value="Industry 3">Industry Demo Three</option>
              <option value="Industry 4">Industry Demo Four</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="jobType">
              Job Type<span>*</span>
            </label>
            <select
              className="form-control"
              id="jobType"
              defaultValue={defaultValue}
            >
              <option value="">Select job type</option>
              <option value="Job 1">Job Demo One</option>
              <option value="Job 2">Job Demo Two</option>
              <option value="Job 3">Job Demo Three</option>
              <option value="Job 4">Job Demo four</option>
            </select>
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="col">
            <label htmlFor="workType">
              Work Type<span>*</span>
            </label>
            <select
              className="form-control"
              id="workType"
              defaultValue={defaultValue}
            >
              <option value="">Select work type</option>
              <option value="Work 1">Work Demo One</option>
              <option value="Work 2">Work Demo Two</option>
              <option value="Work 3">Work Demo Three</option>
              <option value="Work 4">Work Demo Four</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="experience">
              Experience<span>*</span>
            </label>
            <div className="form-inline">
              <select
                className="form-control mr-3 "
                id="minExperience"
                placeholder="heelo"
              >
                <option value="">Enter min exp</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select
                className="form-control mr-3"
                id="maxExperience"
                defaultValue={defaultValue}
              >
                <option value="">Enter max exp</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <input
            type="submit"
            onClick={submitHandler}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
