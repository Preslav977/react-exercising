import { useState } from "react";
import { v4 as uuid } from "uuid";

let nextId = 0;

function Input({ labelFor, label, name, placeholder }) {
  return (
    <label htmlFor={labelFor}>
      {label}
      <span>
        <input type="text" name={name} placeholder={placeholder} />*
      </span>
    </label>
  );
}

function LivePreview({ degree, school, city, country, startDate, endDate }) {
  return (
    <>
      <h3>{degree}</h3>
      <p>{school}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </>
  );
}

export function EducationSection() {
  const [formDataEducationObject, setFormDataEducationObject] = useState([
    {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: uuid(),
    },
  ]);

  const [educationObjects, setEducationObjects] = useState(
    formDataEducationObject,
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formDataObject = new FormData(e.target);
    const degreeData = formDataObject.get("degree");
    const schoolData = formDataObject.get("school");
    const cityData = formDataObject.get("city");
    const countryData = formDataObject.get("country");
    const startDateData = formDataObject.get("start-date");
    const endDateData = formDataObject.get("end-date");
    const newFormDataEducationObject = {
      ...formDataEducationObject,
      degree: degreeData,
      school: schoolData,
      city: cityData,
      country: countryData,
      startDate: startDateData,
      endDateData: endDateData,
      id: uuid(),
    };
    setFormDataEducationObject([newFormDataEducationObject]);
  }

  const addMoreEducation = () => {
    let newEducationObject = {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      id: uuid(),
    };
    setEducationObjects([...educationObjects, newEducationObject]);
  };

  return (
    <>
      <h2>Education Experience</h2>
      {educationObjects.map((educationSectionObj) => (
        <div key={educationSectionObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <Input
              labelFor="degree"
              label="Degree"
              name="degree"
              placeholder="Degree"
            />
            <Input
              label="School"
              labelFor="school"
              name="school"
              placeholder="School"
            />
            <Input
              label="City"
              labelFor="city"
              name="city"
              placeholder="City"
            />
            <Input
              label="Country"
              labelFor="country"
              name="country"
              placeholder="Country"
            />
            <Input
              label="Start Date"
              labelFor="start-date"
              name="start-date"
              placeholder="Start Date"
            />
            <Input
              label="End Date"
              labelFor="end-date"
              name="end-date"
              placeholder="End Date"
            />
            <button type="submit">Send</button>
            <button
              onClick={() => {
                setEducationObjects(
                  educationObjects.filter(
                    (object) => object.id !== educationSectionObj.id,
                  ),
                );
              }}
            >
              Delete
            </button>
          </form>
        </div>
      ))}

      {formDataEducationObject.map((formDataObject) => (
        <LivePreview
          degree={formDataObject.degree}
          school={formDataObject.school}
          city={formDataObject.city}
          country={formDataObject.country}
          startDate={formDataObject.startDate}
          endDate={formDataObject.endDate}
        ></LivePreview>
      ))}

      <div>
        <button onClick={addMoreEducation}>Education +</button>
      </div>
    </>
  );
}
