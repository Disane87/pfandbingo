describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progresscomponent--primary&knob-progress=0'));

  it('should render the component', () => {
    cy.get('eui-progress').should('exist');
  });
});
