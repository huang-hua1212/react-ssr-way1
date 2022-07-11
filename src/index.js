import express from "express";
import { matchRoutes } from "react-router-config";
import render from "./helplers/renderer";
import Routes from "./Routes";
import store from "./client/redux";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    const component = route.component;
    console.log(component );
    return component.getInitialData ? component.getInitialData(store) : null;
  });

  Promise.all(promises).then(() => {
    const html = render(req, store);
    res.send(html);
  });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
