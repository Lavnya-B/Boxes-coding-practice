const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p className="card-text">{text}</p>
    </div>
  );
};

const element = (
  <div className="boxes-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-card-container">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="Medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
