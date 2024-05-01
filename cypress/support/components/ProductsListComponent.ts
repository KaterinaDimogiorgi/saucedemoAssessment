class ProductsListComponent {
    private static inventoryContainerId = 'inventory_container';

    getInevtoryContainer() {
        return cy.get(`#${ProductsListComponent.inventoryContainerId}`);
    }
}

export default ProductsListComponent;