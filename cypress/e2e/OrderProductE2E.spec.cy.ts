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


    let landingPage = new LandingPage();
    let productsPage = new ProductsPage();
    let shoppingCartPage = new ShoppingCartPage();
    let productDetailsPage = new ProductDetailsPage();
    let checkoutFirstPage = new CheckoutFirstPage();
    let checkoutSecondPage = new CheckoutSecondPage();
    let checkoutFinalPage = new CheckoutFinalPage();


    beforeEach(() => {
        landingPage.open();
        landingPage.login();
    });

    it('Complete checkout for ordering a product', () => {
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