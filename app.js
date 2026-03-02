const login = (user) => {
  if (user.role === "student") {
    return "Student Dashboard";
  }
  return "Unauthorized";
};
module.exports = login;
