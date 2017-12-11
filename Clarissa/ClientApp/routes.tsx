import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Alert } from "./components/Alert";

export const routes = <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/Alert" component={Alert} />
</Layout>;
