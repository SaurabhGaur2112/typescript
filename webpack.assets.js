const path = require("path");

const createPath = (path) => {
    path: path.join(__dirname, path)
  }

exports.PATHS = ({
    client: path.join(__dirname, "client"),
    build: path.join(__dirname, "build"),
    recordsPath: path.join(__dirname, "records.json")
    // style: glob.sync("./client/**/*.css")
});
  