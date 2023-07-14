import mockApartments from "../mockApartments"


const AptIndex = () => {
  return (
    <div className="apt-index">
      <h1>Apartment List</h1>
      {mockApartments.map((apt) => (
        <div key={apt.id}>
          <h2>{apt.street}</h2>
          <p>Unit: {apt.unit}</p>
          <p>City: {apt.city}</p>
          <p>State: {apt.state}</p>
          <p>Square Footage: {apt.square_footage}</p>
          <p>Price: {apt.price}</p>
          <p>Bedrooms: {apt.bedrooms}</p>
          <p>Bathrooms: {apt.bathrooms}</p>
          <p>Pets: {apt.pets}</p>
          <img src={apt.image} alt="Apartment" />
        </div>
      ))}
    </div>
  );
};

export default AptIndex