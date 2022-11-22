import React from "react";

function WidgetTags() {
  const tags = [
    "C",
    "CSSS3",
    "express",
    "HTML5",
    "JavaScript",
    "MongoDB",
    "Node.js",
    "React",
    "Redux",
    "Sass",
    "Webpack",
  ];
  return (
  <div className="widget-tags">
    <h4>Watched Tags</h4>
    <div className="widget-tags-div">
      {
        tags.map((tag)=>(
          <p>{tag}</p>
        ))
      }
    </div>
  </div>
  );
}

export default WidgetTags;
