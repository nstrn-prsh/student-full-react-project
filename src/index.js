import http from "http";
import { server } from "sinon";

let app = require("./server").default;

let currentApp = app;

server.listen(process.env.PORT || 3000, (error) => {
     if (error) {
          console.log(error);
     }
     console.log("started");
});

if (module.hot) {
     console.log("HMR reloading `./server` ...");

     try {
          app = require("./server").default;
          server.removeListener("request", currentApp);
          server.on("request", app);
          currentApp = app;
     } catch (error) {
          console.log(error);
     }
}
