const login = (email, password) => {
  console.log("[Auth Serive] [ login ] called");
};

const register = (username, email, password) => {
  console.log("[Auth Serive] [ register ] called");
};

const forgotPassword = (email) => {
  console.log("[Auth Serive] [ forgotPassword ] called");
};

export { login, register, forgotPassword };
