import "./Pagination.css";

export default function Pagination({
  handleNextButton,
  handlePrevButton,
  pageNumbers,
  setCurrentPage,
  currentPage,
}) {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={handlePrevButton}>
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? "active-page" : ""
            }`}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item next-item">
          <a href="#" className="page-link" onClick={handleNextButton}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
