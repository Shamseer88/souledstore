import "./Sorting.css";

export default function Sorting({ handleSort }) {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort By: &nbsp;</label>
      <select id="sort" onChange={handleSort}>
        <option value="">--Select--</option>
        <option value="AtoZ">A - Z</option>
        <option value="ZtoA">Z - A</option>
        <option value="lowToHigh">Low to High Price</option>
        <option value="highToLow">High to Low Price</option>
      </select>
    </div>
  );
}
