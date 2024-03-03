export default function NavigationHeader() {
    return (
        <div className="navigation__header">
            <h2 class="title">
                <svg className="title__icon">
                    <use href="img/sprite.svg#settings"></use>
                </svg>
                <span className="title__text">
                    Dashboard
                </span>
                <span>v.01</span>
            </h2>
        </div>
    );
}