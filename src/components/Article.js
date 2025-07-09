import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const unit = minutes < 30 ? 5 : 10;
    const count = Math.ceil(minutes / unit);
    return `${emoji.repeat(count)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p><em>{renderReadTime()}</em></p>
    </article>
  );
}

export default Article;
