export namespace UsersVerify {
  export const topic = "users.verify.command";

  export class Request {
    user_id: string;
  }

  export class Response {
    status: "success";
  }
}
