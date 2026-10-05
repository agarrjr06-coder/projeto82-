import './styles/app.css';

const app = document.querySelector('#app');

const state = {
  route: 'home',
  quickMessage: ''
};

const data = {
  consistency: 82,
  water: { value: 1.8, goal: 2.5 },
  sleep: { value: '7h20', goal: '8h' },
  workout: { value: '30 min', goal: '60 min' },
  energy: { value: 'Boa', score: 80 }
};

function navButton(route, icon, label, primary = false) {
  const active = state.route === route ? 'active' : '';
  const emphasized = primary ? 'register' : '';
  return `
    <button data-route="${route}" class="${active} ${emphasized}" aria-label="${label}">
      <span>${icon}</span>
      <small>${label}</small>
    </button>
  `;
}

function shell(content) {
  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand-lockup">
          <span class="brand-mark">82%</span>
          <span class="brand-subtitle">PROJETO</span>
        </div>

        <div class="top-actions">
          <button class="ghost-icon" aria-label="Notificações">⌁</button>
          <button class="avatar" aria-label="Perfil">J</button>
        </div>
      </header>

      <main class="content">${content}</main>

      <nav class="bottom-nav" aria-label="Navegação principal">
        ${navButton('home', '⌂', 'Hoje')}
        ${navButton('evolution', '↗', 'Evolução')}
        ${navButton('register', '＋', 'Registrar', true)}
        ${navButton('profile', '◉', 'Perfil')}
      </nav>
    </div>
  `;
}

function home() {
  const waterPercent = Math.round((data.water.value / data.water.goal) * 100);

  return `
    <section class="home-hero">
      <div>
        <p class="eyebrow">SEGUNDA · 05 OUT</p>
        <h1>Seu dia<br><em>em uma tela.</em></h1>
        <p class="lead">Pequenas escolhas, grandes resultados.</p>
      </div>
      <div class="hero-orbit" aria-hidden="true"></div>
    </section>

    <section class="consistency-card premium-panel">
      <div class="consistency-copy">
        <p class="eyebrow">CONSISTÊNCIA DO DIA</p>
        <h2>Você está no caminho.</h2>
        <p class="muted">Mais presença, menos perfeição.</p>
      </div>

      <div class="consistency-ring" style="--score:${data.consistency}">
        <div class="ring-center">
          <strong>${data.consistency}%</strong>
          <span>RITMO</span>
        </div>
      </div>
    </section>

    <section class="metrics-grid">
      <article class="metric-card water">
        <div class="metric-top"><span class="metric-icon">◒</span><span class="metric-percent">${waterPercent}%</span></div>
        <small>Água</small>
        <strong>${data.water.value.toFixed(1).replace('.', ',')} L</strong>
        <span class="metric-goal">meta ${data.water.goal.toFixed(1).replace('.', ',')} L</span>
        <div class="mini-progress"><span style="width:${waterPercent}%"></span></div>
      </article>

      <article class="metric-card">
        <div class="metric-top"><span class="metric-icon">☾</span><span class="metric-percent">92%</span></div>
        <small>Sono</small>
        <strong>${data.sleep.value}</strong>
        <span class="metric-goal">meta ${data.sleep.goal}</span>
        <div class="mini-progress"><span style="width:92%"></span></div>
      </article>

      <article class="metric-card">
        <div class="metric-top"><span class="metric-icon">⌁</span><span class="metric-percent">50%</span></div>
        <small>Treino</small>
        <strong>${data.workout.value}</strong>
        <span class="metric-goal">meta ${data.workout.goal}</span>
        <div class="mini-progress"><span style="width:50%"></span></div>
      </article>

      <article class="metric-card">
        <div class="metric-top"><span class="metric-icon">ϟ</span><span class="metric-percent">${data.energy.score}%</span></div>
        <small>Energia</small>
        <strong>${data.energy.value}</strong>
        <span class="metric-goal">registro atual</span>
        <div class="mini-progress"><span style="width:${data.energy.score}%"></span></div>
      </article>
    </section>

    <section class="next-action premium-panel">
      <div class="next-action-index">01</div>
      <div class="next-action-copy">
        <p class="eyebrow">PRÓXIMA AÇÃO</p>
        <h2>Treino de peito</h2>
        <p class="muted">Hoje · próximo compromisso físico planejado</p>
      </div>
      <button class="round-action" data-action="start-workout" aria-label="Iniciar treino">↗</button>
    </section>

    <section class="quick-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">REGISTRO RÁPIDO</p>
          <h2>O que mudou?</h2>
        </div>
        <span class="section-note">toque único</span>
      </div>

      <div class="quick-grid">
        <button data-quick="Água"><span>◒</span><small>Água</small></button>
        <button data-quick="Humor"><span>☺</span><small>Humor</small></button>
        <button data-quick="Peso"><span>⌇</span><small>Peso</small></button>
        <button data-quick="Refeição"><span>◐</span><small>Refeição</small></button>
        <button data-quick="Gasto"><span>◇</span><small>Gasto</small></button>
        <button data-quick="Estudo"><span>▱</span><small>Estudo</small></button>
      </div>
      ${state.quickMessage ? `<p class="feedback">${state.quickMessage}</p>` : ''}
    </section>
  `;
}

function evolution() {
  return `
    <section class="screen-title">
      <p class="eyebrow">EVOLUÇÃO</p>
      <h1>Menos números.<br><em>Mais sinais.</em></h1>
      <p class="lead">Aqui entram tendências, metas e padrões que realmente ajudam a decidir.</p>
    </section>

    <section class="chart-card premium-panel">
      <div class="chart-head">
        <div><small>Consistência · 30 dias</small><strong>82%</strong></div>
        <span>+12%</span>
      </div>
      <div class="bars" aria-label="Gráfico ilustrativo">
        <i style="height:36%"></i><i style="height:52%"></i><i style="height:44%"></i><i style="height:62%"></i>
        <i style="height:58%"></i><i style="height:74%"></i><i style="height:68%"></i><i style="height:82%"></i>
        <i style="height:76%"></i><i style="height:88%"></i><i style="height:80%"></i><i style="height:92%"></i>
      </div>
      <div class="chart-footer"><span>01 set</span><span>30 set</span></div>
    </section>

    <div class="insight-grid">
      <article class="insight"><small>Melhor sequência</small><strong>12 dias</strong></article>
      <article class="insight"><small>Dias no plano</small><strong>24 / 30</strong></article>
    </div>
  `;
}

function register() {
  const modules = [
    ['Treino','Movimento, exercícios e sensação','↗'],
    ['Alimentação','Refeições, compras e contexto','◐'],
    ['Saúde','Água, sono, humor e medidas','◇'],
    ['Estudos','Tempo, foco, leitura e projetos','▱'],
    ['Finanças','Gastos, receitas e metas','⌁']
  ];

  return `
    <section class="screen-title">
      <p class="eyebrow">REGISTRAR</p>
      <h1>Em segundos.<br><em>Sem planilha.</em></h1>
      <p class="lead">Escolha a área. O sistema pede só o que precisa.</p>
    </section>

    <section class="module-stack">
      ${modules.map(([title,desc,icon],index)=>`
        <button class="module-card">
          <span class="module-index">0${index+1}</span>
          <span class="module-copy"><strong>${title}</strong><small>${desc}</small></span>
          <span class="module-icon">${icon}</span>
        </button>
      `).join('')}
    </section>
  `;
}

function profile() {
  return `
    <section class="profile-hero premium-panel">
      <div class="profile-avatar">J</div>
      <div>
        <p class="eyebrow">SEU 82%</p>
        <h1>Você no controle.</h1>
        <p class="muted">Metas, integrações e preferências.</p>
      </div>
    </section>

    <section class="settings-list">
      <button><span>Metas</span><small>Objetivos, limites e prioridades</small><b>↗</b></button>
      <button><span>Cadastros</span><small>Alimentos, exercícios e categorias</small><b>↗</b></button>
      <button><span>Integrações</span><small>Fontes automáticas de dados</small><b>↗</b></button>
      <button><span>Conta</span><small>Segurança e autenticação</small><b>↗</b></button>
    </section>
  `;
}

function render() {
  const screens = {
    home: home(),
    evolution: evolution(),
    register: register(),
    profile: profile()
  };

  app.innerHTML = shell(screens[state.route] || screens.home);
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-route]').forEach(button => {
    button.addEventListener('click', () => {
      state.route = button.dataset.route;
      state.quickMessage = '';
      render();
    });
  });

  document.querySelectorAll('[data-quick]').forEach(button => {
    button.addEventListener('click', () => {
      state.quickMessage = `${button.dataset.quick}: registro rápido preparado para a próxima etapa.`;
      render();
    });
  });

  document.querySelector('[data-action="start-workout"]')?.addEventListener('click', () => {
    state.route = 'register';
    render();
  });
}

render();
