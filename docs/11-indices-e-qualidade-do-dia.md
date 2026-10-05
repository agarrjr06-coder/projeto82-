# 11 — Índices e Qualidade do Dia

## Objetivo

Definir o papel do índice principal do Projeto 82% e separar métricas de naturezas diferentes para evitar distorções.

---

## Princípio

O número principal do dia deve responder:

> **Como foi minha consistência cotidiana hoje?**

Ele não deve tentar resumir toda a vida em uma única nota.

Por isso, nem todo módulo do Projeto 82% participa do índice diário.

---

# 1. Índice 82% do dia

O índice diário representa a qualidade da execução da rotina e o cuidado com aspectos cotidianos.

## Candidatos principais

- sono;
- hidratação;
- energia;
- humor;
- treino;
- alimentação;
- hábitos prioritários;
- estudo/foco, quando configurado como prioridade.

## Critérios

O índice deve:

- refletir comportamento do dia;
- ser compreensível;
- evitar falsa precisão;
- respeitar módulos desativados;
- aceitar diferentes prioridades;
- não punir excessivamente um dia ruim;
- permitir recuperação;
- favorecer consistência acima da perfeição.

---

# 2. Finanças fora do score diário

Finanças não devem participar diretamente do índice de qualidade do dia.

Motivo:

Um gasto elevado pode ser:

- uma conta planejada;
- uma compra necessária;
- um investimento;
- uma despesa extraordinária.

Isso não significa que o dia foi pior.

Misturar orçamento financeiro com sono, energia e treino criaria ruído e tornaria o score menos confiável.

---

# 3. Saúde financeira como indicador próprio

Finanças terão um indicador separado.

Exemplos de componentes:

- orçamento utilizado;
- despesas fixas;
- despesas variáveis;
- saldo;
- comprometimento de renda;
- aderência ao orçamento;
- evolução mensal;
- metas financeiras.

Esse indicador deve ser analisado principalmente em escala:

- semanal;
- mensal;
- trimestral.

---

# 4. Camadas de indicadores

Direção inicial:

```text
82% DO DIA
├── Sono
├── Água
├── Energia
├── Humor
├── Treino
├── Alimentação
├── Hábitos
└── Foco/Estudo (opcional)

SAÚDE FINANCEIRA
├── Orçamento
├── Gastos
├── Saldo
└── Metas

EVOLUÇÃO CORPORAL
├── Peso
├── Medidas
├── BF
└── Tendências

EVOLUÇÃO DE ESTUDOS
├── Horas
├── Consistência
└── Progresso

EVOLUÇÃO DE LEITURA
├── Páginas
├── Livros
└── Ritmo
```

---

# 5. Score principal não deve ser uma média simples

Uma média aritmética simples pode ser enganosa.

Exemplo:

- sono excelente;
- água excelente;
- treino não realizado por descanso programado;
- alimentação adequada.

O sistema não deve interpretar descanso planejado como falha.

Portanto, cada componente precisa considerar:

- se era aplicável naquele dia;
- se havia meta ativa;
- se era prioridade;
- se existia planejamento;
- contexto da rotina.

---

# 6. Conceito de elegibilidade

Cada componente pode estar em um dos estados:

- **APLICÁVEL** — entra no cálculo;
- **NÃO APLICÁVEL** — não entra;
- **SEM DADO** — ainda não há informação suficiente;
- **CONCLUÍDO** — meta cumprida;
- **PARCIAL** — meta parcialmente cumprida.

Isso evita transformar ausência de contexto em penalidade.

---

# 7. Pesos

Os pesos não devem ser definidos antes de entender o uso real.

Direção inicial possível:

- sono: alto peso;
- energia/humor: peso moderado;
- água: peso moderado;
- treino: peso variável conforme planejamento;
- alimentação: peso moderado;
- hábitos prioritários: configurável;
- estudos: configurável.

Pesos deverão ser validados empiricamente.

---

# 8. Score explicável

O usuário deve conseguir entender de onde veio o número.

Exemplo:

```text
82% hoje

Sono        92%
Água        75%
Treino      100%
Alimentação 80%
Energia     80%

Treino contou hoje porque estava planejado.
Estudo não entrou no score porque não era meta ativa do dia.
```

---

# 9. Evitar gamificação tóxica

O score não deve:

- gerar culpa;
- penalizar descanso;
- transformar saúde em competição;
- incentivar comportamento obsessivo;
- sugerir que 100% é sempre melhor;
- considerar um dia abaixo da meta como fracasso.

A filosofia continua sendo:

> **Consistência acima da perfeição.**

---

# 10. Próxima etapa

Definir, para cada componente do índice diário:

1. qual dado é necessário;
2. como medir aderência;
3. quando ele é aplicável;
4. qual periodicidade;
5. como lidar com ausência de dados;
6. se precisa de peso;
7. como explicar o resultado ao usuário.
