require('dotenv').config();
const server = require("./src/app");

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});