/* eslint-disable react/jsx-key */
import { useState } from "react";

// function GeneralSection(label, placeholder) {
//   return (
//     <>
//       <label>
//         {label}
//         <input type="text" placeholder={placeholder} />
//       </label>
//     </>
//   );
// }

// function GeneralSectionList() {
//   return (
//     <>
//       {object.map((obj) => {
//         return <GeneralSection obj={obj} />;
//       })}
//     </>
//   );
// }

// export function App() {
//   const [object, setObject] = useState([{ name: "" }]);

//   return (
//     <div>
//       <h2>General Information</h2>
//       <GeneralSectionList object={object} />
//     </div>
//   );
// }

//OLD WAY OF RENDERING

// const generalItem = generalObject.map((object) => (
//   <form action="#" onSubmit={handleSubmit}>
//     <label htmlFor="name">
//       Name
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         key={object.fullName}
//       />
//     </label>
//     <label htmlFor="email">
//       Email
//       <input
//         type="text"
//         name="email"
//         placeholder="Email"
//         key={object.email}
//       />
//     </label>
//     <label htmlFor="phone-number">
//       Phone Number
//       <input
//         type="text"
//         name="phone-number"
//         placeholder="Phone Number"
//         key={object.phoneNumber}
//       />
//     </label>
//     <label htmlFor="address">
//       Address
//       <input
//         type="text"
//         name="address"
//         placeholder="Address"
//         key={object.address}
//       />
//     </label>
//     <button type="submit">Send</button>
//     <button onClick={addAnotherObject}>Add</button>
//   </form>
// ));

// return (
//   <>
//     <div>{generalItem}</div>
//   </>
// );

let nextId = 0;

export function GeneralSection() {
  const [generalObject, setGeneralObject] = useState([
    { fullName: "", email: "", phoneNumber: "", address: "", id: nextId },
  ]);

  const [addNewObt, setNewObj] = useState([generalObject[0]]);

  function handleSubmit(e) {
    e.preventDefault();
    const getFormData = new FormData(e.target);
    const fullNameFormData = getFormData.get("name");
    const emailFormData = getFormData.get("email");
    const phoneNumberFormData = getFormData.get("phone-number");
    const addressFormData = getFormData.get("address");
    const newGeneralObject = [
      {
        ...generalObject,
        fullName: fullNameFormData,
        email: emailFormData,
        phoneNumber: phoneNumberFormData,
        addressFormData: addressFormData,
        id: nextId++,
      },
    ];
    setGeneralObject(newGeneralObject);
  }

  function addAnotherObject() {
    //create copy of the array
    //then add the new created object
    //into the array and increment the id
    setNewObj([...generalObject, { ...addNewObt }]);
    // console.log(addNewObt);
  }

  return (
    <>
      <h2>General Information</h2>
      {generalObject.map((object) => (
        <div key={object.id}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Full Name
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" name="email" placeholder="Email" />
            </label>
            <label htmlFor="phone-number">
              Phone Number
              <input
                type="text"
                name="phone-number"
                placeholder="Phone Number"
              />
            </label>
            <label htmlFor="address">
              Address
              <input type="text" name="address" placeholder="Address" />
            </label>
            <button>Send</button>
            <button onClick={addAnotherObject}>Add</button>
          </form>
        </div>
      ))}
      ;
    </>
  );
}
