import './styles/app.css';

const app = document.querySelector('#app');

const screens = {
  home: [
    '<section class="hero">',
    '<p class="eyebrow">HOJE</p>',
    '<h2>Seu dia em uma tela.</h2>',
    '<p class="muted">Registre o necessário. O 82% cuida do resto.</p>',
    '</section>',
    '<section class="card">',
    '<div class="row"><div><p class="eyebrow">CONSISTÊNCIA</p><h3>Ritmo do dia</h3></div><strong class="score">82%</strong></div>',
    '<div class="progress"><span></span></div>',
    '<small class="muted">A meta não é perfeição. É continuar.</small>',
    '</section>',
    '<section class="metrics">',
    '<article class="metric"><span>💧</span><small>Água</small><strong>2,4 L</strong><em>meta 3,5 L</em></article>',
    '<article class="metric"><span>😴</span><small>Sono</small><strong>7h20</strong><em>última noite</em></article>',
    '<article class="metric"><span>🏋️</span><small>Treino</small><strong>Peito</strong><em>planejado hoje</em></article>',
    '<article class="metric"><span>⚡</span><small>Energia</small><strong>4/5</strong><em>registro atual</em></article>',
    '</section>',
    '<section class="card next-action"><div><p class="eyebrow">PRÓXIMA AÇÃO</p><h3>Treino de peito</h3><p class="muted">Seu próximo compromisso planejado.</p></div><button class="primary">Iniciar treino</button></section>',
    '<section><p class="eyebrow">REGISTRO RÁPIDO</p><h3>O que mudou?</h3><div class="quick-grid"><button>💧 Água</button><button>🙂 Humor</button><button>⚖️ Peso</button><button>🍽️ Refeição</button><button>💸 Gasto</button><button>📚 Estudo</button></div></section>'
  ].join(''),
  evolution: '<section class="hero"><p class="eyebrow">EVOLUÇÃO</p><h2>O que seus dados estão dizendo?</h2><p class="muted">Tendências, metas, comparações e correlações entrarão aqui.</p></section><section class="card empty"><strong>↗</strong><h3>Painel em construção</h3><p class="muted">Esta tela será alimentada pelos dados reais do banco.</p></section>',
  register: '<section class="hero"><p class="eyebrow">REGISTRAR</p><h2>Menos digitação. Mais contexto.</h2><p class="muted">Ações rápidas em vez de formulários longos.</p></section><div class="module-list"><button>🏋️ <span><strong>Treino</strong><small>Iniciar ou concluir treino</small></span> ›</button><button>🥗 <span><strong>Alimentação</strong><small>Refeições e compras</small></span> ›</button><button>🫀 <span><strong>Saúde</strong><small>Peso, medidas, sono e água</small></span> ›</button><button>📚 <span><strong>Estudos</strong><small>Tempo, projetos e leitura</small></span> ›</button><button>💰 <span><strong>Finanças</strong><small>Receitas e despesas</small></span> ›</button></div>',
  profile: '<section class="hero"><p class="eyebrow">CONFIGURAÇÕES</p><h2>Seu 82%, suas regras.</h2><p class="muted">Metas, cadastros, integrações e preferências.</p></section><div class="module-list"><button>🎯 <span><strong>Metas</strong><small>Objetivos e limites</small></span> ›</button><button>⚙️ <span><strong>Cadastros</strong><small>Alimentos, exercícios e categorias</small></span> ›</button><button>🔗 <span><strong>Integrações</strong><small>Fontes de dados</small></span> ›</button></div>'
};

function render(route='home') {
  app.innerHTML = [
    '<div class="app-shell">',
    '<header class="topbar"><div><p class="eyebrow">PROJETO</p><h1>82%</h1></div><button class="icon-button">☰</button></header>',
    '<main class="content">' + (screens[route] || screens.home) + '</main>',
    '<nav class="bottom-nav">',
    navButton('home','⌂','Hoje',route),
    navButton('evolution','⌁','Evolução',route),
    navButton('register','＋','Registrar',route,true),
    navButton('profile','◉','Perfil',route),
    '</nav></div>'
  ].join('');

  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => render(button.dataset.route));
  });
}

function navButton(route, icon, label, activeRoute, primary=false) {
  const classes = [
    activeRoute === route ? 'active' : '',
    primary ? 'register' : ''
  ].filter(Boolean).join(' ');
  return '<button data-route="' + route + '" class="' + classes + '"><span>' + icon + '</span><small>' + label + '</small></button>';
}

render();
