const info = () => {
  const info = `
    <div class="info">
      <p>cozzainfuriata@gmail.com</p>
      <p>842 256 2568</p>
      <p>8036 Mechanicsville Turnpike, Mechanicsville, VA 23111</p>
    </div>
    <div class="social">
      <div class="social-item"></div>
      <div class="social-item"></div>
    </div>
  `;
  return info;
};

const contactPage = () => {
  document.querySelector('#tab-two').classList.add('active');
  document.querySelector('#tab-one').classList.remove('active');
  if (!document.querySelector('.contact-container')) {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.innerHTML = info();
    document.querySelector('#content').appendChild(contactContainer);
  } else {
    const contactContainer = document.querySelector('.contact-container');
    contactContainer.innerHTML = info();
    document.querySelector('#content').appendChild(contactContainer);
  }
};

export default contactPage;