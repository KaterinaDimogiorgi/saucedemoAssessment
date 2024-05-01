import BurgerMenuComponent from "../components/BurgerMenuComponent";
import ProductComponent from "../components/ProductComponent";
import ShoppingCartComponent from "../components/ShoppingCartComponent";
import BasePage from "./BasePage";
import CheckoutFirstPage from "./CheckoutFirstPage";
import ProductDetailsPage from "./ProductDetailsPage";
import ShoppingCartPage from "./ShoppingCartPage";
class ProductsPage extends BasePage {
    private static openBurgerMenuButtonId = 'react-burger-menu-btn';
    private static inventoryContainerId = 'inventory_container';

    public shoppingCart: ShoppingCartComponent;
    public product: ProductComponent;

    constructor() {
        super();
        this.shoppingCart = new ShoppingCartComponent();
        this.product = new ProductComponent();
    }

    getInevtoryContainer() {
        return cy.get(`#${ProductsPage.inventoryContainerId}`);
    }

    getOpenBurgerMenuButton() {
        return cy.get(`#${ProductsPage.openBurgerMenuButtonId}`);
    }

    public selectProductByName(productName: string) {
        this.product.selectProductByName(productName);
        return new ProductDetailsPage();
    }

    openBurgerMenu() {
        this.getOpenBurgerMenuButton().click();
        return new BurgerMenuComponent();
    }

    clickShoppingCart() {
        this.shoppingCart.clickShoppingCart();
        return new ShoppingCartPage();
    }
}

export default ProductsPage;