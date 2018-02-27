import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Alert } from "./components/Alert";
import { User } from "./components/User"
import { ReadingsList } from "./components/ReadingsList";
import { Reading } from "./components/Reading";

export const routes = <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/Alert" component={Alert} />
    <Route exact path="/User" component={User} />
    <Route exact path="/Readingslist" component={ReadingsList} />
    <Route exact path="/Reading/:readingId" component={ Reading } />
</Layout>;
