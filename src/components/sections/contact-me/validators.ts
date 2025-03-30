export function validateEmail(email: string) {
  return /^.{5,}@.+\..+$/?.test(email.trim());
}

export function validateSubject(subject: string) {
  return subject?.trim().length > 0;
}

export function validateMessage(message: string) {
  return message?.trim().length > 20;
}

export function validateForm(data: any) {
  let error = null;

  if (!validateEmail(data.email)) {
    error = "Invalid email";
  } else if (!validateSubject(data.subject)) {
    error = "Invalid subject";
  } else if (!validateMessage(data.message)) {
    error = "Invalid message";
  }

  if (error) {
    return { isValid: false, error };
  }

  return { isValid: true, error: "" };
}
