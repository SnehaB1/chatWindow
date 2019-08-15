import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { rootPath } from "../constants";

import App from "../App";

class BasicRoutes extends React.PureComponent {
    render() {

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Route path={rootPath} exact component={App} />
            </BrowserRouter>
        )
    }
}

export default BasicRoutes;