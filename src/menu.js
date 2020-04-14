const dayMenu = () => {
  const menu = `
    <div class="menu">
      <ul>
        <li class="heading">
          <p>DAILY SOUP 7</p>
        </li>
        <li>
          <p>BURRATA 12</p>
          <small>date conserva, roasted pistachio, crispy pancetta, arugula, grilled bread</small>
        </li>
        <li>
          <p>PROSCIUTTO BRUSCHETTA 11</p>
          <small>crescenza cheese, grilled asparagus, truffle, grana padano</small>
        </li>
        <li>
          <p>BURRATA 12</p>
          <small>date conserva, roasted pistachio, crispy pancetta, arugula, grilled bread</small>
        </li>
        <li>
          <p>PROSCIUTTO BRUSCHETTA 11</p>
          <small>crescenza cheese, grilled asparagus, truffle, grana padano</small>
        </li>
        <li>
          <p>GRILLED CAULIFLOWER* 12</p>
          <small>fried egg, baby asparagus, toasted breadcrumb, pancetta cream, lemon</small>
        </li>
        <li>
          <p>PROSCIUTTO BRUSCHETTA 11</p>
          <small>crescenza cheese, grilled asparagus, truffle, grana padano</small>
        </li>
        <li>
          <p>GRILLED CAULIFLOWER* 12</p>
          <small>fried egg, baby asparagus, toasted breadcrumb, pancetta cream, lemon</small>
        </li>
      </ul>
      <ul>
        <li class="heading">
          <p>ZUCCA CHIPS 7</p>
        </li>
        <li>
          <p>GRILLED ARTICHOKE 13</p>
          <small>(when available) - sea salt, truffle, grana padano cheese, lemon aioli</small>
        </li>
        <li>
          <p>ITALIAN MEATBALLS 13</p>
          <small>creamy polenta, rustic marinara, grana padano</small>
        </li>
        <li>
          <p>CRISPY CALAMARI 14</p>
          <small>arugula & grilled lemon vinaigrette</small>
        </li>
        <li>
          <p>PROSCIUTTO BRUSCHETTA 11</p>
          <small>crescenza cheese, grilled asparagus, truffle, grana padano</small>
        </li>
        <li>
          <p>GRILLED CAULIFLOWER* 12</p>
          <small>fried egg, baby asparagus, toasted breadcrumb, pancetta cream, lemon</small>
        </li>
        <li>
        <p>CRISPY CALAMARI 14</p>
        <small>arugula & grilled lemon vinaigrette</small>
        </li>
        <li>
          <p>PROSCIUTTO BRUSCHETTA 11</p>
          <small>crescenza cheese, grilled asparagus, truffle, grana padano</small>
        </li>
        <li>
          <p>GRILLED CAULIFLOWER* 12</p>
          <small>fried egg, baby asparagus, toasted breadcrumb, pancetta cream, lemon</small>
        </li>
      </ul>
    </div>
  `;

  return menu;
};

const renderMenu = () => {
  document.querySelector('#tab-one').classList.add('active');
  document.querySelector('#tab-two').classList.remove('active');
  if (!document.querySelector('.contact-container')) {
    const menu = document.createElement('div');
    menu.classList.add('contact-container');
    menu.innerHTML = dayMenu();
    document.querySelector('#content').appendChild(menu);
  } else {
    const menu = document.querySelector('.contact-container');
    menu.innerHTML = dayMenu();
    document.querySelector('#content').appendChild(menu);
  }
};


export default renderMenu;