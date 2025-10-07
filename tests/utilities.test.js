import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string
test("isValidDateString: check invalid string", () => {
    expect(isValidDateString("not a date")).toBe(false);
});

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test("isValidDateString: too few date segments", () => {
    expect(isValidDateString("12/2025")).toBe(false);
});

test("isValidDateString: too many date segments", () => {
    expect(isValidDateString("12/12/12/2025")).toBe(false);
});

// Test for wrong number of digits in the day
test("isValidDateString: wrong number of digits in the day", () => {
    expect(isValidDateString("123/12/2025")).toBe(false);
});

test("isValidDateString: wrong number of digits in the day", () => {
    expect(isValidDateString("1/12/2025")).toBe(false);
});

// Test for wrong number of digits in the month
test("isValidDateString: wrong number of digits in the month", () => {
    expect(isValidDateString("12/123/2025")).toBe(false);
});

test("isValidDateString: wrong number of digits in the month", () => {
    expect(isValidDateString("12/1/2025")).toBe(false);
});

// Test for wrong number of digits in the year
test("isValidDateString: wrong number of digits in the year", () => {
    expect(isValidDateString("12/12/02025")).toBe(false);
});

// Test for day outside of month's number of days
test("isValidDateString: day outside of month's number of days", () => {
    expect(isValidDateString("32/12/2025")).toBe(false);
});

test("isValidDateString: day outside of month's number of days", () => {
    expect(isValidDateString("30/02/2025")).toBe(false);
});

// Test for month greater than 12
test("isValidDateString: month greater than 12", () => {
    expect(isValidDateString("12/13/2025")).toBe(false);
});

// Test for day <= 0
test("isValidDateString: day <= 0", () => {
    expect(isValidDateString("00/12/2025")).toBe(false);
});

test("isValidDateString: day <= 0", () => {
    expect(isValidDateString("-1/12/2025")).toBe(false);
});