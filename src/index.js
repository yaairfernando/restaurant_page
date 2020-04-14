import '../styles/styles.css';
import render from './homepage';
import contactPage from './contact';
import renderMenu from './menu';

render();

document.querySelector('#tab-one').addEventListener('click', () => {
  renderMenu();
});

document.querySelector('#tab-two').addEventListener('click', () => {
  contactPage();
});