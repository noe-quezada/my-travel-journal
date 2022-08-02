const MainContent = (props) => {
  return (
    <div className="Main--Content">
      <img className="Main--imgs" src={props.img} alt="" />
      <h3 className="Location">{props.location}</h3>
      <a className="GMaps--Link" href={props.googleMapsUrl}>
        See location on Google Maps
      </a>
      <h1 className="Tittle">{props.title}</h1>
      <h4 className="Dates">
        {props.startDate} - {props.endDate}
      </h4>
      <p className="Description">{props.description}</p>
    </div>
  );
};

export { MainContent };
