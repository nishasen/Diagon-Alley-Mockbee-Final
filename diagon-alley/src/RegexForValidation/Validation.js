export const emailRegex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
export const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)