function login(user) {
 if (user.type === "student") {
  return "Student Portal";
 }
 return "No Access";
}

module.exports = login;