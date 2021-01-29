describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=imagecomponent--primary&knob-src'));

  it('should render the component', () => {
    cy.get('eui-image').should('exist');
  });
});
