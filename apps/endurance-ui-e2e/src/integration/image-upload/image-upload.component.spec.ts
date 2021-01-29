describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=imageuploadcomponent--primary&knob-path=&knob-fileName=&knob-fileTypes=*&knob-title=Werfe hier einfach ein Bild hin oder klicke zum Hochladen&knob-photoUrl&knob-disabled=false&knob-multiple=false&knob-directUpload=false&knob-showOnlyButton=false'));

  it('should render the component', () => {
    cy.get('eui-image-upload').should('exist');
  });
});
