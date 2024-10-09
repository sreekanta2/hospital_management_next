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
        href: `/doctors/${id}/dashboard`,
      },
      {
        title: "Requests",
        href: `/doctors/${id}/requests`,
      },
      {
        title: "Appointments",
        href: `/doctors/${id}/appointments`,
      },
      {
        title: "Available Timings",
        href: `/doctors/${id}/available-timings`,
      },
      {
        title: "My Patients",
        href: `/doctors/${id}/patients`,
      },
      {
        title: "Specialties & Services",
        href: `/doctors/${id}/specialties-services`,
      },
      {
        title: "Reviews",
        href: `/doctors/${id}/reviews`,
      },
      {
        title: "Accounts",
        href: `/doctors/${id}/accounts`,
      },
      {
        title: "Invoices",
        href: `/doctors/${id}/invoices`,
      },
      {
        title: "Payout Settings",
        href: `/doctors/${id}/payout-settings`,
      },
      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Profile Settings",
        href: `/doctors/${id}/profile-settings`,
      },
      {
        title: "Social Media",
        href: `/doctors/${id}/social-media`,
      },
      {
        title: "Change Password",
        href: `/doctors/${id}/change-password`,
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
        href: `/patients/${id}/dashboard`,
      },
      {
        title: "Favorite",
        href: `/patients/${id}/favorite`,
      },
      {
        title: "Messages",
        href: "/conversation",
      },
      {
        title: "Account",
        href: `/patients/${id}/accounts`,
      },
      {
        title: "Order",
        href: `/patients/${id}/orders`,
      },
      {
        title: "Add Medical Records",
        href: `/patients/${id}/addmedical-records`,
      },
      {
        title: "Profile Setting",
        href: `/patients/${id}/profile-setting`,
      },
      {
        title: "Change Password",
        href: `/patients/${id}/change-password`,
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
