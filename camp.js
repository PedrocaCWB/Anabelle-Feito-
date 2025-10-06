let body = document.querySelector("body");

//container da pag
let div_container = document.createElement("div");
div_container.className = "container";

// const imagme da capa
const img_capa = document.createElement("img");
img_capa.src = './img/capa.png';
img_capa.alt = 'foto capa';


let div_menu = document.createElement("div");
div_menu.className = "menu";

// crira o ul para o menu
let ul_menu = document.createElement("ul");

// adicionando os itens do menu com li
let li1 = document.createElement("li");
let a = document.createElement('a');
a.textContent = "Home |";
a.href = "index.html"
li1.appendChild(a);
ul_menu.appendChild(li1);

let li2 = document.createElement("li");
let a_2 = document.createElement('a');
a_2.textContent = "Sobre |";
a_2.href = "biografia.html"
li2.appendChild(a_2);
ul_menu.appendChild(li2);

let li3 = document.createElement("li");
let a_3 = document.createElement('a');
a_3.textContent = "Serviços|";
a_3.href = "campanhas-publicitarias.html"
li3.appendChild(a_3);
ul_menu.appendChild(li3);

let li4 = document.createElement("li");
let a_4 = document.createElement('a');
a_4.textContent = "Contato |";
a_4.href = "#"
li4.appendChild(a_4);
ul_menu.appendChild(li4);

// ul dentro do menu
div_menu.appendChild(ul_menu);

let div_conteudo = document.createElement("div");
div_conteudo.className = "conteudo";
let h1 = document.createElement("h1");
h1.textContent = "Campanhas-Públicitarias";
h1.id = "camp";
let p1 = document.createElement("p");
p1.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
// const img1
const img_m1 = document.createElement("img");
img_m1.src = './img/foto1.png';
img_m1.alt = 'foto menina 1';
let p2 = document.createElement("p");
p2.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
// const imagem 2
const img_m2 = document.createElement("img");
img_m2.src = './img/foto2.png';
img_m2.alt = 'foto menina 2';
let p3 = document.createElement("p");
p3.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
// const imagem 3
const img_m3 = document.createElement("img");
img_m3.src = './img/foto3.png';
img_m3.alt = 'foto menina 3';
let p4 = document.createElement("p");
p4.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus necessitatibus eum dicta, vero quidem corporis molestiae temporibus ex ut consequatur aspernatur! Nostrum a harum dolore adipisci et itaque pariatur est!";
// div footer
let div_footer = document.createElement("div");
div_footer.className = "footer";
let h2 = document.createElement("h1");
h2.textContent = "TODOS OS DIREITOS RESERVADOS";




// todos os appendChild em ordem

body.appendChild(div_container);
div_container.appendChild(img_capa);
div_container.appendChild(div_menu);
div_container.appendChild(div_conteudo);
div_conteudo.appendChild(h1);
div_conteudo.appendChild(p1);
div_conteudo.appendChild(img_m1);
div_conteudo.appendChild(p2);
div_conteudo.appendChild(img_m2);
div_conteudo.appendChild(p3);
div_conteudo.appendChild(img_m3);
div_conteudo.appendChild(p4);
div_container.appendChild(div_footer);
div_footer.appendChild(h2);
