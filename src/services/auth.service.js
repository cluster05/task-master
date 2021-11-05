const loginAuth = ({ email, password }) => {
  console.log("[Auth Serive] [ login ] called");
};

const registerAuth = ({ username, email, password }) => {
  console.log("[Auth Serive] [ register ] called");
};

const forgotPassword = ({ email }) => {
  console.log("[Auth Serive] [ forgotPassword ] called");
};

export { loginAuth, registerAuth, forgotPassword };
