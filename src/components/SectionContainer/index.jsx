import React from "react";

const SectionContainer = ({secClassName, withMargin, children}) => {
  return (
    <section className={`${secClassName} ${withMargin && "my-5"}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionContainer;
