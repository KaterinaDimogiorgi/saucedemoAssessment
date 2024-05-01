import ShoppingCartComponent from "../components/ShoppingCartComponent";
import BasePage from "./BasePage";
import ShoppingCartPage from "./ShoppingCartPage";
class ProductDetailsPage extends BasePage {
    private static backToProductsButtonId = 'back-to-products';
    private static inventoryItemContainerId = 'inventory_item_container';
    private static addToCartButtonId = 'add-to-cart';
    private static removeButtonId = 'remove';

    public shoppingCart: ShoppingCartComponent;

    constructor() {
        super();
        this.shoppingCart = new ShoppingCartComponent;
    }

    getInevtoryContainer() {
        return cy.get(`#${ProductDetailsPage.inventoryItemContainerId}`);
    }

    getBackToProductsElement() {
        return cy.get(`#${ProductDetailsPage.backToProductsButtonId}`);
    }

    getAddToCartButton() {
        return cy.get(`#${ProductDetailsPage.addToCartButtonId}`);
    }

    getRemoveButton() {
        return cy.get(`#${ProductDetailsPage.removeButtonId}`);
    }

    clickShoppingCart() {
        this.shoppingCart.clickShoppingCart();
        return new ShoppingCartPage();
    }

    clickAddToCart() {
        this.getAddToCartButton().click();
        return this;
    }

    clickRemove() {
        this.getRemoveButton().click();
        return this;
    }

    clickBackToProducts() {
        this.getBackToProductsElement().click();
        return this;
    }
}

export default ProductDetailsPage;