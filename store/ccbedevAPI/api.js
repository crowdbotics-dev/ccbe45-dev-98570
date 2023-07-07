import axios from "axios"
const ccbedevAPI = axios.create({
  baseURL: "https://ccbe45-dev-98570.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ccbedevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cvvrt_list(payload) {
  return ccbedevAPI.get(`/api/v1/cvvrt/`)
}
function api_v1_cvvrt_create(payload) {
  return ccbedevAPI.post(`/api/v1/cvvrt/`, payload)
}
function api_v1_cvvrt_retrieve(payload) {
  return ccbedevAPI.get(`/api/v1/cvvrt/${payload.id}/`)
}
function api_v1_cvvrt_update(payload) {
  return ccbedevAPI.put(`/api/v1/cvvrt/${payload.id}/`, payload)
}
function api_v1_cvvrt_partial_update(payload) {
  return ccbedevAPI.patch(`/api/v1/cvvrt/${payload.id}/`, payload)
}
function api_v1_cvvrt_destroy(payload) {
  return ccbedevAPI.delete(`/api/v1/cvvrt/${payload.id}/`)
}
function api_v1_fnvn_list(payload) {
  return ccbedevAPI.get(`/api/v1/fnvn/`)
}
function api_v1_fnvn_create(payload) {
  return ccbedevAPI.post(`/api/v1/fnvn/`, payload)
}
function api_v1_fnvn_retrieve(payload) {
  return ccbedevAPI.get(`/api/v1/fnvn/${payload.id}/`)
}
function api_v1_fnvn_update(payload) {
  return ccbedevAPI.put(`/api/v1/fnvn/${payload.id}/`, payload)
}
function api_v1_fnvn_partial_update(payload) {
  return ccbedevAPI.patch(`/api/v1/fnvn/${payload.id}/`, payload)
}
function api_v1_fnvn_destroy(payload) {
  return ccbedevAPI.delete(`/api/v1/fnvn/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return ccbedevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return ccbedevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return ccbedevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return ccbedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ccbedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ccbedevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ccbedevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ccbedevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ccbedevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ccbedevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ccbedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ccbedevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ccbedevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cvvrt_list,
  api_v1_cvvrt_create,
  api_v1_cvvrt_retrieve,
  api_v1_cvvrt_update,
  api_v1_cvvrt_partial_update,
  api_v1_cvvrt_destroy,
  api_v1_fnvn_list,
  api_v1_fnvn_create,
  api_v1_fnvn_retrieve,
  api_v1_fnvn_update,
  api_v1_fnvn_partial_update,
  api_v1_fnvn_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
