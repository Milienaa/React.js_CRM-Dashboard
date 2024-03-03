export default function ContentPagination() {
    return (
      <div className="content__row pagination">
                <div className="pagination__text">
                    Showing data 1 to 8 of  256K entries
                </div>
                <div className="pagination__items">
                    <button className="btn btn--gray pagination__item pagination__item--prev">&laquo;</button>
                    <button className="btn btn--violet pagination__item">1</button>
                    <button className="btn btn--gray pagination__item">2</button>
                    <button className="btn btn--gray pagination__item">3</button>
                    <button className="btn btn--gray pagination__item">4</button>
                    <button className="btn btn--gray pagination__item pagination__item--all">...</button>
                    <button className="btn btn--gray pagination__item">40</button>
                    <button className="btn btn--gray pagination__item pagination__item--next">&raquo;</button>
                </div>
            </div>  
    );
}