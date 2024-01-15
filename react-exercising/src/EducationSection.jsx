import { useState } from "react";

let nextId = 0;

function EducationalForm({
  degreeLabelFor,
  schoolLabelFor,
  cityLabelFor,
  countryLabelFor,
  startDateLabelFor,
  endDateDateLabelFor,
  degreeLabel,
  schoolLabel,
  cityLabel,
  countryLabel,
  startDateLabel,
  endDateLabel,
  degreeInputName,
  schoolInputName,
  cityInputName,
  countryInputName,
  startDateInputName,
  endDateInputName,
  degreeInputPlaceholder,
  schoolInputPlaceholder,
  cityInputPlaceholder,
  countryLInputPlaceholder,
  startDateInputPlaceholder,
  endDateInputPlaceholder,
}) {
  return (
    <>
      <label htmlFor={degreeLabelFor}>
        {degreeLabel}
        <input
          type="text"
          name={degreeInputName}
          placeholder={degreeInputPlaceholder}
        />
      </label>
      <label htmlFor={schoolLabelFor}>
        {schoolLabel}
        <input
          type="text"
          name={schoolInputName}
          placeholder={schoolInputPlaceholder}
        />
      </label>
      <label htmlFor={cityLabelFor}>
        {cityLabel}
        <input
          type="text"
          name={cityInputName}
          placeholder={cityInputPlaceholder}
        />
      </label>
      <label htmlFor={countryLabelFor}>
        {countryLabel}
        <input
          type="text"
          name={countryInputName}
          placeholder={countryLInputPlaceholder}
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
      <label htmlFor={endDateDateLabelFor}>
        {endDateLabel}
        <input
          type="text"
          name={endDateInputName}
          placeholder={endDateInputPlaceholder}
        />
      </label>
    </>
  );
}

function LivePreview({ degree }) {
  return (
    <>
      <h2>{degree}</h2>
    </>
  );
}

export function EducationSection() {
  const [formData, setFormData] = useState([
    {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: nextId,
    },
  ]);

  const [createNewObj, setCreateNewObj] = useState(formData);

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObject = new FormData(e.target);
    const degreeData = formDataObject.get("degree");
    const schoolData = formDataObject.get("school");
    const cityData = formDataObject.get("city");
    const countryData = formDataObject.get("country");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const newObjectSubmittedData = {
      // ...formData,
      degree: degreeData,
      school: schoolData,
      city: cityData,
      country: countryData,
      startDate: startDateData,
      endDate: endDateData,
      id: nextId++,
    };
    setFormData([...formData, newObjectSubmittedData]);
  }

  const addMoreEducation = () => {
    let newEducationObject = {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: nextId++,
    };
    setCreateNewObj([...createNewObj, newEducationObject]);
  };

  return (
    <>
      <h2>Education Experience</h2>
      {createNewObj.map((formObj) => (
        <div key={formObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <EducationalForm
              degreeLabelFor="degree"
              degreeLabel="Degree"
              degreeInputName="degree"
              degreeInputPlaceholder="Degree"
              schoolLabelFor="school"
              schoolLabel="School"
              schoolInputName="school"
              schoolInputPlaceholder="School"
              cityLabelFor="city"
              cityLabel="City"
              cityInputName="city"
              cityInputPlaceholder="City"
              countryLabelFor="country"
              countryLabel="Country"
              countryInputName="country"
              countryLInputPlaceholder="Country"
              startDateLabelFor="start-date"
              startDateLabel="Start Date"
              startDateInputName="start-date"
              startDateInputPlaceholder="Start Date"
              endDateDateLabelFor="end-date"
              endDateLabel="End Date"
              endDateInputName="end-date"
              endDateInputPlaceholder="End Date"
            ></EducationalForm>
            <button type="submit">Send</button>
            <button
              onClick={() => {
                setCreateNewObj(
                  createNewObj.filter((object) => object.id !== formObj.id),
                  // setFormData(formData.filter((obj) => obj.id !== formObj.id)),
                );
              }}
            >
              Delete
            </button>
          </form>
        </div>
      ))}
      {formData.map((obj) => (
        <LivePreview key={obj.id} degree={obj.degree}></LivePreview>
      ))}
      <div>
        <button onClick={addMoreEducation}>Education +</button>
      </div>
    </>
  );
}
