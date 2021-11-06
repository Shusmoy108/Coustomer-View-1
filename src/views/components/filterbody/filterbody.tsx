import CarCard from "../carcard/carcard";
import FilterBox from "../filterbox/filterbox";

export default function FilterBody() {
  return (
    <div style={{ padding: "0% 5%", background: "#F2F2F2", display: "flex" }}>
      <div style={{ flex: 2 }}>
        <FilterBox />
      </div>
      <div style={{ flex: 10 }}>
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}
