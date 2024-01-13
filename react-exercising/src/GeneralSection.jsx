/* eslint-disable react/jsx-key */
import { useState } from "react";

let nextId = 0;

// export function GeneralSection() {
//   const [formDataGeneralObject, setFormDataGeneralObject] = useState([
//     {
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       cityAndProvince: "",
//       id: nextId,
//     },
//   ]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const FormDataObject = new FormData(e.target);
//     const fullNameData = FormDataObject.get("name");
//     const emailData = FormDataObject.get("email");
//     const phoneNumberData = FormDataObject.get("phone-number");
//     const cityAndProvinceData = FormDataObject.get("city-and-province");
//     const newFormDataGeneralObject = {
//       ...formDataGeneralObject,
//       fullName: fullNameData,
//       email: emailData,
//       phoneNumber: phoneNumberData,
//       cityAndProvince: cityAndProvinceData,
//       id: nextId++,
//     };
//     setFormDataGeneralObject([newFormDataGeneralObject]);
//   }

//   return (
//     <>
//       <h2>General Information</h2>
//       {formDataGeneralObject.map((generalSectionObj) => (
//         <div key={generalSectionObj.id}>
//           <form action="#" onSubmit={handleSubmit}>
//             <label htmlFor="name">
//               Full Name
//               <span>
//                 <input type="text" name="name" placeholder="Master Yi" />*
//               </span>
//             </label>
//             <label htmlFor="email">
//               Email
//               <span>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="master-yi@gmail.com"
//                 />
//                 *
//               </span>
//             </label>
//             <label htmlFor="phone-number">
//               Phone Number
//               <span>
//                 {" "}
//                 <input
//                   type="text"
//                   name="phone-number"
//                   placeholder="+420 1337"
//                 />
//                 *
//               </span>
//             </label>
//             <label htmlFor="city-and-province">
//               City and Province
//               <span>
//                 <input
//                   type="text"
//                   name="city-and-province"
//                   placeholder="Ionia, Bahri"
//                 />
//                 *
//               </span>
//             </label>
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       ))}
//     </>
//   );
// }

function Input({ labelFor, label, name, placeholder }) {
  return (
    <label htmlFor={labelFor}>
      {label}
      <span>
        <input type="text" name={name} placeholder={placeholder} />
      </span>
    </label>
  );
}

export function GeneralSection() {
  const [formDataGeneralObject, setFormDataGeneralObject] = useState([
    {
      fullName: "",
      email: "",
      phoneNumber: "",
      cityAndProvince: "",
      id: nextId,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const FormDataObject = new FormData(e.target);
    const fullNameData = FormDataObject.get("name");
    const emailData = FormDataObject.get("email");
    const phoneNumberData = FormDataObject.get("phone-number");
    const cityAndProvinceData = FormDataObject.get("city-and-province");
    const newFormDataGeneralObject = {
      ...formDataGeneralObject,
      fullName: fullNameData,
      email: emailData,
      phoneNumber: phoneNumberData,
      cityAndProvince: cityAndProvinceData,
      id: nextId++,
    };
    setFormDataGeneralObject([newFormDataGeneralObject]);
  }

  return (
    <>
      <h2>General Information</h2>
      {formDataGeneralObject.map((generalSectionObj) => (
        <div key={generalSectionObj.id}>
          <form action="#" onSubmit={handleSubmit}>
            <Input
              labelFor="name"
              label="Name"
              name="name"
              placeholder="Name"
            />
            <Input
              labelFor="email"
              label="Email"
              name="email"
              placeholder="Email"
            />
            <Input
              labelFor="phone-number"
              label="Phone Number"
              name="phone-number"
              placeholder="Phone Humber"
            />
            <Input
              labelFor="city-and-province"
              label="City and Province"
              name="city-and-province"
              placeholder="City, Provine"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ))}
    </>
  );
}
