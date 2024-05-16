import React from "react";

const Section = ({
    className,
    children,
}: React.HTMLAttributes<HTMLDivElement>) => {
    return <section className={className}>{children}</section>;
};

export default Section;
