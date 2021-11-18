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

const image = document.createElement('img');
image.src = 'image/mobile.png';
image.id = 'placement';
image.className = 'placemenImage';
imageTextblock.appendChild(image);

const popupText = document.createElement('p');
popupText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
popupText.id = 'ipsum';
popupText.className = 'lorem';
imageTextblock.appendChild(popupText);

const buttonblock = document.createElement('div');
buttonblock.id = 'blank';
buttonblock.className = 'create';
popUp.appendChild(buttonblock);

const buttonone = document.createElement('button');
buttonone.textContent = 'See Live';
buttonone.id = 'orange';
buttonone.className = 'orang';
buttonblock.appendChild(buttonone);

const icon = document.createElement('img');
icon.src = 'image/icon.svg';
icon.id = 'load';
icon.className = 'loader';
buttonone.appendChild(icon);

const btn = document.createElement('button');
btn.textContent = 'see source';
btn.id = 'path';
btn.className = 'patten';
buttonblock.appendChild(btn);

const icons = document.createElement('img');
icons.src = 'image/icons.png';
icons.id = 'network';
icons.className = 'transfer';
btn.appendChild(icons);

const popUpWindowArray = [];
popUpWindowArray.push(popUpblack);
popUpWindowArray.push(popUp);
popUpWindowArray.push(popTextdiv);
popUpWindowArray.push(imageTextblock);
popUpWindowArray.push(list);
popUpWindowArray.push(buttonblock);

const popUpImageArr = [];
popUpImageArr.push(closeicon);
popUpImageArr.push(image);
popUpImageArr.push(icon);
popUpImageArr.push(icons);

const ButtonArr = [];
ButtonArr.push(buttonone);
ButtonArr.push(btn);

ButtonArr[0].onclick = function redirecting() {
  window.location.href = 'https://oluwajuwon8.github.io/Portfolio-Project/';
};

ButtonArr[1].onclick = function redirect() {
  window.location.href = 'https://github.com/oluwajuwon8/Portfolio-Project';
};

const textArray = [];
textArray.push(popupTitle);
textArray.push(popupText);

const popUpWindowObject = {};
popUpWindowObject.htmlelement = popUpWindowArray;
popUpWindowObject.images = popUpImageArr;
popUpWindowObject.button = ButtonArr;
popUpWindowObject.Text = textArray;


const popUpmenu = document.getElementById('popupid');
const buttonTag = document.getElementById('projects1');
const projectLink1 = document.getElementById('projects2');
const projectLink2 = document.getElementById('projects3');
const projectLink3 = document.getElementById('projects4');
const projectLink4 = document.getElementById('projects5');
const projectLink5 = document.getElementById('projects6');
const projectLink6 = document.getElementById('projects7');

const projectArr = [];
projectArr.push(popUpmenu);
projectArr.push(buttonTag);
projectArr.push(projectLink1);
projectArr.push(projectLink2);
projectArr.push(projectLink3);
projectArr.push(projectLink4);
projectArr.push(projectLink5);
projectArr.push(projectLink6);

document.querySelector('#closeiconid').addEventListener('click', () => {
  document.querySelector('.popupclass').style.display = 'none';
});

projectArr[1].onclick = function popUpWindow() {
  popUpmenu.style.display = 'block';
};

projectArr[2].onclick = function popUpWindow1() {
  popUpmenu.style.display = 'block';
};

projectArr[3].onclick = function popUpWindow2() {
  popUpmenu.style.display = 'block';
};

projectArr[4].onclick = function popUpWindow3() {
  popUpmenu.style.display = 'block';
};

projectArr[5].onclick = function popUpWindow4() {
  popUpmenu.style.display = 'block';
};

projectArr[6].onclick = function popUpWindow5() {
  popUpmenu.style.display = 'block';
};

projectArr[7].onclick = function popUpWindow6() {
  popUpmenu.style.display = 'block';
};

