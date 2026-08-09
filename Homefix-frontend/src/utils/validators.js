export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isRequired(value) {
  return value !== undefined && value !== null && value.toString().trim() !== "";
}

export function minLength(value, length) {
  return (value || "").length >= length;
}
