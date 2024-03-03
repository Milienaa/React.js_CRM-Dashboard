export default function NavigationItem({img, text}) {
    return (
        <li className="navigation__item">
                    <a href="#">
                        <svg className="navigation__icon">
                            <use href={img}></use>
                        </svg>
                        <span className="navigation__text">{text}</span>
                        <svg className="navigation__icon navigation__icon--arrow">
                            <use href="img/sprite.svg#arrow"></use>
                        </svg>
                    </a>
                </li>
    );
}