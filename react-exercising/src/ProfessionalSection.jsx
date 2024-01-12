import { useState } from "react";

let nextId = 0;

export function ProfessionalSection() {
  const [formDataProfessionalObject, setFormDataProfessionalObject] = useState([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      id: nextId,
    },
  ]);

  const [professionalObject, setProfessionalObject] = useState(
    formDataProfessionalObject,
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObject = new FormData(e.target);
    const jotTitleData = formDataObject.get("job-title");
    const companyData = formDataObject.get("company");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const jobDescriptionData = formDataObject.get("job-description");
    const newFormProfessionalObject = {
      ...formDataProfessionalObject,
      jobTitle: jotTitleData,
      company: companyData,
      startDate: startDateData,
      endDate: endDateData,
      jobDescription: jobDescriptionData,
      id: nextId++,
    };
    setFormDataProfessionalObject([newFormProfessionalObject]);
  }

  const addMoreExperience = () => {
    let newExperienceObject = {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      id: nextId++,
    };
    setProfessionalObject([...professionalObject, newExperienceObject]);
  };

  return (
    <>
      <h2>Professional Experience</h2>
      {professionalObject.map((professionalSectionObj) => (
        <div key={professionalSectionObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="job-title">
              Job Title
              <span>
                <input type="text" name="job-title" placeholder="Job" />
              </span>
            </label>
            Company
            <label htmlFor="company">
              <span>
                <input type="text" name="company" placeholder="Company" />
              </span>
            </label>
            Start Date
            <label htmlFor="start-date">
              <span>
                <input type="text" name="start-date" placeholder="Start Date" />
              </span>
            </label>
            End Date
            <label htmlFor="end-date">
              <span>
                <input type="text" name="end-date" placeholder="End Date" />
              </span>
            </label>
            Description
            <label htmlFor="job-description">
              <span>
                <textarea
                  name="job-description"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Main Tasks"
                ></textarea>
              </span>
            </label>
            <button type="submit">Send</button>
            <button
              onClick={() =>
                setProfessionalObject(
                  professionalObject.filter(
                    (object) => object.id !== professionalSectionObj.id,
                  ),
                )
              }
            >
              Delete
            </button>
          </form>
        </div>
      ))}
      <div>
        <button onClick={addMoreExperience}>Experience +</button>
      </div>
    </>
  );
}
