const serverFactory = require("../maceta/js/serverFactory");
const opn = require("opn");

serverFactory
  .createServer({
    componentPath: "./app",
    localLibraryPath: "C:/workspace/maceta/ui5-lib",
    oDataPath: "./odata",
    hostname: "localhost",
    port: 3000,
    createShellConfig: true
  })
  .then(server => {
    server.setShellLanguages(["en", "de"]);
    server.start().then(url => opn(url));
  });
