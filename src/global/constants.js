export const donorFormFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "dateOfBirth", label: "Date Of Birth", type: "date", required: true },
  {
    name: "gender",
    label: "Gender",
    type: "enum",
    options: ["Male", "Female", "Others"],
    required: true,
  },
  {
    name: "bloodGroup",
    label: "Blood Group",
    type: "enum",
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
  },
  { name: "phoneNumber", label: "Phone Number", type: "text", required: true },
  { name: "email", label: "Email", type: "text", required: true },
  { name: "occupation", label: "Occupation", type: "text" },
  { name: "address", label: "Donor Address", type: "text", required: true },
  {
    name: "lastDonation",
    label: "Last Donation",
    type: "text",
    required: true,
  },
  { name: "diseases", label: "Diseases", type: "enum", options: ["Yes", "No"] },
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
    label: "Search Donor",
    name: "searchDonor",
    link: "/search-donor",
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
    label: "Dashboard",
    name: "dashboard",
    link: "/admin/dashboard",
  },
  {
    label: "Contact Us",
    name: "contactUs",
    link: "/contact-us",
  },
  {
    label: "About Us",
    name: "aboutUs",
    link: "/about-us",
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
    label: "Search Donor",
    name: "searchDonor",
    link: "/search-donor",
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
    label: "Contact Us",
    name: "contactUs",
    link: "/contact-us",
  },
  {
    label: "About Us",
    name: "aboutUs",
    link: "/about-us",
  },
];
