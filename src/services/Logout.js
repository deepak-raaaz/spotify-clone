
export const logout = () => {
  const token = "";
  window.localStorage.removeItem("token");
  console.log(window.localStorage.getItem("token"));
  return token
};
