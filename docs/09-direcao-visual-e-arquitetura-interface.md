# 09 — Direção Visual e Arquitetura de Interface

## Direção escolhida

A interface oficial da V2 seguirá o **Conceito C — premium funcional**.

O objetivo é criar uma experiência:

- sofisticada;
- prática;
- clara;
- distinta de apps genéricos de treino, finanças ou hábitos;
- visualmente forte sem prejudicar usabilidade.

## Princípio visual

A interface deve parecer um sistema pessoal premium, não um dashboard corporativo e nem um aplicativo fitness convencional.

Características principais:

- base escura;
- alto contraste;
- tipografia forte;
- poucos elementos por tela;
- cartões funcionais;
- destaque visual para o que exige ação;
- uso controlado de fotografia e textura;
- acento quente em cobre/bronze ou oliva;
- navegação simples;
- sensação de produto editorial e contemporâneo.

## Paleta inicial

### Base
- preto / grafite profundo;
- cinzas escuros;
- off-white para conteúdo.

### Acento
Direção inicial:
- cobre quente;
- oliva suave;
- tons naturais complementares.

O acento não deve dominar a interface.

## Tipografia

### Títulos
Tipografia com personalidade editorial, podendo usar serif em alguns pontos de destaque.

### Interface
Sans serif limpa para:
- botões;
- métricas;
- campos;
- navegação;
- textos funcionais.

A legibilidade sempre prevalece sobre estética.

## Uso de imagens

Fotografias ou texturas podem ser utilizadas em:

- onboarding;
- login;
- cartões de módulo;
- momentos de destaque;
- telas vazias ou motivacionais.

Não devem aparecer em excesso na interface diária.

A tela Hoje deve continuar rápida e funcional mesmo sem imagens.

## Navegação principal

A estrutura inicial será:

```text
Hoje
Evolução
Registrar
Perfil
```

Um botão central ou destacado pode abrir Registrar.

## Tela Hoje

Objetivo:

> mostrar o estado do dia e o próximo passo.

Estrutura:

1. identidade discreta da marca;
2. título contextual;
3. indicador principal de consistência;
4. métricas essenciais;
5. próxima ação;
6. registro rápido;
7. navegação inferior.

### Elemento central

O percentual de consistência pode aparecer como:

- círculo;
- arco;
- indicador radial;
- ou outro componente visual proprietário.

Ele deve ser um elemento de marca, não apenas um gráfico.

## Tela Evolução

Objetivo:

> mostrar padrões, não apenas números.

Componentes:

- consistência por período;
- tendências;
- metas;
- comparações;
- evolução por módulo;
- insights futuros.

A visualização deve evitar excesso de gráficos simultâneos.

## Tela Registrar

Objetivo:

> registrar em segundos.

Direção:

- grandes áreas de toque;
- módulos claramente identificados;
- contexto visual;
- seleção antes de digitação;
- atalhos para registros recorrentes;
- possibilidade de registrar diretamente da Home.

## Tela Perfil

Estrutura:

- dados pessoais;
- metas;
- módulos;
- cadastros;
- integrações;
- conta;
- segurança;
- logout.

## Onboarding

O onboarding deve utilizar a mesma identidade premium do Conceito C.

Fluxo:

1. apresentação curta;
2. seleção de módulos;
3. definição mínima de metas;
4. conclusão;
5. entrada na Home.

Deve ser possível pular etapas não essenciais.

## Arquitetura de interface

```text
App Shell
├── Auth
│   ├── Login
│   ├── Cadastro
│   └── Recuperação
│
├── Onboarding
│   ├── Introdução
│   ├── Seleção de módulos
│   └── Configuração inicial
│
└── App autenticado
    ├── Hoje
    ├── Evolução
    ├── Registrar
    │   ├── Saúde
    │   ├── Treino
    │   ├── Alimentação
    │   ├── Hábitos
    │   ├── Estudos
    │   ├── Leitura
    │   └── Finanças
    └── Perfil
```

## Componentes-base previstos

- AppHeader
- BottomNavigation
- MetricCard
- ProgressRing
- QuickAction
- ModuleCard
- PrimaryAction
- SectionHeader
- ChartCard
- GoalCard
- EmptyState
- Modal / BottomSheet
- Input
- Select
- Toggle
- Stepper
- Toast

## Responsividade

A interface será criada com prioridade mobile.

A versão desktop não será apenas uma versão esticada do celular.

Diretriz:

- mobile: experiência principal;
- tablet: layout expandido;
- desktop: maior densidade e possibilidade de painéis laterais.

## Diferencial de experiência

O diferencial não será apenas visual.

O Projeto 82% deve se destacar por:

- poucas ações para registrar;
- contexto diário;
- informações conectadas;
- visual forte;
- baixa fricção;
- personalização;
- prioridade à ação em vez de navegação excessiva.

## Próximo passo

Transformar esta direção em:

1. design tokens;
2. componentes reutilizáveis;
3. protótipo funcional da Home;
4. login e onboarding;
5. registro rápido.
