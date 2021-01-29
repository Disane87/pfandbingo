describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=avatarcomponent--primary&knob-photoUrl&knob-size=10'));

  it('should render the component', () => {
    cy.get('eui-avatar').should('exist');
  });
});
