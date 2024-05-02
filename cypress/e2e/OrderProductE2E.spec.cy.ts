import CheckoutFinalPage from "../support/pages/CheckoutFinalPage";
import CheckoutFirstPage from "../support/pages/CheckoutFirstPage";
import CheckoutSecondPage from "../support/pages/CheckoutSecondPage";
import LandingPage from "../support/pages/LandingPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import ProductsPage from "../support/pages/ProductsPage";
import ShoppingCartPage from "../support/pages/ShoppingCartPage";


describe('Order a product', () => {
    const productName = 'Sauce Labs Backpack';
    const userType = 'standardUser';

    const landingPage = new LandingPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const productDetailsPage = new ProductDetailsPage();
    const checkoutFirstPage = new CheckoutFirstPage();
    const checkoutSecondPage = new CheckoutSecondPage();
    const checkoutFinalPage = new CheckoutFinalPage();

    before(() => {
        landingPage.openAndLogin();
    });

    it('Add a product to the shopping cart and complete order', () => {
        productsPage.selectProductByName(productName);

        productDetailsPage.clickAddToCart();
        productDetailsPage.clickShoppingCart();

        shoppingCartPage.clickCheckout();

        checkoutFirstPage.enterUserInfo(userType);
        checkoutFirstPage.clickContinue();

        checkoutSecondPage.getProductElementByName(productName).should('be.visible');
        checkoutSecondPage.clickFinish();

        checkoutFinalPage.getCheckoutContainerElement().should('be.visible');
        checkoutFinalPage.clickBackToProducts();
    });
});