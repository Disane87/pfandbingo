describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=alertcomponent--primary'));

  it('should render the component', () => {
    cy.get('eui-alert').should('exist');
  });
});
