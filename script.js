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

//  popup window mobile//

let popUpblack = document.createElement('div');
popUpblack.id = 'popupid';
popUpblack.className = 'popupclass';
document.body.appendChild(popUpblack);

let popUp = document.createElement('div');
popUp.id = 'content';
popUp.className = 'note';
popUpblack.appendChild(popUp);

let popTextdiv = document.createElement('div');
popTextdiv.id = 'poptest';
popTextdiv.className = 'poptesty';
popUp.appendChild(popTextdiv);

let popupTitle = document.createElement('h3');
popupTitle.textContent = 'Multi Post Stories';
popupTitle.id = 'popuptitleid';
popupTitle.className = 'poptitleclass';
popTextdiv.appendChild(popupTitle);

let closeicon = document.createElement('img');
closeicon.src = 'image/close.svg';
closeicon.id = 'closeiconid';
closeicon.className = 'closeiconclass';
popTextdiv.appendChild(closeicon); 

let imageTextblock = document.createElement('div');
imageTextblock.id = 'imagetxtid';
imageTextblock.className = 'imagetxtclass';
popUp.appendChild(imageTextblock);

let list = document.createElement('ul');
list.id = 'listing';
list.className = 'listing';
imageTextblock.appendChild(list);

let listchild1 = document.createElement('li');
listchild1.textContent = 'html';
listchild1.id = 'bam';
listchild1.className = 'bambam';
list.appendChild(listchild1);

let listchild2 = document.createElement('li');
listchild2.textContent = 'bootstrap';
listchild2.id = 'blam';
listchild2.className = 'banban';
list.appendChild(listchild2);

let listchild3 = document.createElement('li');
listchild3.textContent = 'Ruby on rails';
listchild3.id = 'lone';
listchild3.className = 'lome';
list.appendChild(listchild3);


let image = document.createElement('img');
image.src = 'image/mobile.png';
image.id = 'placement';
image.className = 'placemen';
imageTextblock.appendChild(image);

let popupText = document.createElement('p');
popupText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
popupText.id = 'ipsum';
popupText.className = 'lorem';
imageTextblock.appendChild(popupText);

let buttonblock = document.createElement('div');
buttonblock.id = 'blank';
buttonblock.className = 'create';
popUp.appendChild(buttonblock);

let buttonone = document.createElement('button');
buttonone.textContent = 'See Live';
buttonone.id = 'orange';
buttonone.className = 'orang';
buttonblock.appendChild(buttonone);

let icon = document.createElement('img');
icon.src = 'image/icon.svg';
icon.id = 'load';
icon.className = 'loader';
buttonone.appendChild(icon);

let btn = document.createElement('button');
btn.textContent = 'see source';
btn.id = 'path';
btn.className = 'patten';
buttonblock.appendChild(btn);

let icons = document.createElement('img');
icons.src = 'image/icons.png';
icons.id = 'network';
icons.className = 'transfer';
btn.appendChild(icons);

// desktop popup //

let poptop = document.createElement('div');
  poptop.id = 'connect';
  poptop.className = 'plan';

let poptopTitle = document.createElement('h3');
  poptopTitle.textContent = 'Keeping track of hundreds  of components website';

let listen = document.createElement('ul');
listen.id = 'listen';
listen.className = 'listen';

  let listen4 = document.createElement('li');
  listen4.textContent = 'html';
  listen4.id = 'track';
  listen4.className = 'tracks';

let listen5 = document.createElement('li');
listen5.textContent = 'Bootstrap';
listen5.id = 'data';
listen5.className = 'less';

let listen6 = document.createElement('li');
listen6.textContent = 'Ruby on rails';
listen6.id = 'random';
listen6.className = 'names';

let images = document.createElement('img');
images.src = 'image/snapshoot-portfolio.png';
images.id = 'scope';
images.className = 'modula';

let poptopText = document.createElement('h3');
poptopText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
poptopText.id = 'useable';
poptopText.className = 'reuseable';

let buttonblack = document.createElement('div');
buttonblack.id = 'blue';
buttonblack.className = 'blown';

let buttontwo = document.createElement('button');
buttontwo.textContent = 'See Live';
buttontwo.id = 'back';
buttontwo.className = 'feed';

let iconic = document.createElement('img');
iconic.src = 'image/icon.svg';
iconic.id = 'collect';
iconic.className = 'colla';

let bloom = document.createElement('button');
bloom.textContent = 'see source';
bloom.id = 'clear';
bloom.className = 'collapse';

let iconims = document.createElement('img');
iconims.src = 'image/icons.png';
iconims.id = 'pamper';
iconims.className = 'paper';

document.body.appendChild(poptop);
poptop.appendChild(poptopTitle);
poptop.appendChild(listen);
listen.appendChild(listen4);
listen.appendChild(listen5);
listen.appendChild(listen6);
poptop.appendChild(images);
poptop.appendChild(poptopText);
poptop.appendChild(buttonblack);
buttonblack.appendChild(buttontwo);
buttontwo.appendChild(iconic);
buttonblack.appendChild(bloom);
bloom.appendChild(iconims);
