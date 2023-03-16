const AUTH_SERVICE = "/auth";
const USER_SERVICE = "/users";
const RESTAURANTS_SERVICE = "/restaurants";

export const serverRoutes = {
  // auth
  login: AUTH_SERVICE + "/login",
  register: AUTH_SERVICE + "/register",
  refresh: AUTH_SERVICE + "/refresh",
  logout: AUTH_SERVICE + "/logout",

  // users
  me: USER_SERVICE + "/me",

  // restaurants
  restaurants: RESTAURANTS_SERVICE,
  meRestaurants: RESTAURANTS_SERVICE + "/me",
};
