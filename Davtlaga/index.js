import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const MAIN_PATH = "/api";

let users = [];

//read
app.get(MAIN_PATH, (request, response) => {
  if (users.length === 0) {
    response.json({
      success: false,
      error: "Users not found",
    });
  }

  response.json({
    users: users,
    success: true,
  });
});

//create
app.post(MAIN_PATH, (request, response) => {
  const requestData = request.body;
  users.push(requestData);

  response.json({
    user: requestData,
    success: true,
  });
});

//update
app.put(MAIN_PATH, (request, response) => {
  const requestData = request.body;
  const { id } = requestData;

  const updatedUsers = users.map((user) => {
    if (user.id === id) {
      user = requestData;
      return user;
    }
    return user;
  });

  users = updatedUsers;

  response.json({
    user: requestData,
    success: true,
  });
});

//delete
app.delete(MAIN_PATH, (request, response) => {
  const { id } = request.body;

  const filteredUsers = users.filter((user) => user.id !== id);
  users = filteredUsers;

  response.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// MVC
