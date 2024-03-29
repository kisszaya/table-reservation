import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

const AUTH_SERVICE = "/auth";
const USER_SERVICE = "/users";
const RESTAURANTS_SERVICE = "/restaurants";
const EMPLOYEES = "/employees";
const WORKING_TIME = "/working-time";
const TABLES = "/tables";
const TAGS = "/tags";

export const serverRoutes = {
  // auth
  login: AUTH_SERVICE + "/login",
  register: AUTH_SERVICE + "/register",
  refresh: AUTH_SERVICE + "/refresh",
  logout: AUTH_SERVICE + "/logout",

  // users
  me: USER_SERVICE + "/me",
  userInfoByEmail: (email: string) => USER_SERVICE + `?email=${email}`,

  // restaurants
  restaurants: RESTAURANTS_SERVICE,
  meRestaurants: RESTAURANTS_SERVICE + "/me",
  restaurantById: (restaurant_id: number | string) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}`,

  // employees
  employees: (restaurant_id: string | number) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + EMPLOYEES,
  employee: (restaurant_id: string | number, employee_id: string | number) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + EMPLOYEES + `/${employee_id}`,

  // working-time
  workingTimes: (restaurant_id: string | number) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + WORKING_TIME,
  workingTime: (restaurant_id: string | number, weekday: WEEKDAY) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + WORKING_TIME + `/${WEEKDAY}`,

  // tables
  tables: (restaurant_id: string | number) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + TABLES,
  table: (restaurant_id: string | number, table_id: string | number) =>
    RESTAURANTS_SERVICE + `/${restaurant_id}` + TABLES + `/${table_id}`,

  // tags
  tags: TAGS,
};
