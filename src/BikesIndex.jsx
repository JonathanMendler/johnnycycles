export function BikesIndex(props) {
  return (
    <div>
      <h1>5 Stunning Gravel Bikes for the Fall Season</h1>
      <p>
        Fall brings forth a litany of changes to our lives. The summer shorts get swapped out with the denim jeans,
        fresh lemonade replaced by ciders, and water sports are swapped with hitting the trails and admiring the
        foliage. The best way to do this may very well be on the saddle of a new gravel bike capable of handling the
        transitions from street to riverside paths. I know, bikes can be a relatively costly investment, so let's have a
        peak at 5 gravel bikes for various budgets.
      </p>
      {props.bikes.map((bike) => (
        <div key={bike.id}>
          <h2>{bike.model}</h2>
          <img src={bike.image} />
          <p>Manufacturer: {bike.manufacturer}</p>
          <p>Style: {bike.style}</p>
          <p>Price: {bike.price}</p>
          <p>Description: {bike.description}</p>
        </div>
      ))}
    </div>
  );
}
