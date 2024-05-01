import LandingPage from "../support/pages/LandingPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import ProductsPage from "../support/pages/ProductsPage";
import ShoppingCartPage from "../support/pages/ShoppingCartPage";


describe('Products page flows', () => {
    const productName = 'Sauce Labs Backpack';


    let landingPage = new LandingPage();
    let productsPage = new ProductsPage();
    let shoppingCartPage = new ShoppingCartPage();
    let productDetailsPage = new ProductDetailsPage();


    beforeEach(() => {
        landingPage.open();
        landingPage.login();
    });

    it('Products list loads correctly', () => {
        productsPage.getInevtoryContainer().should('be.visible');
        productsPage.product.getProductElementByName(productName).should('be.visible');
        productsPage.getOpenBurgerMenuButton().should('be.visible');
        productsPage.shoppingCart.getShoppinCartElement().should('be.visible');
    });

    it('Select a product, view details and return', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.getInevtoryContainer().should('be.visible');
        productDetailsPage.clickBackToProducts();
    });

    it('Add product to cart from product details and view cart', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.clickAddToCart();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '1');
        productDetailsPage.clickShoppingCart();
        shoppingCartPage.getProductElementByName(productName).should('be.visible');
        shoppingCartPage.clickContinueShopping();
    });

    it('Remove product from cart from product details', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.clickAddToCart();
        productDetailsPage.clickRemove();
        productDetailsPage.getAddToCartButton().should('be.visible');
    });
});