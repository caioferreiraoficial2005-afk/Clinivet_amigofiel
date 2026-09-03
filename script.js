/* =========================================================
   AMIGO FIEL · CONFIG
   Tudo que muda de cliente para cliente vive aqui.
   Troque os valores abaixo e a página inteira se atualiza.
   Não deveria ser necessário abrir o HTML pra editar conteúdo.

   IMPORTANTE: as tags <meta property="og:..."> no <head> do
   index.html precisam ser atualizadas À MÃO junto com este
   objeto. Crawlers de preview (WhatsApp/Instagram) não
   executam JavaScript.
   ========================================================= */

const CONFIG = {
  nome: "Amigo Fiel",
  subtitulo: "Clínica Veterinária e Pet Shop", // usado só no <title>/meta, a logo já mostra isso escrito
  slogan: "Cuidado veterinário completo em Maceió.",
  telefone: "(82) 98847-0300",
  whatsapp: "5582988470300", // DDI + DDD + número, só dígitos
  endereco: "Rua da Codeal, 36, Tabuleiro do Martins, Maceió/AL, 57081-071",
  mapaEmbed: "https://www.google.com/maps?q=Rua+da+Codeal,+36,+Tabuleiro+do+Martins,+Maceió+-+AL&output=embed",
  mapaLink: "https://maps.google.com/?q=Rua+da+Codeal,+36,+Tabuleiro+do+Martins,+Maceió+-+AL",
  instagram: "https://instagram.com/clinvetamigofiel",
  facebook: null, // não encontramos uma página oficial confirmada. Preencha se tiver.
  // logo com o nome já escrito nela (mandada pelo cliente). Cabeçalho e
  // rodapé usam só a imagem, sem escrever "Amigo Fiel" do lado em texto.
  logo: "assets/fotos/logo-amigo-fiel-completa.png",

  // dados reais do Perfil da Empresa no Google (buscado em 02/09/2026,
  // reconfira antes de publicar: número de avaliações muda com o tempo)
  notaGoogle: 4.4,
  qtdAvaliacoes: 142,

  // faixa fina que gira no topo da página, acima do cabeçalho
  promocoes: [
    "🩺 Consultas, vacinas e cirurgias",
    "📅 Atendimento com hora marcada",
    "💬 Fale com a gente pelo WhatsApp"
  ],

  // faixa logo abaixo do hero, 4 serviços em destaque
  servicos: [
    { icone: "consulta",   titulo: "Consultas",   texto: "Avaliação completa com veterinário" },
    { icone: "vacina",     titulo: "Vacinas",     texto: "Calendário em dia, sem enrolação" },
    { icone: "cirurgia",   titulo: "Cirurgias",   texto: "Estrutura própria, equipe experiente" },
    { icone: "banho",      titulo: "Banho e Tosa", texto: "Preço fixo, combinado antes" }
  ],

  // lista da seção "O que a gente oferece", espelha os serviços do Instagram
  // + Google (Perfil da Empresa cita também animais silvestres, castração,
  // laboratório e farmácia. Dá pra encaixar mais itens aqui depois.
  // As fotos são de banco (genéricas), só pra ilustrar cada serviço.
  // Troque pelas fotos reais da clínica assim que tiver.
  oferecemos: [
    { icone: "consulta", titulo: "Consultas",
      texto: "Avaliação clínica completa, com hora marcada e sem pressa pra examinar seu pet direito. O veterinário ouve o histórico, examina de perto e explica o que encontrou antes de qualquer decisão.",
      imagem: "assets/fotos/oferece-consultas.jpg", alt: "Veterinário examinando um pastor-alemão em cima da mesa de consulta" },
    { icone: "vacina", titulo: "Vacinas",
      texto: "Calendário de vacinação em dia, com registro de tudo que seu pet já tomou. A gente avisa quando a próxima dose se aproxima, pra você nunca perder o prazo nem ficar no susto.",
      imagem: "assets/fotos/oferece-vacinas.jpg", alt: "Veterinário aplicando uma vacina na pata de um cão" },
    { icone: "cirurgia", titulo: "Cirurgias",
      texto: "Estrutura própria pra procedimentos, com equipe completa acompanhando cada etapa: pré-operatório, anestesia monitorada e recuperação, tudo sem precisar levar seu pet pra outro lugar.",
      imagem: "assets/fotos/oferece-cirurgias.jpg", alt: "Equipe veterinária preparando um cachorro para cirurgia com anestesia" },
    { icone: "banho", titulo: "Banho e Tosa",
      texto: "Preço fixo por porte, sem surpresa na hora de pagar. Shampoo adequado pro tipo de pelo, secagem com calma e tosa do jeito que você combinar antes, na tesoura ou na máquina.",
      imagem: "assets/fotos/galeria-banho.jpg", alt: "Cão sendo enxaguado com chuveirinho durante o banho" },
    { icone: "exame", titulo: "Exames",
      texto: "Diagnóstico por imagem e laboratório no local, sem precisar rodar a cidade atrás de resultado. Ultrassom, raio-x e exames de sangue com retorno rápido pro veterinário já fechar o quadro.",
      imagem: "assets/fotos/oferece-exames.jpg", alt: "Veterinários fazendo um exame de ultrassom em um cão" },
    { icone: "internacao", titulo: "Internação",
      texto: "Acompanhamento de perto pra quem precisa ficar em observação, com monitoramento constante e atualização pra você durante todo o período internado, sem ficar no escuro sobre o estado do seu pet.",
      imagem: "assets/fotos/oferece-internacao.jpg", alt: "Cão com acesso intravenoso na pata, em recuperação" }
  ],

  // Fotos e nomes reais mandados pelo cliente (dá pra ver o jaleco com
  // a logo da Amigo Fiel). Cargo/descrição do Dr. Eldoni ainda são
  // placeholder, troque quando tiver a informação real dele, do mesmo
  // jeito que veio a especialidade e a descrição da Dra. Carla.
  profissionais: [
    {
      nome: "Dr. Eldoni Freire",
      cargo: "Médico Veterinário",
      texto: "Atendimento tranquilo, no ritmo do seu pet.",
      foto: "assets/fotos/veterinario_homem.jpg"
    },
    {
      nome: "Dra. Carla Loureiro",
      cargo: "Acupuntura, Fisioterapia e Neurologia",
      texto: "Cuidando da saúde e do bem-estar dos pets com carinho, dedicação e conhecimento especializado.",
      foto: "assets/fotos/veterinaria_mulher.jpg"
    }
  ],

  // Carrossel giratório: sempre 3 fotos visíveis (esquerda/centro/direita,
  // a do centro maior), trocando sozinho a cada 3,5s. Sem legenda em
  // nenhuma. Pode acrescentar quantas fotos quiser aqui, a fila gira
  // por todas.
  galeria: [
    { imagem: "assets/fotos/galeria-banho.jpg",     alt: "Cão sendo enxaguado com chuveirinho durante o banho" },
    { imagem: "assets/fotos/galeria-resultado.jpg", alt: "Cão de pelo longo bem tosado e escovado, sentado, retrato" },
    { imagem: "assets/fotos/galeria-detalhe.jpg",   alt: "Tosadora aparando com cuidado a pata de um cão pequeno" },
    { imagem: "assets/fotos/cachorro1.jpg",         alt: "Cão de pelo longo recém-tosado, com laços cor-de-rosa" },
    { imagem: "assets/fotos/cachorro2.jpg",         alt: "Gato de pelo longo recém-banhado, sentado na caixa de transporte" },
    { imagem: "assets/fotos/cachorro3.jpg",         alt: "Cão de pelo claro recém-tosado, com laços vermelhos, em cima da mesa" },
    { imagem: "assets/fotos/cachorro4.jpg",         alt: "Cão recém-tosado com bandana estampada, sorrindo" }
  ],

  // reais, tiradas do Perfil da Empresa no Google (buscado em 02/09/2026).
  // Duas vieram cortadas ("...Mais"), mantive o corte, é a avaliação
  // completa que dá pra ver sem entrar no Google.
  depoimentos: [
    {
      texto: "Há anos trato meus pets com eles, sempre muito atenciosos. Dr. Cristhian Chaves foi ótimo, muito tranquilo e lida muito bem com pets.",
      autor: "Carol Tavares",
      contexto: "Google · 6 meses atrás"
    },
    {
      texto: "Um ambiente no qual está proposto a realmente cuidar do seu animal. A Dra. Carla Curvelo é um ser humano incrível, ama realmente o que faz, cuida com o maior amor! Os funcionários são bem atenciosos e prestativos.",
      autor: "Mell",
      contexto: "Google · 6 anos atrás"
    },
    {
      texto: "Não conhecia a clínica até bater lá com uma emergência com meu gato idoso com crise renal. Hoje retornei pra socorrer o gatinho da minha vizinha que está intoxicado. Super recomendo. Ótimos profissionais, sérios, atentos ao estado clínico do paciente...",
      autor: "Telma Lima",
      contexto: "Google · 4 anos atrás"
    },
    {
      texto: "Ambiente acolhedor. Excelentes profissionais. Tanto na recepção quanto na tosa, se estendendo aos médicos veterinários. Não tenho como agradecer o atendimento dispensado aos nossos animais...",
      autor: "Márcia Gomes",
      contexto: "Google · Local Guide, 11 avaliações"
    }
  ],

  // EXEMPLO: confirme o horário real de atendimento da Amigo Fiel
  // antes de publicar (o Google mostra só "abre às 14:00" no momento
  // da busca, não achamos a semana completa).
  horarios: [
    { dia: "Segunda a Sexta", hora: "08:00 às 18:00" },
    { dia: "Sábado",          hora: "08:00 às 14:00" },
    { dia: "Domingo",         hora: "Fechado" }
  ]
};

/* =========================================================
   MENSAGENS DE WHATSAPP POR CONTEXTO
   Cada botão manda uma mensagem pré-escrita diferente,
   contextual à seção em que a pessoa estava.
   ========================================================= */
const MENSAGENS = {
  header:       () => `Oi! Gostaria de agendar um horário para o meu pet no ${CONFIG.nome}.`,
  hero:         () => `Oi! Vi o site do ${CONFIG.nome} e quero agendar um horário para o meu pet.`,
  rodape:       () => `Oi! Vim pelo site do ${CONFIG.nome} e quero agendar um horário.`,
  mobile:       () => `Oi! Vim pelo site do ${CONFIG.nome} e quero agendar um horário.`,
  profissionais: () => `Oi! Vi o site do ${CONFIG.nome} e queria marcar um horário com a equipe.`
};

/** Monta um link wa.me pronto com o texto já preenchido. */
function linkZap(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

/* =========================================================
   RENDERIZAÇÃO
   ========================================================= */
const PASTEIS = ["teal-claro", "pessego-claro", "amarelo-claro", "laranja-claro"];

function iconeSvg(nome, tamanho = 24) {
  return `<svg width="${tamanho}" height="${tamanho}"><use href="#icon-${nome}"/></svg>`;
}

let promoAtual = 0;
let promoTimer = null;

function renderFaixaPromo() {
  const trilho = document.getElementById("js-promo-trilho");
  if (!trilho || !CONFIG.promocoes || !CONFIG.promocoes.length) return;

  trilho.innerHTML = CONFIG.promocoes.map((texto, i) => `
    <span class="promo-slide${i === 0 ? " ativo" : ""}">${texto}</span>
  `).join("");

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzMovimento || CONFIG.promocoes.length < 2) return;

  clearInterval(promoTimer);
  promoTimer = setInterval(() => {
    promoAtual = (promoAtual + 1) % CONFIG.promocoes.length;
    trilho.querySelectorAll(".promo-slide").forEach((el, i) => {
      el.classList.toggle("ativo", i === promoAtual);
    });
  }, 3800);
}

function renderServicos() {
  const lista = document.getElementById("js-servicos");
  lista.innerHTML = CONFIG.servicos.map(s => `
    <li class="servico-item">
      <span class="servico-item__icone">${iconeSvg(s.icone, 26)}</span>
      <div>
        <h3>${s.titulo}</h3>
        <p>${s.texto}</p>
      </div>
    </li>
  `).join("");
}

let ofereceAtual = 0;
let ofereceTimer = null;

function renderOferecemos() {
  const trilho = document.getElementById("js-oferecemos-trilho");
  const imagens = document.getElementById("js-oferecemos-imagens");
  const pontos = document.getElementById("js-oferecemos-pontos");
  if (!trilho || !imagens || !pontos) return;

  trilho.innerHTML = CONFIG.oferecemos.map((o, i) => `
    <div class="oferece-slide${i === 0 ? " ativo" : ""}" data-indice="${i}">
      <span class="oferece-slide__icone" style="background:var(--${PASTEIS[i % PASTEIS.length]})">
        ${iconeSvg(o.icone, 24)}
      </span>
      <h3>${o.titulo}</h3>
      <p>${o.texto}</p>
    </div>
  `).join("");

  imagens.innerHTML = CONFIG.oferecemos.map((o, i) => `
    <img class="oferece-imagem${i === 0 ? " ativo" : ""}" src="${o.imagem}" alt="${o.alt}">
  `).join("");

  pontos.innerHTML = CONFIG.oferecemos.map((o, i) => `
    <button aria-label="Ver serviço: ${o.titulo}" class="${i === 0 ? "ativo" : ""}" data-indice="${i}"></button>
  `).join("");

  pontos.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      irParaOferece(Number(btn.dataset.indice));
      reiniciarAutoAvancoOferece();
    });
  });

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzMovimento && CONFIG.oferecemos.length > 1) {
    reiniciarAutoAvancoOferece();
  }
}

function irParaOferece(indice) {
  ofereceAtual = indice;
  document.querySelectorAll(".oferece-slide").forEach((el, i) => {
    el.classList.toggle("ativo", i === indice);
  });
  document.querySelectorAll(".oferece-imagem").forEach((el, i) => {
    el.classList.toggle("ativo", i === indice);
  });
  document.querySelectorAll("#js-oferecemos-pontos button").forEach((el, i) => {
    el.classList.toggle("ativo", i === indice);
  });
}

function reiniciarAutoAvancoOferece() {
  clearInterval(ofereceTimer);
  ofereceTimer = setInterval(() => {
    irParaOferece((ofereceAtual + 1) % CONFIG.oferecemos.length);
  }, 3500);
}

/* =========================================================
   GALERIA · esteira com loop infinito, fluxo automático contínuo
   A foto ativa (centralizada) fica maior. A cada 2s a esteira desliza
   de verdade até a próxima posição (transform + transition, não é só
   fade). Sem arrasto, é só o fluxo automático.
   ========================================================= */
let galeriaTotal = 0;
let galeriaIndiceAtual = 0; // índice dentro do array TRIPLICADO (loop infinito)
let galeriaTimer = null;
let galeriaSaltoTimeout = null;
const GALERIA_INTERVALO = 2000;
const GALERIA_TRANSICAO_MS = 600;

// mesmos números do CSS (.galeria__celula flex-basis e .galeria__trilho
// gap). Ficam fixos aqui, e não medidos ao vivo no DOM, de propósito:
// a célula ativa cresce só visualmente (transform: scale, no CSS), o
// layout das 3 células é sempre do mesmo tamanho — então a conta de
// posição nunca desanda, não importa qual esteja em destaque.
const GALERIA_PCT_CELULA = 0.32;
const GALERIA_PCT_GAP    = 0.02;

function galeriaReduzMovimento() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function medirCelulaGaleria() {
  const viewport = document.getElementById("js-galeria-viewport");
  const larguraViewport = viewport ? viewport.getBoundingClientRect().width : 0;
  return {
    largura: larguraViewport * GALERIA_PCT_CELULA,
    espaco: larguraViewport * GALERIA_PCT_GAP,
    larguraViewport
  };
}

function posicionarGaleria(comTransicao) {
  const trilho = document.getElementById("js-galeria-trilho");
  const viewport = document.getElementById("js-galeria-viewport");
  if (!trilho || !viewport) return;

  trilho.querySelectorAll(".galeria__celula").forEach((el, i) => {
    el.classList.toggle("galeria__celula--ativa", i === galeriaIndiceAtual);
  });

  const { largura, espaco, larguraViewport } = medirCelulaGaleria();
  const passo = largura + espaco;
  const offset = galeriaIndiceAtual * passo + largura / 2 - larguraViewport / 2;

  trilho.style.transition = (comTransicao && !galeriaReduzMovimento()) ? "" : "none";
  trilho.style.transform = `translateX(${-offset}px)`;
}

/** Move `passos` posições (negativo = volta, pode ser mais de 1 de uma vez). */
function girarGaleria(passos) {
  if (!passos) return;
  galeriaIndiceAtual += passos;
  posicionarGaleria(true);

  // depois que o deslize termina, se saiu da faixa segura do meio,
  // pula sem transição pro mesmo ponto no bloco do meio (loop sem fim)
  clearTimeout(galeriaSaltoTimeout);
  galeriaSaltoTimeout = setTimeout(() => {
    // normaliza pra faixa segura do bloco do meio [total, total*2)
    const normalizado = ((galeriaIndiceAtual % galeriaTotal) + galeriaTotal) % galeriaTotal;
    galeriaIndiceAtual = normalizado + galeriaTotal;
    posicionarGaleria(false);
  }, GALERIA_TRANSICAO_MS + 60);
}

function reiniciarAutoAvancoGaleria() {
  clearInterval(galeriaTimer);
  if (galeriaReduzMovimento() || galeriaTotal <= 1) return;
  galeriaTimer = setInterval(() => girarGaleria(1), GALERIA_INTERVALO);
}

function renderGaleria() {
  const trilho = document.getElementById("js-galeria-trilho");
  if (!trilho) return;

  galeriaTotal = CONFIG.galeria.length;
  if (galeriaTotal === 0) return;

  // array triplicado: dá margem pro carrossel girar várias vezes sem
  // nunca faltar foto, e o "salto" no fim do girarGaleria devolve
  // sempre pro bloco do meio, então o loop nunca acaba
  const fotosTriplicadas = [...CONFIG.galeria, ...CONFIG.galeria, ...CONFIG.galeria];
  trilho.innerHTML = fotosTriplicadas.map(f => `
    <div class="galeria__celula">
      <img src="${f.imagem}" alt="${f.alt}">
    </div>
  `).join("");

  // começa no meio, centralizado na 2ª foto original (mesmo ponto de
  // partida visual que a galeria tinha antes)
  galeriaIndiceAtual = galeriaTotal + Math.min(1, galeriaTotal - 1);
  posicionarGaleria(false);
  reiniciarAutoAvancoGaleria();

  // reposiciona sempre que a largura do carrossel realmente mudar (fonte
  // ou imagem carregando, layout assentando, tela girando, etc.) — mais
  // confiável que escutar "resize"/"load", que podem já ter passado
  // antes desse código rodar
  const viewportEl = document.getElementById("js-galeria-viewport");
  if (viewportEl && window.ResizeObserver) {
    new ResizeObserver(() => posicionarGaleria(false)).observe(viewportEl);
  }

  const igLink = document.getElementById("js-galeria-instagram");
  if (igLink) igLink.href = CONFIG.instagram;
}

function renderProfissionais() {
  const grade = document.getElementById("js-profissionais");
  if (!grade) return;
  grade.innerHTML = CONFIG.profissionais.map((p, i) => `
    <li class="profissional-card reveal${i % 2 === 0 ? " reveal--esquerda" : " reveal--direita"}">
      <img class="foto-simples profissional-card__foto" src="${p.foto}" alt="Foto de ${p.nome}">
      <div class="profissional-card__texto">
        <strong>${p.nome}</strong>
        <span class="profissional-card__cargo">${p.cargo}</span>
        <p>${p.texto}</p>
      </div>
    </li>
  `).join("");

  const botaoZap = document.getElementById("js-zap-profissionais");
  if (botaoZap) botaoZap.href = linkZap(MENSAGENS.profissionais());
}

let depoimentoAtual = 0;
let depoimentosTimer = null;

function renderDepoimentos() {
  const trilho = document.getElementById("js-depoimentos");
  trilho.innerHTML = CONFIG.depoimentos.map((d, i) => `
    <div class="depoimento-slide${i === 0 ? " ativo" : ""}" data-indice="${i}">
      <p>"${d.texto}"</p>
      <p class="autor">${d.autor}<span>${d.contexto}</span></p>
    </div>
  `).join("");

  const pontos = document.getElementById("js-depoimentos-pontos");
  pontos.innerHTML = CONFIG.depoimentos.map((_, i) => `
    <button aria-label="Ver depoimento ${i + 1}" class="${i === 0 ? "ativo" : ""}" data-indice="${i}"></button>
  `).join("");

  pontos.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      irParaDepoimento(Number(btn.dataset.indice));
      reiniciarAutoAvanco();
    });
  });

  const nota = document.getElementById("js-nota-google");
  if (nota) {
    if (CONFIG.notaGoogle) {
      nota.innerHTML = `${iconeSvg("estrela", 15)} ${CONFIG.notaGoogle.toLocaleString("pt-BR")} · ${CONFIG.qtdAvaliacoes} avaliações no Google`;
    } else {
      nota.remove();
    }
  }

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzMovimento && CONFIG.depoimentos.length > 1) {
    reiniciarAutoAvanco();
  }
}

function irParaDepoimento(indice) {
  depoimentoAtual = indice;
  document.querySelectorAll(".depoimento-slide").forEach((el, i) => {
    el.classList.toggle("ativo", i === indice);
  });
  document.querySelectorAll("#js-depoimentos-pontos button").forEach((el, i) => {
    el.classList.toggle("ativo", i === indice);
  });
}

function reiniciarAutoAvanco() {
  clearInterval(depoimentosTimer);
  depoimentosTimer = setInterval(() => {
    irParaDepoimento((depoimentoAtual + 1) % CONFIG.depoimentos.length);
  }, 6000);
}

function renderHorarios() {
  const html = CONFIG.horarios.map(h => `<li><span>${h.dia}</span><span>${h.hora}</span></li>`).join("");
  document.getElementById("js-horarios").innerHTML = html;
  document.getElementById("js-rodape-horarios").innerHTML = html;
}

function renderRodapeServicos() {
  document.getElementById("js-rodape-servicos").innerHTML =
    CONFIG.servicos.map(s => `<li>${s.titulo}</li>`).join("");
}

function renderTextosGerais() {
  // nome e subtítulo não aparecem mais em texto no cabeçalho/rodapé.
  // a logo (CONFIG.logo, via .js-logo-real) já vem com o nome escrito
  document.getElementById("js-nome-copyright").textContent = CONFIG.nome;
  document.getElementById("js-slogan-rodape").textContent = CONFIG.slogan;

  document.getElementById("js-endereco").textContent = CONFIG.endereco;

  const telEl = document.getElementById("js-telefone");
  telEl.textContent = CONFIG.telefone;
  telEl.href = `tel:+${CONFIG.whatsapp}`;

  const telHeaderEl = document.getElementById("js-telefone-header");
  if (telHeaderEl) {
    telHeaderEl.querySelector("span").textContent = CONFIG.telefone;
    telHeaderEl.href = `tel:+${CONFIG.whatsapp}`;
  }

  document.getElementById("js-mapa").src = CONFIG.mapaEmbed;
  document.getElementById("js-link-mapa").href = CONFIG.mapaLink;

  document.getElementById("js-rodape-instagram").href = CONFIG.instagram;

  const facebookEl = document.getElementById("js-rodape-facebook");
  if (CONFIG.facebook) {
    facebookEl.href = CONFIG.facebook;
  } else {
    facebookEl.remove(); // sem página confirmada, não linkar errado
  }

  if (CONFIG.logo) {
    document.querySelectorAll(".js-logo-real").forEach(img => { img.src = CONFIG.logo; });
  }

  document.getElementById("js-ano").textContent = new Date().getFullYear();
}

function ligarBotoesZap() {
  document.querySelectorAll(".js-zap").forEach(link => {
    const contexto = link.dataset.zap;
    const gerador = MENSAGENS[contexto];
    if (gerador) link.href = linkZap(gerador());
  });
}

/* =========================================================
   COMPORTAMENTO · menu mobile
   ========================================================= */
function iniciarMenuMobile() {
  const nav = document.getElementById("js-nav");
  const fundo = document.getElementById("js-nav-fundo");
  const botaoAbrir = document.getElementById("js-nav-abrir");
  const botaoFechar = document.getElementById("js-nav-fechar");

  function abrir() {
    nav.classList.add("aberto");
    fundo.classList.add("aberto");
    botaoAbrir.setAttribute("aria-expanded", "true");
  }
  function fechar() {
    nav.classList.remove("aberto");
    fundo.classList.remove("aberto");
    botaoAbrir.setAttribute("aria-expanded", "false");
  }

  botaoAbrir.addEventListener("click", abrir);
  botaoFechar.addEventListener("click", fechar);
  fundo.addEventListener("click", fechar);
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", fechar));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fechar();
  });
}

/* marca o link ativo do menu conforme a seção visível */
function iniciarNavAtiva() {
  const secoes = ["topo", "servicos", "profissionais", "sobre", "localizacao"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = document.querySelectorAll(".nav a");

  if (!("IntersectionObserver" in window) || secoes.length === 0) return;

  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const id = entrada.target.id;
        links.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  secoes.forEach(sec => observador.observe(sec));
}

/* revelação suave das seções ao entrar na viewport */
function iniciarRevelacao() {
  const alvos = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || alvos.length === 0) {
    alvos.forEach(el => el.classList.add("em-vista"));
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("em-vista");
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  alvos.forEach(el => observador.observe(el));
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderTextosGerais();
  renderFaixaPromo();
  renderServicos();
  renderOferecemos();
  renderGaleria();
  renderProfissionais();
  renderDepoimentos();
  renderHorarios();
  renderRodapeServicos();
  ligarBotoesZap();
  iniciarMenuMobile();
  iniciarNavAtiva();
  iniciarRevelacao();
});
