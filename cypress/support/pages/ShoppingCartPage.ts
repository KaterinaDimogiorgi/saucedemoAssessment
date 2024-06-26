import BasePage from "./BasePage";
import CheckoutFirstPage from "./CheckoutFirstPage";
import ProductsPage from "./ProductsPage";

class ShoppingCartPage extends BasePage {
    private static cartsContentContainerId = 'cart_contents_container';
    private static inventoryItemId = '_title_link';

    private static continueShoppingButtonId = 'continue-shopping';
    private static checkoutButtonId = 'checkout';

    getCartsContentContainer() {
        return cy.get(`#${ShoppingCartPage.cartsContentContainerId}`);
    }

    getContinueShoppingElement() {
        return cy.get(`#${ShoppingCartPage.continueShoppingButtonId}`);
    }

    getCheckoutElement() {
        return cy.get(`#${ShoppingCartPage.checkoutButtonId}`);
    }

    public getProductElementByName(productName: string) {
        return cy.get(`a[id$=${ShoppingCartPage.inventoryItemId}] div`).contains(productName);
    }

    clickContinueShopping() {
        this.getContinueShoppingElement().click();
        return new ProductsPage
    }

    clickCheckout() {
        this.getCheckoutElement().click();
        return new CheckoutFirstPage();
    }
}

export default ShoppingCartPage;