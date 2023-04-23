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
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
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
    label: "Contact Us",
    name: "contactUs",
    link: "/contact-us",
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

export const ourTeam = [
  {
    name: "Samrat Ojha",
    photoLink:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/340103516_742928627409393_313235162660502935_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cq7cAzYI0pkAX_Lzynm&_nc_ht=scontent.fbir1-1.fna&oh=00_AfC8q0UgLvWRxUVIv2JtD_WwNaGVfy4Aa7SVRV8uCUtt5A&oe=6448BD93",
  },
  {
    name: "Rahul Naidu",
    photoLink:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/247596640_707200056923175_3085567850879490623_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=qSyFmhgGZE4AX9OpUmZ&_nc_ht=scontent.fbir1-1.fna&oh=00_AfBiRGHDfMs2ykvElrCjLFP1cbyiBpLJTVKUdq0o2lbWvw&oe=64495EC5",
  },
  {
    name: "Prabin Khawas",
    photoLink:
      "https://i.pinimg.com/originals/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg",
  },
];
