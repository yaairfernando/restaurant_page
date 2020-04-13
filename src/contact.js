import '../styles/styles.css'

const contact = (() => {
  const contactPage = () => {
    document.querySelector('#tab-two').classList.add('active');
    document.querySelector('#tab-one').classList.remove('active');
    if (!document.querySelector('.contact-container')) {
      let contactContainer = document.createElement('div');
      contactContainer.classList.add('contact-container');
      contactContainer.innerHTML = info();
      document.querySelector('#content').appendChild(contactContainer);
    } else {
      let contactContainer = document.querySelector('.contact-container')
      contactContainer.innerHTML = info();
      document.querySelector('#content').appendChild(contactContainer);
    }
  }

  const info = () => {
    let info =  `
      <div class="info">
        <p>cozzainfuriata@gmail.com</p>
        <p>842 256 2568</p>
        <p>8036 Mechanicsville Turnpike, Mechanicsville, VA 23111</p>
      </div>
      <div class="social">
        <div class="social-item"></div>
        <div class="social-item"></div>
      </div>
    `
    return info
  }


  return { contactPage }
})()

export default contact;