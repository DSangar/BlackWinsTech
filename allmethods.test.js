const { createContact } = require("./controller/allmethods");
const httpMocks = require("node-mocks-http");



describe("createContact", () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
  });

  it("should return 400 if phone number format is invalid", async () => {
    req.body = {
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "12345",
      address: "123 Street",
    };
    await createContact(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toEqual({
      error: "Invalid phone number format",
    });
  });

  it("should return 400 if any field is missing", async () => {
    req.body = { name: "", email: "", phoneNumber: "", address: "" };
    await createContact(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toEqual({ error: "All fields are required" });
  });
});
