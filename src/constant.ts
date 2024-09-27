export const headerLinkss = [
  {
    title: "Doctor",
    href: "/",
    sublink: [
      { title: "subhome", href: "/subhok" },
      { title: "subhome2", href: "/subhok2" },
      { title: "subhome3", href: "/subhok3" },
    ],
  },
  {
    title: "Patient",
    href: "/patinet",
    sublink: [
      { title: "subhome2", href: "/subhok2" },
      { title: "subhome22", href: "/subhok22" },
      { title: "subhome32", href: "/subhok32" },
    ],
  },

  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Mess ", href: "/mess" },
];
export const headerLinks = [
  {
    title: "Doctor",
    submenu: true,
    sublinks: [
      {
        title: "Dashboard",
        href: "/doctor/dashboard",
      },
      {
        title: "Appointments",
        href: "/doctor/appointments",
      },
      {
        title: "My Patients",
        href: "/doctor/patients",
      },
      {
        title: "Schedule Timings",
        href: "/doctor/schedule",
      },

      {
        title: "Accounts",
        href: "/doctor/accounts",
      },
      {
        title: "Reviews",
        href: "/doctor/reviews",
      },
      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Profile Setting",
        href: "/doctor/profile-setting",
      },
      {
        title: "Social Media",
        href: "/doctor/social-media",
      },
      {
        title: "Change Password",
        href: "/doctor/change-password",
      },
      {
        title: "Logout",
        href: "/",
      },
    ],
  },
  {
    title: "Patients",
    submenu: true,
    sublinks: [
      {
        title: "Dashboard",
        href: "/patient/dashboard",
      },
      {
        title: "Favorite",
        href: "/patient/favorite",
      },

      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Account",
        href: "/patient/patient-account",
      },
      {
        title: "Order",
        href: "/patient/patient-order",
      },
      {
        title: "Add Medical Records",
        href: "/patient/patient-add-medical-records",
      },

      {
        title: "Profile Setting",
        href: "/patient/patient-profile-setting",
      },
      {
        title: "Change Password",
        href: "/patient/patient-change-password",
      },
      {
        title: "Logout",
        href: "/",
      },
    ],
  },

  {
    title: "Pharmacy",
    submenu: true,
    sublinks: [
      {
        title: "Pharmacy",
        href: "/pharmacy",
      },

      { title: "Pharmacy Search", href: "/pharmacy-search" },
      { title: "Products", href: "/pharmacy/products" },
      { title: "Chat", href: "/conversation" },
      { title: "Payment Success", href: "/" },
      { title: "Pharmacy Register", href: "/" },
    ],
  },
  {
    title: "Blogs",
    href: "",
  },
];

export const doctorSidebarOptions = [
  { name: "Dashboard", href: "dashboard" },
  { name: "Appointments", href: "appointments" },
  { name: "My Patients", href: "patients" },
  { name: "Schedule Timings", href: "schedule" },
  { name: "Accounts", href: "accounts" },
  { name: "Reviews", href: "reviews" },
  { name: "Messages", href: "conversation" },
  { name: "Profile Setting", href: "profile-setting" },
  { name: "Social Media", href: "social-media" },
  { name: "Change Password", href: "change-password" },
  { name: "Logout", href: "/" },
];

export const patientSidebarOptions = [
  {
    name: "Dashboard",
    href: "dashboard",
  },

  {
    name: "Messages",
    href: "/conversation",
  },
  {
    name: "Account",
    href: "account",
  },
  {
    name: "Order",
    href: "orders",
  },

  {
    name: "Add Medical Records",
    href: "addmedical-records",
  },
  {
    name: "Medical Details",
    href: "medical-details",
  },
  {
    name: "Profile Setting",
    href: "profile-setting",
  },

  {
    name: "Change Password",
    href: "change-password",
  },
  {
    name: "Logout",
    href: "/",
  },
];
export const speciality = [
  { label: "Neurology", value: "Neurology" },
  { label: "Ophthalmology", value: "Ophthalmology" },
  { label: "Cardiology", value: "Cardiology" },
];

export const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
export const available = [
  { label: "Available Today", value: "AvailableToday" },
  { label: "Available Tomorrow", value: "AvailableTomorrow" },
  { label: "Available in Next 7 Days", value: "AvailableInNext7Days" },
  { label: "Available in Next 3 Days", value: "AvailableInNext3Days" },
];
export const experience = [
  { label: "1-5 years", value: "1-5years" },
  { label: "5+ years", value: "5+years" },
];
