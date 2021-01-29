describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-title&knob-loading&knob-disabled&knob-color=blue&knob-type=&knob-shadow=true&knob-textColor=white'));

  it('should render the component', () => {
    cy.get('eui-button').should('exist');
  });
});
