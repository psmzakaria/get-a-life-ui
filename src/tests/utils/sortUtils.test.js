const { sortCountAndDate } = require("../../utils/sortUtils");

test("sortCountAndDate when provided an object and key should sort an array of objects by the property's length in descending order", () => {
  const attendance = [
    { date: "xxxxxx", attendees: ["a", "b", "c"] },
    { date: "yyyyyy", attendees: ["a"] },
    { date: "zzzzzz", attendees: ["a", "b"] }
  ];
  const key = "attendees";
  const sortedAttendance = [
    { date: "xxxxxx", attendees: ["a", "b", "c"] },
    { date: "zzzzzz", attendees: ["a", "b"] },
    { date: "yyyyyy", attendees: ["a"] }
  ];
  expect(sortCountAndDate(attendance, key)).toEqual(sortedAttendance);
});

test("sortCountAndDate should also sort the dates in ascending order", () => {
  const attendance = [
    { date: "20180826", attendees: ["a", "b", "c"] },
    { date: "20180823", attendees: ["a", "b", "c"] },
    { date: "20180825", attendees: ["a"] },
    { date: "20180824", attendees: ["a"] },
    { date: "20180822", attendees: ["a", "b"] }
  ];
  const key = "attendees";
  const sortedAttendance = [
    { date: "20180823", attendees: ["a", "b", "c"] },
    { date: "20180826", attendees: ["a", "b", "c"] },
    { date: "20180822", attendees: ["a", "b"] },
    { date: "20180824", attendees: ["a"] },
    { date: "20180825", attendees: ["a"] }
  ];
  expect(sortCountAndDate(attendance, key)).toEqual(sortedAttendance);
});
