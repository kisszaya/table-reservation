const AUTH_SERVICE = "/auth";
const USER_SERVICE = "/users";

export const serverRoutes = {
  // auth
  login: AUTH_SERVICE + "/login",
  register: AUTH_SERVICE + "/register",
  refresh: AUTH_SERVICE + "/refresh",
  logout: AUTH_SERVICE + "/logout",

  // users
  me: USER_SERVICE + "/me",
};
