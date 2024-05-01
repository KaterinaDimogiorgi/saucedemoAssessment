import ProductsPage from "../pages/ProductsPage";
import SidebarLink from "../utils/SidebarLink";

class BurgerMenuComponent {
    private static allItemsType = 'inventory';
    private static aboutType = 'about';
    private static logoutType = 'logout';
    private static resetAppStateType = 'reset';

    public allItems: SidebarLink;
    public about: SidebarLink;
    public logout: SidebarLink;
    public resetAppState: SidebarLink;

    constructor() {
        this.about = new SidebarLink(BurgerMenuComponent.allItemsType);
        this.allItems = new SidebarLink(BurgerMenuComponent.aboutType);
        this.logout = new SidebarLink(BurgerMenuComponent.logoutType);
        this.resetAppState = new SidebarLink(BurgerMenuComponent.resetAppStateType);
    }
}

export default BurgerMenuComponent;