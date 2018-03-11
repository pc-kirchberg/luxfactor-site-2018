import React from "react";
import classnames from "classnames";

import "./button.css";

export default ({children, onClick, border}) => (
    <span className={classnames(
        "button",
        border && "border"
    )} onClick={onClick}>
        {children}
    </span>
)