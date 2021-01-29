describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=controlerrorcomponent--primary&knob-text'));

  it('should render the component', () => {
    cy.get('eui-control-error').should('exist');
  });
});
