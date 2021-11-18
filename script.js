const hamburgerMenu = document.getElementById('hamNenu');
hamburgerMenu.addEventListener('click', () => {
  document.getElementById('side-bar').style.width = '100%';
});

const closeNavBlock = document.getElementById('closeNav');
closeNavBlock.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openNavlink = document.getElementById('portfolio');
openNavlink.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openlinkAbout = document.getElementById('about');
openlinkAbout.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const openlinkContact = document.getElementById('contact');
openlinkContact.addEventListener('click', () => {
  document.getElementById('side-bar').style.display = 'none';
  window.location.reload();
});

const popUpblack = document.createElement('div');
popUpblack.id = 'popupid';
popUpblack.className = 'popupclass';
document.body.appendChild(popUpblack);

const popUp = document.createElement('div');
popUp.id = 'content';
popUp.className = 'note';
popUpblack.appendChild(popUp);

const popTextdiv = document.createElement('div');
popTextdiv.id = 'poptest';
popTextdiv.className = 'poptesty';
popUp.appendChild(popTextdiv);

const popupTitle = document.createElement('h3');
popupTitle.textContent = 'Multi Post Stories';
popupTitle.id = 'popuptitleid';
popupTitle.className = 'poptitleclass';
popTextdiv.appendChild(popupTitle);

const listchild1 = document.createElement('li');
listchild1.textContent = 'html';
listchild1.id = 'bam';
listchild1.className = 'bambam';
list.appendChild(listchild1);

const listchild2 = document.createElement('li');
listchild2.textContent = 'bootstrap';
listchild2.id = 'blam';
listchild2.className = 'banban';
list.appendChild(listchild2);

const listchild3 = document.createElement('li');
listchild3.textContent = 'Ruby on rails';
listchild3.id = 'lone';
listchild3.className = 'lome';
list.appendChild(listchild3);

