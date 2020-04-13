import '../styles/styles.css'

const homepage = (() => {
  const render = () => {
    console.log("Render HTML");
    let container = document.getElementById('content');
    container.classList.add('container')
    let h1 = document.createElement('h1');
    
    container.appendChild(review());
    h1.textContent = "LA COZZA INFURIATA"
    container.insertBefore(h1,document.querySelector('.review-container'));
    container.appendChild(tabs())
  }

  const review = () => {
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let reviewContainer = document.createElement('div')
    let review = document.createElement('div')
    reviewContainer.classList = 'review-container';
    review.classList = 'review';
    review.appendChild(p2)
    review.insertBefore(p1, p2)
    review.appendChild(p3)
    reviewContainer.appendChild(review);
    p1.textContent = "The owners of David’s Brisket House in Brooklyn were probably wise to choose a different name for the new deli they opened in East Williamsburg late last year, even though the new place, Pastrami Masters, adopted its core menu from David’s."
    p2.textContent = "When New Yorkers hear the word brisket these days, they tend to think of brick pits, stacks of cordwood, neon Shiner Beers signs, and Willie and Waylon singing in the background."
    p3.textContent = "Those associations are relatively recent ones locally, dating to the renaissance of the smoked-meat sciences in Texas and the national fame of pit masters like Aaron Franklin in Austin.Before brisket was synonymous with barbecue, its meaning in the five boroughs was the one that you now encounter mainly around the Jewish holidays: a flat slab of beef breast cooked in a closed, humid environment for hours, at which point it not only falls apart unprovoked but also makes its own gravy."
    return reviewContainer
  }

  const tabs = () => {
    let tabsContianer = document.createElement('div');
    tabsContianer.classList.add('tabs-container');
    let tabOne = document.createElement('div');
    let tabTwo = document.createElement('div');
    tabOne.classList.add('tab-one')
    tabTwo.classList.add('tab-two')
    tabOne.id = 'tab-one'
    tabTwo.id = 'tab-two'
    let linkOne = document.createElement('a');
    let linkTwo = document.createElement('a');
    linkOne.href = '#'
    linkTwo.href = '#'
    linkOne.textContent = 'Menu'
    linkTwo.textContent = 'Contact Us'
    tabOne.appendChild(linkOne)
    tabTwo.appendChild(linkTwo)
    tabsContianer.appendChild(tabTwo)
    tabsContianer.insertBefore(tabOne, tabTwo);
    return tabsContianer
  }
  return { render }
})();

export default homepage