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
export const headerLinks = (id: string) => [
  {
    title: "Doctor",
    submenu: true,
    sublinks: [
      {
        title: "Dashboard",
        href: `/doctor/${id}/dashboard`,
      },
      {
        title: "Appointments",
        href: `/doctor/${id}/appointments`,
      },
      {
        title: "My Patients",
        href: `/doctor/${id}/patients`,
      },
      {
        title: "Schedule Timings",
        href: `/doctor/${id}/schedule`,
      },
      {
        title: "Accounts",
        href: `/doctor/${id}/accounts`,
      },
      {
        title: "Reviews",
        href: `/doctor/${id}/reviews`,
      },
      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Profile Setting",
        href: `/doctor/${id}/profile-setting`,
      },
      {
        title: "Social Media",
        href: `/doctor/${id}/social-media`,
      },
      {
        title: "Change Password",
        href: `/doctor/${id}/change-password`,
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
        href: `/patient/${id}/dashboard`,
      },
      {
        title: "Favorite",
        href: `/patient/${id}/favorite`,
      },
      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Account",
        href: `/patient/${id}/accounts`,
      },
      {
        title: "Order",
        href: `/patient/${id}/orders`,
      },
      {
        title: "Add Medical Records",
        href: `/patient/${id}/addmedical-records`,
      },
      {
        title: "Profile Setting",
        href: `/patient/${id}/profile-setting`,
      },
      {
        title: "Change Password",
        href: `/patient/${id}/change-password`,
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
        href: `/pharmacy`,
      },
      { title: "Pharmacy Search", href: `/pharmacy-search` },
      { title: "Products", href: `/pharmacy/products` },
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
