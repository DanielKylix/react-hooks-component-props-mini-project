import React from "react";

const About = ({ image = "https://via.placeholder.com/215", about }) => {
  return (
    <React.Fragment>
      <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </React.Fragment>
  );
};

export default About;
