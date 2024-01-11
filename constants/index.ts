export const headerLinks = [
  {
    label: "Ana Sayfa",
    route: "/",
  },
  {
    label: "Etkinlik ekle",
    route: "/events/create",
  },
  {
    label: "Profil",
    route: "/profile",
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
  price: "",
  isFree: false,
  url: "",
};
