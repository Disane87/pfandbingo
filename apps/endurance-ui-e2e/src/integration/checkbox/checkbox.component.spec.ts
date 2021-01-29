describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkboxcomponent--primary&knob-label='));

  it('should render the component', () => {
    cy.get('eui-checkbox').should('exist');
  });
});
