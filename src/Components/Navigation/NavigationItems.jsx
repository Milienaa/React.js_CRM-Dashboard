import { useContext } from "react";
import NavigationContext from "./NavigationContext";
import NavigationItem from "./NavigationItem";

export default function NavigationItems() {
    const  arr  = useContext(NavigationContext); 
    
    return (
        <ul className="navigation__items">
                <li className="navigation__item">
                    <a href="#">
                        <svg className="navigation__icon">
                            <use href="img/sprite.svg#dashboard"></use>
                        </svg>
                        <span className="navigation__text">Dashboard</span>
                    </a>
                </li>

            {arr.map((elem) => {return <NavigationItem  key={elem.id}
                                                        img={elem.icon}
                                                        text={elem.text} /> })}
                                                        
            </ul>
    );
}