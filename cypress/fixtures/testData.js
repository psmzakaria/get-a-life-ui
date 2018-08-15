const URL = Cypress.env("CI")
  ? "https://get-a-life-ui-staging.herokuapp.com/"
  : "http://localhost:3001/";

const user01 = Date.now();
const userGuest = `userGuest${Date.now()}`;
const userHost = `userHost${Date.now()}`;

module.exports = {
  URL,
  user01,
  userGuest,
  userHost
};
