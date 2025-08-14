import { request } from "@/utils";

export function loginAPI(formData) {
  return request.post("/authorizations", formData);
}

export function getProfileAPI() {
  return request.get("/user/profile");
}
