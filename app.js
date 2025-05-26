
const bebidas = [
  {
    nome: 'Benção do Corvo Dourado',
    descricao: 'Bebida cremosa e doce com banana e leite condensado.',
    imagem: 'https://png.pngtree.com/png-vector/20241002/ourmid/pngtree-golden-raven-with-wings-png-image_13995833.png',
    categoria: ['doce', 'cremosa'],
    ingredientes: [
      '1 banana madura',
      '100 ml de leite integral',
      '2 colheres de sopa de leite condensado',
      '1 pitada de canela em pó',
      '100 gramas de Gelo a gosto'
    ],
    preparo: 'Bata tudo na coqueteleira menos a canela em pau até ficar homogêneo e sirva com canela em pau.'
  },
  {
    nome: 'Suco de Limão com Hortelã',
    descricao: 'Refrescante e cítrico, ideal para o verão.',
    imagem: 'https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2Fba25f862229de2811c554a9c93523a5f2805e9d4.png&w=1080&q=70',
    categoria: ['citrica', 'refrescante'],
    ingredientes: [
      'Suco de 2 limões',
      'Folhas de hortelã',
      'Água gelada',
      'Açúcar a gosto',
      'Gelo'
    ],
    preparo: 'Bata tudo no liquidificador e sirva com gelo.'
  },
  {
    nome: 'Milkshake de Chocolate',
    descricao: 'Doce e cremoso com muito sabor.',
    imagem: 'https://i.ytimg.com/vi/Co1WxD-FHoE/maxresdefault.jpg',
    categoria: ['doce', 'cremosa'],
    ingredientes: [
      'Sorvete de chocolate',
      'Leite',
      'Calda de chocolate'
    ],
    preparo: 'Bata tudo no liquidificador até ficar homogêneo.'
  },
  {
    nome: 'Suco de Abacaxi com Gengibre',
    descricao: 'Cítrico, com leve ardência do gengibre.',
    imagem: 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/11/suco-de-abacaxi-espremido-na-hora-com-fatias-de-limao-e-gelo-em-potes-de-vidro-780x521.jpg',
    categoria: ['citrica', 'refrescante'],
    ingredientes: [
      'Abacaxi picado',
      'Gengibre fresco',
      'Água gelada',
      'Gelo'
    ],
    preparo: 'Bata tudo no liquidificador e coe antes de servir.'
  },
  {
    nome: 'Café Salgado com Manteiga',
    descricao: 'Tradicional em culturas paleo e keto.',
    imagem: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/12/16/cafemanteigaistock.jpg',
    categoria: ['salgada'],
    ingredientes: [
      'Café preto quente',
      '1 colher de manteiga sem sal'
    ],
    preparo: 'Misture o café quente com a manteiga até dissolver bem.'
  },
  {
    nome: 'Bloody Mary',
    descricao: 'Bebida salgada clássica com suco de tomate.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfet9tiz0J78Pt1SU0I5AAErO5YFWQ8ToHPw&s',
    categoria: ['salgada'],
    ingredientes: [
      'Suco de tomate',
      'Molho inglês',
      'Pimenta, sal e limão'
    ],
    preparo: 'Misture os ingredientes e sirva com gelo.'
  }
];

const container = document.getElementById('drinkContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function mostrarBebidas(lista) {
  container.innerHTML = '';
  if (lista.length === 0) {
    container.innerHTML = '<p>Nenhuma bebida encontrada.</p>';
    return;
  }
  lista.forEach(drink => {
    const div = document.createElement('div');
    div.className = 'drink';
    div.tabIndex = 0;
    div.innerHTML = `
      <img src="${drink.imagem}" alt="${drink.nome}" />
      <div class="drink-info">
        <h3>${drink.nome}</h3>
        <p>${drink.descricao}</p>
      </div>
    `;
    div.onclick = () => abrirModal(drink);
    div.onkeypress = (e) => { if(e.key==='Enter') abrirModal(drink); };
    container.appendChild(div);
  });
}

function filtrarBebidas(categoria) {
  if (categoria === 'todas') {
    mostrarBebidas(bebidas);
  } else {
    const filtradas = bebidas.filter(b => b.categoria.includes(categoria));
    mostrarBebidas(filtradas);
  }
}

function abrirModal(drink) {
  modalContent.innerHTML = `
    <button id="modalCloseBtn" onclick="fecharModal()">Fechar</button>
    <img src="${drink.imagem}" alt="${drink.nome}" />
    <h2>${drink.nome}</h2>
    <p>${drink.descricao}</p>
    <h3>Ingredientes:</h3>
    <ul>${drink.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>Modo de preparo:</h3>
    <p>${drink.preparo}</p>
  `;
  modal.classList.add('show');
}

function fecharModal() {
  modal.classList.remove('show');
}

filtrarBebidas('todas');
