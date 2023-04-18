export const PUBLIC_PATH = {
  LANDING: "/landing",
  LOGIN: "/login",
  REGISTER: "/register",
};

export const PRIVATE_PATH = {
  PROFILE: "/profile",
  RESTAURANT: (id: number | string) => `/restaurants/${id}`,
  RESTAURANT_BOOKING_PANEL: (id: number | string) =>
    `/restaurants/${id}/booking-panel`,
};
