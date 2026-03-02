const login = (user) => {
  switch (user.role) {
    case "student":
      return "Student Dashboard";
    default:
      return "Unauthorized";
  }
};
module.exports = login;
