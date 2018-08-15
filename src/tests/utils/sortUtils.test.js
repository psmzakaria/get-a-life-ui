const { descSortObjPropLen } = require("../../utils/sortUtils");

test("descSortObjPropLen when provided an object and key should sort an array of objects by the property's length in descending order", () => {
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
  expect(descSortObjPropLen(attendance, key)).toEqual(sortedAttendance);
});
