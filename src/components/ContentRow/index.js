import React from "react";
import classnames from "classnames";

import "./content-row.css";

const ContentRow = ({ bg, fill, transparent, footer, children, masthead }) => {
    const className = classnames(
        "content-row",
        bg === "alt" && "content-row--altbg",
        bg === "alt2" && "content-row--altbg2",
        fill && "content-row--fill",
        footer && "content-row--footer",
        transparent && "content-row--transparent",
        masthead && "content-row--masthead"
    );

    return (
        <div className={className}>
        {children}
        </div>
    );
};

export default ContentRow;
