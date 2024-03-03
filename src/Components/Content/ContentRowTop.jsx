export default function ContentRowTop() {
    return (
      <div className="content__row content__row--top">
                <div className="content__col">
                    <h2 className="title">
                        All customers
                    </h2>
                    <p className="subtitle">
                        Active Members
                    </p>
                </div>
                <div className="content__col">
                    <div className="search">
                        <svg className="search__icon">
                            <use href="img/sprite.svg#search"></use>
                        </svg>
                        <input className="search__field" type="search" placeholder = "search" />
                    </div>                   
                </div>
            </div>  
    );
}