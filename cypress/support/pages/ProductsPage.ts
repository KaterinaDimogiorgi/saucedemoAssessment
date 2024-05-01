import BurgerMenuComponent from "../components/BurgerMenuComponent";
import ProductsListComponent from "../components/ProductsListComponent";
import BasePage from "./BasePage";
import LandingPage from "./LandingPage";

class ProductsPage extends BasePage {
    private static openBurgerMenuButtonId = 'react-burger-menu-btn';

    public productsList: ProductsListComponent;
    public burgerMenu: BurgerMenuComponent;

    constructor() {
        super();
        this.burgerMenu = new BurgerMenuComponent();
        this.productsList = new ProductsListComponent();
    }

    getOpenBurgerMenuButton() {
        return cy.get(`#${ProductsPage.openBurgerMenuButtonId}`);
    }

    selectBurgerMenu() {
        this.getOpenBurgerMenuButton().click();
        return this.burgerMenu;
    }

    logout() {
        this.selectBurgerMenu().logout.select();
        return this;
    }
}

export default ProductsPage;