// users
export * from "./users/users.register";
export * from "./users/users.login";
export * from "./users/users.me-info";
export * from "./users/users.update-refresh";
export * from "./users/users.logout";
export * from "./users/users.verify";
export * from "./users/users.info";
export * from "./users/users.info-by-id";

// restaurants
export * from "./restaurants/restaurants.create";
export * from "./restaurants/restaurants.get-user";
export * from "./restaurants/restaurants.get-by-id";
export * from "./restaurants/restaurants.change";

//employees
export * from "./employees/employees.get-restaurant";
export * from "./employees/employees.add";
export * from "./employees/employees.delete";

// working-time
export * from "./working-time/working-time.get";
export * from "./working-time/working-time.change";

// tables
export * from "./tables/tables.get";
export * from "./tables/tables.create";
export * from "./tables/tables.delete";
export * from './tables/tables.get-free'

// tags
export * from "./tags/tags.get";
export * from "./tags/tags.get-restaurant";

// restaurants-aggregator
export * from "./aggregator-restaurants/aggregator-restaurants.get";
export * from "./aggregator-restaurants/aggregator-restaurants.get-by-id";

// visitor
export * from "./visitor/visitor.register";
export * from "./visitor/visitor.login";
export * from "./visitor/visitor.info-by-phone";

// reserves
export * from './reserves/reserves.create'
export * from './reserves/reserves.get-visitor'
export * from './reserves/reserves.change-visitor-status'