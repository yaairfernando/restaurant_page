const review = () => {
  const reviewContainer = `
    <div class="review-container">
      <div class="review">
        <p>The owners of David’s Brisket House in Brooklyn were probably wise 
          to choose a different name for the new deli they opened in East Williamsburg 
          late last year, even though the new place, Pastrami Masters, adopted its core menu from David’s.</p>
        <p>When New Yorkers hear the word brisket these days, they tend to think of 
          brick pits, stacks of cordwood, neon Shiner Beers signs, 
          and Willie and Waylon singing in the background.</p>
      </div>
    </div>
  `;
  return reviewContainer;
};

const createTab = ({ id, text }) => {
  const tab = document.createElement('div');
  tab.classList.add(id);
  tab.id = id;
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = text;
  tab.appendChild(link);
  return tab;
};

const tabs = () => {
  const tabsContianer = document.createElement('div');
  tabsContianer.classList.add('tabs-container');
  const tabsArr = [
    { id: 'tab-one', text: 'Menu' },
    { id: 'tab-two', text: 'Contact Us' },
  ];
  tabsContianer.append(...tabsArr.map(createTab));
  return tabsContianer;
};

const render = () => {
  const container = document.getElementById('content');
  container.classList.add('container');
  const h1 = document.createElement('h1');

  container.innerHTML = review();
  h1.textContent = 'LA COZZA INFURIATA';
  container.insertBefore(h1, document.querySelector('.review-container'));
  container.appendChild(tabs());
};

export default render;