import NavigationHeader from "./NavigationHeader";
import NavigationMenu from "./NavigationMenu";
import NavigationUser from "./NavigationUser";

export default function Navigation() {
    return (
        <div className="navigation">
            <NavigationHeader />
            <NavigationMenu />
            <NavigationUser />
    </div>
    );
}