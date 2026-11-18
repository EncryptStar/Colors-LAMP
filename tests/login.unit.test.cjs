/** @jest-environment jsdom */

require("../html/js/code.js");

test("login sends the entered credentials and displays a rejected login", () => {
  document.body.innerHTML = `
    <input id="loginName" value="test-user">
    <input id="loginPassword" value="wrong-password">
    <span id="loginResult">Previous result</span>
  `;
  const request = {
    open: jest.fn(),
    setRequestHeader: jest.fn(),
    send: jest.fn()
  };
  jest.spyOn(window, "XMLHttpRequest").mockImplementation(() => request);

  window.doLogin();

  const result = document.getElementById("loginResult");
  expect(result.textContent).toBe("");
  expect(request.open).toHaveBeenCalledWith("POST", "http://localhost/LAMPAPI/Login.php", true);
  expect(request.setRequestHeader).toHaveBeenCalledWith("Content-type", "application/json; charset=UTF-8");
  expect(JSON.parse(request.send.mock.calls[0][0])).toEqual({
    login: "test-user",
    password: "wrong-password"
  });

  request.readyState = 4;
  request.status = 200;
  request.responseText = JSON.stringify({ id: 0, error: "No Records Found" });
  request.onreadystatechange();

  expect(result.textContent).toBe("User/Password combination incorrect");
});
