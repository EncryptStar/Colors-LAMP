const baseUrl = process.env.TEST_API_BASE_URL || "http://127.0.0.1:8000";

test.each([
  ["correct", "jest-password", { id: 1, firstName: "Jest", lastName: "User", error: "" }],
  ["incorrect", "wrong-password", { id: 0, firstName: "", lastName: "", error: "No Records Found" }]
])("Login.php returns the expected JSON when the password is %s", async (_label, password, expected) => {
  const response = await fetch(new URL("/LAMPAPI/Login.php", baseUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: "jest-user", password }),
    signal: AbortSignal.timeout(3000)
  });

  expect(response.status).toBe(200);
  expect(response.headers.get("content-type")).toMatch(/^application\/json(?:;|$)/i);
  expect(await response.json()).toEqual(expected);
});
