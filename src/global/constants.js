export const donorFormFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "dateOfBirth", label: "Date Of Birth", type: "date", required: true },

  { name: "phoneNumber", label: "Phone Number", type: "text", required: true },
  { name: "email", label: "Email", type: "text", required: true },
  { name: "address", label: "Address", type: "text", required: true },
  {
    name: "bloodGroup",
    label: "Blood Group",
    type: "enum",
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
  },
  {
    name: "cardiac",
    label: "Cardiac",
    type: "enum",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "hhh",
    label: "HIV/AIDS",
    type: "enum",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "allergies",
    label: "Allergies",
    type: "enum",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "bleeding",
    label: "Bleeding",
    type: "enum",
    options: ["Yes", "No"],
    required: true,
  },
];

export const bloodRequestFields = [
  { name: "name", label: "Full Name", type: "text" },

  { name: "email", label: "Email", type: "text" },
  { name: "address", label: "Address", type: "text" },
  { name: "requestAmount", label: "Requested Amount", type: "text" },
  { name: "reason", label: "Give Your Reason", type: "text" },
  {
    name: "bloodGroup",
    label: "Blood Group",
    type: "enum",
    options: ["A+", "A-", "B+", "B-", "AB+", "O+", "O-"],
  },
];
export const requestFields = [
  { name: "name", label: "Name" },
  { name: "bloodGroup", label: "Blood Group" },
  { name: "address", label: "Address" },
  { name: "email", label: "Email" },
  { name: "requestAmount", label: "Requested Amount" },
  { name: "status", label: "Status" },
  { name: "reason", label: "Reason" },
];
export const donorFields = [
  { name: "name", label: "Name" },
  { name: "dateOfBirth", label: "Date Of Birth" },
  { name: "phoneNumber", label: "Phone Number" },
  { name: "email", label: "Email" },
  { name: "address", label: "Donor Address" },
  { name: "cardiac", label: "Cardiac" },
  { name: "hhh", label: "HIV/AIDS" },
  { name: "allergies", label: "Allergies" },
  { name: "bleeding", label: "Bleeding" },
];
export const donorFieldsToShowInTable = [
  { name: "name", label: "Name" },
  { name: "bg", label: "Group" },
  { name: "phoneNumber", label: "Phone" },
  { name: "address", label: "Address" },
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

export const sidebarLinks = [
  {
    label: "Home",
    name: "home",
    link: "/",
  },
  {
    label: "Donor Registration",
    name: "donorRegistration",
    link: "/donor-registration",
  },

  {
    label: "Request Blood",
    name: "requestBlood",
    link: "/request-blood",
  },
  {
    label: "Blood Camps",
    name: "liveBloodCamp",
    link: "/live-blood-camp",
  },

  {
    label: "Give Feedback",
    name: "contactUs",
    link: "/give-feedback",
  },
];

export const navBarLinks = [
  {
    label: "Home",
    name: "hom",
    link: "/",
  },
  {
    label: "Donate Blood",
    name: "donateBlood",
    link: "/donor-registration",
  },

  {
    label: "Request Blood",
    name: "requestBlood",
    link: "/request-blood",
  },
  {
    label: "Give Feedback",
    name: "contactUs",
    link: "/give-feedback",
  },
  {
    label: "Blood Camps",
    name: "liveBloodCamp",
    link: "/live-blood-camp",
  },
];

export const bloodCampFormFields = [
  {
    name: "cName",
    label: "Camp Name",
    type: "text",
  },
  {
    name: "description",
    label: "Camp Description",
    type: "text",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
  },
  {
    name: "sDate",
    label: "Starting Date",
    type: "date",
  },
  {
    name: "sTime",
    label: "Starting Time",
    type: "time",
  },
];