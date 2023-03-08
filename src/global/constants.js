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
  { name: "name", label: "Full Name", type: "text" },
  { name: "phoneNumber", label: "Phone Number", type: "text" },
  {
    name: "bloodGroup",
    label: "Blood Group",
    type: "enum",
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  {
    name: "gender",
    label: "Gender",
    type: "enum",
    options: ["Male", "Female"],
  },
  { name: "email", label: "Email", type: "text" },
  { name: "address", label: "Address", type: "text" },
  { name: "requestAmount", label: "Requested Amount", type: "text" },
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

export const otherPlaceForBloodDonation = [
  {
    bloodCenter: "Baglung",
    contactPerson: "Guru Datta Sharma",
    phone: "068-5202732",
  },
  {
    bloodCenter: "Bhadrapur",
    contactPerson: "Torna Bikram Karki",
    phone: "023-5208142",
  },
  {
    bloodCenter: "Bhaktapur",
    contactPerson: "Uttam Kusma",
    phone: "065-2381871",
  },
  {
    bloodCenter: "Butwal",
    contactPerson: "Jogbahadur Gurung",
    phone: "071-541004",
  },
  {
    bloodCenter: "Bhadrapur",
    contactPerson: "Torna Bikram Karki",
    phone: "023-5208124",
  },
  {
    bloodCenter: "Baglung",
    contactPerson: "Guru Datta Sharma",
    phone: "068-520273",
  },
  {
    bloodCenter: "Bhadrapur",
    contactPerson: "Torna Bikram Karki",
    phone: "023-520814",
  },
  {
    bloodCenter: "Bhaktapur",
    contactPerson: "Uttam Kusma",
    phone: "065-520880",
  },
  {
    bloodCenter: "Nepalgunj",
    contactPerson: "Upendra Regmi",
    phone: "071-520174",
  },
];

export const bloodDonationCriteria = [
  "Be 18 to 60 years old",
  "Weight above 45 kg",
  "Have hemoglobin above 12 gm/dl",
  "Have blood pressure 110-160 / 70-96 mmHg",
  "Not to be pregnant, breastfeeding, and recent menstruation",
  "Not having recent use of drugs or strong medicines",
  "Not to had a medical surgery for 2 years",
];

export const bloodCampFormFields = [
  {
    name: "cName",
    label: "Camp Name",
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
  {
    name: "eTime",
    label: "End Time",
    type: "time",
  },
];
