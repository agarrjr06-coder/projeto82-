# 07 — Interface, Navegação e Autenticação

## Objetivo

Este documento define a experiência-base da V2 do Projeto 82%: o que acontece quando o usuário abre a aplicação, como a navegação principal será organizada e como a autenticação deverá funcionar.

Esta definição antecede a implementação completa dos módulos e do banco de dados.

---

## Princípio da interface

O Projeto 82% não deve se comportar como uma planilha ou um dashboard tradicional.

A interface cotidiana deve responder primeiro à pergunta:

> **O que importa para mim hoje?**

O dashboard analítico é secundário. A tela inicial é operacional.

A experiência deve priorizar:

- poucos toques;
- informações relevantes no momento certo;
- registro rápido;
- baixa carga cognitiva;
- navegação simples;
- feedback visual de progresso;
- ausência de formulários longos sempre que possível.

---

## Fluxo de entrada

Ao abrir a aplicação:

```text
Abrir Projeto 82%
        ↓
Existe sessão válida?
     ↙       ↘
   NÃO       SIM
    ↓         ↓
  Login     Tela Hoje
    ↓
Entrar / Criar conta
    ↓
Onboarding (primeiro acesso)
    ↓
Tela Hoje
```

Usuários autenticados não deverão realizar login a cada abertura. A sessão será restaurada sempre que ainda estiver válida.

---

## Tela de login

A tela de login deve ser simples e possuir identidade própria do Projeto 82%.

Elementos iniciais:

- marca 82%;
- frase “Consistência acima da perfeição”;
- campo de e-mail;
- campo de senha;
- botão Entrar;
- opção “Esqueci minha senha”;
- opção “Criar conta”.

A autenticação será implementada com **Supabase Auth**.

O Projeto 82% não implementará armazenamento ou hash de senhas por conta própria.

---

## Criação de conta

Versão inicial:

- nome;
- e-mail;
- senha.

Após o cadastro:

1. Supabase Auth cria o usuário;
2. um perfil do Projeto 82% é associado ao usuário;
3. o usuário passa pelo onboarding;
4. a aplicação apresenta a tela Hoje.

Futuramente poderão ser adicionados:

- autenticação com Google;
- outros provedores OAuth;
- autenticação biométrica por meio da plataforma/PWA, quando aplicável.

---

## Primeiro acesso / onboarding

O primeiro acesso deve configurar o sistema sem sobrecarregar o usuário.

Exemplo:

> Bem-vindo ao 82%.  
> Vamos configurar o que importa para você.

O usuário poderá selecionar os módulos que deseja acompanhar:

- treino;
- alimentação;
- sono;
- água;
- saúde e medidas;
- hábitos;
- finanças;
- estudos;
- leitura.

Depois poderão ser solicitadas metas iniciais apenas quando forem necessárias.

O onboarding deverá ser progressivo. Não devemos exigir dezenas de configurações antes que a pessoa consiga utilizar o produto.

---

## Tela Hoje

Após a autenticação, esta será a principal tela do Projeto 82%.

Objetivo:

> apresentar o estado atual do dia e permitir agir rapidamente.

Componentes inicialmente previstos:

### Resumo de consistência

- percentual/indicador diário;
- progresso visual;
- mensagem contextual.

### Indicadores principais

Exemplos:

- água;
- sono;
- treino;
- energia;
- outros indicadores configurados pelo usuário.

### Próxima ação

O sistema poderá destacar algo relevante, por exemplo:

- treino planejado;
- refeição;
- meta ainda não atingida;
- tarefa recorrente;
- registro pendente.

### Registro rápido

Ações como:

- adicionar água;
- registrar humor;
- registrar peso;
- registrar refeição;
- registrar gasto;
- registrar estudo.

---

## Navegação principal

A navegação inferior terá inicialmente quatro áreas.

### Hoje

O presente.

Mostra situação atual, progresso diário e próximas ações.

### Evolução

O histórico.

Inclui:

- gráficos;
- tendências;
- metas;
- comparações;
- médias;
- correlações;
- indicadores de semanas, meses e anos.

### Registrar

Entrada de dados.

Deve privilegiar seletores, botões, modelos e automações em vez de formulários extensos.

### Perfil

Configuração.

Inclui:

- perfil;
- metas;
- módulos;
- cadastros;
- preferências;
- integrações;
- conta;
- logout.

---

## Módulos

A navegação principal não deverá possuir uma aba para cada área da vida.

Os módulos ficarão dentro do sistema e serão acessados principalmente por contexto ou pela área Registrar.

Exemplo:

```text
Registrar
├── Saúde
├── Treino
├── Alimentação
├── Hábitos
├── Estudos
├── Leitura
└── Finanças
```

Isso evita transformar a navegação em uma coleção de telas independentes.

---

## Autenticação

A autenticação será baseada no Supabase Auth.

Responsabilidades do Supabase:

- criação de usuário;
- armazenamento seguro de credenciais;
- login;
- renovação de sessão;
- recuperação de senha;
- confirmação de e-mail, se ativada;
- logout;
- provedores OAuth futuros.

---

## Identidade do usuário nos dados

O Supabase fornece um identificador único para cada usuário.

Os registros pessoais do Projeto 82% deverão estar associados a este identificador.

Exemplo conceitual:

```text
auth.users
    │
    └── user_id
          │
          ├── treinos
          ├── medidas
          ├── hábitos
          ├── refeições
          ├── finanças
          └── estudos
```

---

## Segurança e Row Level Security

Todas as tabelas que armazenarem dados pessoais deverão utilizar **Row Level Security (RLS)**.

Regra fundamental:

> Um usuário só pode consultar ou alterar registros aos quais possui autorização.

Na maioria das tabelas pessoais, isso significa restringir operações ao usuário cujo identificador coincide com o `user_id` do registro.

O fato de a aplicação ser cliente web não deve permitir contornar essas regras.

A segurança deve existir no banco, e não apenas na interface.

---

## Estrutura de aplicação planejada

A organização poderá evoluir conforme o projeto crescer, mas a direção inicial é:

```text
src/
├── auth/
│   ├── login.js
│   ├── register.js
│   ├── recovery.js
│   ├── logout.js
│   └── session.js
│
├── views/
│   ├── login.js
│   ├── onboarding.js
│   ├── home.js
│   ├── register.js
│   ├── evolution.js
│   └── profile.js
│
├── services/
│   ├── auth.js
│   └── database.js
│
├── lib/
│   └── supabase.js
│
├── styles/
│   └── app.css
│
└── main.js
```

---

## Regra de inicialização da aplicação

A aplicação deverá verificar a sessão antes de decidir o que renderizar.

Conceitualmente:

```js
const user = await getCurrentUser();

if (!user) {
  renderLogin();
} else {
  renderApp();
}
```

O fluxo definitivo dependerá também do estado de onboarding do usuário.

---

## Banco de dados

A direção atual é utilizar **Supabase/PostgreSQL** para armazenamento.

Porém, as tabelas definitivas não deverão ser criadas antes do inventário funcional da V1.

Motivo:

> Não queremos reproduzir no banco de dados novo as limitações estruturais da planilha antiga.

A ordem correta será:

1. inventariar a V1;
2. definir módulos;
3. classificar entradas;
4. definir entidades e relacionamentos;
5. criar modelo de dados;
6. criar tabelas e políticas RLS;
7. conectar a interface aos dados reais.

---

## Diretriz de produto

O Projeto 82% deverá parecer um aplicativo para viver o dia, e não uma ferramenta para alimentar banco de dados.

O usuário informa somente aquilo que o sistema não consegue obter, selecionar, reaproveitar ou calcular sozinho.
