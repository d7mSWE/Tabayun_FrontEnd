export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "البريد الإلكتروني مطلوب";
  if (!re.test(email)) return "صيغة البريد الإلكتروني غير صحيحة";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "كلمة المرور مطلوبة";
  if (password.length < 8) return "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
  if (!/[A-Z]/.test(password)) return "يجب أن تحتوي على حرف كبير واحد على الأقل";
  if (!/[0-9]/.test(password)) return "يجب أن تحتوي على رقم واحد على الأقل";
  return "";
};

export const validateName = (name) => {
  if (!name) return "الاسم مطلوب";
  if (name.length < 3) return "الاسم يجب أن يكون 3 أحرف على الأقل";
  return "";
};
