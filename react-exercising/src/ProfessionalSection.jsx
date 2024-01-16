import { useState } from "react";

let nextId = 0;

function ExperienceForm({
  jobTitleLabelFor,
  companyLabelFor,
  startDateLabelFor,
  endDateLabelFor,
  descriptionLabelFor,
  jobtTitleLabel,
  companyLabel,
  startDateLabel,
  endDateLabel,
  descriptionLabel,
  jobTitleInputName,
  companyInputName,
  startDateInputName,
  endDateInputName,
  descriptionInputName,
  jobTitleInputPlaceholder,
  companyInputPlaceholder,
  startDateInputPlaceholder,
  endDateInputPlaceholder,
  descriptionInputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={jobTitleLabelFor}>
        {jobtTitleLabel}
        <input
          type="text"
          name={jobTitleInputName}
          placeholder={jobTitleInputPlaceholder}
        />
      </label>
      <label htmlFor={companyLabelFor}>
        {companyLabel}
        <input
          type="text"
          name={companyInputName}
          placeholder={companyInputPlaceholder}
        />
      </label>
      <label htmlFor={startDateLabelFor}>
        {startDateLabel}
        <input
          type="text"
          name={startDateInputName}
          placeholder={startDateInputPlaceholder}
        />
      </label>
      <label htmlFor={endDateLabelFor}>
        {endDateLabel}
        <input
          type="text"
          name={endDateInputName}
          placeholder={endDateInputPlaceholder}
        />
      </label>
      <label htmlFor={descriptionLabelFor}>
        {descriptionLabel}
        <textarea
          type="text"
          name={descriptionInputName}
          placeholder={descriptionInputPlaceholder}
          cols={30}
          rows={5}
        ></textarea>
      </label>
    </>
  );
}

export function ProfessionalSection() {
  const [formData, setFormData] = useState([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      id: nextId,
    },
  ]);

  function handleSubmit(e) {
    // e.preventDefault();
    const formDataObject = new FormData(e.target);
    const jobTitleData = formDataObject.get("job-title");
    console.log(jobTitleData);
    const companyData = formDataObject.get("company");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const jobDescriptionData = formDataObject.get("job-description");
    const newFormProfessionalObject = {
      ...formData,
      jobTitle: jobTitleData,
      company: companyData,
      startDate: startDateData,
      endDate: endDateData,
      jobDescription: jobDescriptionData,
      id: nextId++,
    };
    setFormData([newFormProfessionalObject]);
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
    setFormData([...formData, newExperienceObject]);
  };

  return (
    <>
      <h2>Professional Experience</h2>
      {formData.map((formObj) => (
        <div key={formObj.id}>
          <form onSubmit={handleSubmit}>
            <ExperienceForm
              jobTitleLabelFor="job-title"
              jobtTitleLabel="Job Title"
              jobTitleInputName="job-title"
              jobTitleInputPlaceholder="Job Title"
              companyLabelFor="company"
              companyLabel="Company"
              companyInputName="company"
              companyInputPlaceholder="Company"
              startDateLabelFor="start-date"
              startDateLabel="Start Date"
              startDateInputName="start-date"
              startDateInputPlaceholder="Start Date"
              endDateLabelFor="end-date"
              endDateLabel="End Date"
              endDateInputName="end-date"
              endDateInputPlaceholder="End Date"
              descriptionLabelFor="job-description"
              descriptionLabel="Description"
              descriptionInputName="job-description"
              descriptionInputPlaceholder="Main Tasks"
            ></ExperienceForm>
            <button type="submit">Send</button>
            <button
              onClick={() =>
                setFormData(
                  formData.filter((object) => object.id !== formObj.id),
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
