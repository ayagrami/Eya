export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Request a donation",
    route: "/announcements/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
  {
    label: "Funds",
    route: "/announcements",
  },

];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  amountNeeded: "",
};
