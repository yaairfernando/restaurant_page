import homepage from './homepage';
import contact from './contact';
import menu from './menu';

homepage.render();

document.querySelector('#tab-one').addEventListener('click', () => {
  menu.renderMenu();
});

document.querySelector('#tab-two').addEventListener('click', () => {
  contact.contactPage();
});