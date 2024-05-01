import ProductsPage from "./ProductsPage";

class CheckoutFinalPage {
    private static checkoutContainerId = 'checkout_complete_container';
    private static backToProductsButtonId = 'back-to-products';

    getCheckoutContainerElement() {
        return cy.get(`#${CheckoutFinalPage.checkoutContainerId}`);
    }

    getBackToProductsElement() {
        return cy.get(`#${CheckoutFinalPage.backToProductsButtonId}`);
    }

    clickBackToProducts() {
        this.getBackToProductsElement().click();
        return new ProductsPage();
    }
}

export default CheckoutFinalPage;