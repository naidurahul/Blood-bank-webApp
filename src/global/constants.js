export const donorFormFields = [
  { name: "dateOfBirth", label: "Date Of Birth" },
  { name: "phoneNumber", label: "Phone Number" },
  { name: "email", label: "Email" },
  { name: "occupation", label: "Ocupation" },
  { name: "address", label: "Donor Address" },
  { name: "lastDonation", label: "Last Donation" },
  { name: "diseases", label: "Diseases" },
  { name: "cardiac", label: "Cardiac" },
  { name: "hhh", label: "HIV/AIDS" },
  { name: "allergies", label: "Allergies" },
  { name: "bleeding", label: "Bleeding" },
];

export const bloodRequestFields = [
  { name: "name", label: "Requester Name" },
  { name: "phoneNumber", label: "Phone Number" },
  { name: "email", label: "Email" },
  { name: "gender", label: "Gender" },
  { name: "address", label: "Requester Address" },
  { name: "bloodGroup", label: "Blood Group" },
  { name: "requestAmount", label: "Requested Amount" },
];
export const donorFields = [
  { name: "dateOfBirth", label: "Date Of Birth" },
  { name: "phoneNumber", label: "Phone Number" },
  { name: "email", label: "Email" },
  { name: "occupation", label: "Ocupation" },
  { name: "address", label: "Donor Address" },
  { name: "lastDonation", label: "Last Donation" },
  { name: "diseases", label: "Diseases" },
  { name: "cardiac", label: "Cardiac" },
  { name: "hhh", label: "HIV/AIDS" },
  { name: "allergies", label: "Allergies" },
  { name: "bleeding", label: "Bleeding" },
];

export const shortOptions = [
  {
    label: "Max 10",
    value: 10,
  },
  {
    label: "Max 20",
    value: 20,
  },
  {
    label: "Max 50",
    value: 50,
  },
  {
    label: "All",
    value: 200,
  },
];

export const addOrUpdateItemInArray = (array, object, pk = "_id") => {
  const indexInArray = array.findIndex((item) => item[pk] === object[pk]);
  if (indexInArray === -1) {
    array.unshift(object);
    return array;
  }
  array[indexInArray] = object;
  return array;
};
