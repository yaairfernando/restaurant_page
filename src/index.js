import homepage from './homepage';
import contact from './contact';

homepage.render();

document.querySelector('#tab-one').addEventListener('click', () => {
  console.log("click");
})

document.querySelector('#tab-two').addEventListener('click', () => {
  contact.contactPage();
})