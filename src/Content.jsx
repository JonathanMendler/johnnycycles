import { BikesIndex } from "./BikesIndex";

export function Content() {
  const bikes = [
    { id: 1, manufacturer: "Trek", model: "Checkpoint ALR5", style: "Gravel", price: 2899.99, image: "test.jpg" },
    { id: 2, manufacturer: "Canyon", model: "Pribbles", style: "Gravel", price: 2899.99, image: "test.jpg" },
  ];
  return (
    <div>
      <BikesIndex />
    </div>
  );
}
