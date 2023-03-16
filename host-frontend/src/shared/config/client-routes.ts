export const PUBLIC_PATH = {
  LANDING: "/landing",
  LOGIN: "/login",
  REGISTER: "/register",
};

export const PRIVATE_PATH = {
  PROFILE: "/profile",
  RESTAURANT: (id: number) => `/restaurants/${id}`,
};
