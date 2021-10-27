import React,{Fragment} from "react";

const NotFound = () => (
    <Fragment>
        <div className="col">
            <div className="row"><h5>Error 404</h5></div>
            <div className="row"><h5>Page not found :(</h5></div>
            <div className="row"><a href='/'>Back to home</a></div>
        </div>
    </Fragment>
);

export default NotFound;