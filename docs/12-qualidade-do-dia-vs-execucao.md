# 12 — Qualidade do Dia x Execução do Planejado

## Decisão conceitual

O Projeto 82% existe para produzir monitoramento e insights a partir dos registros cotidianos.

Por isso, o sistema deve distinguir duas perguntas diferentes:

1. **Quão bom foi o dia?**
2. **Quanto do que estava planejado foi executado?**

Essas dimensões são relacionadas, mas não equivalentes.

---

# 1. Qualidade do Dia

A Qualidade do Dia tenta representar como o dia foi vivido.

Ela deve considerar principalmente sinais de bem-estar, funcionamento e equilíbrio.

## Componentes candidatos

- sono;
- energia;
- humor;
- hidratação;
- alimentação;
- atividade física;
- sinais físicos;
- hábitos prioritários;
- estresse/percepção do dia, se futuramente fizer sentido.

## Exemplo

Uma pessoa pode ter:

- dormido bem;
- se alimentado bem;
- se sentido com boa energia;
- descansado;
- bebido água suficiente;

mesmo sem cumprir todas as tarefas planejadas.

Esse dia pode ter alta qualidade, ainda que a execução tenha sido apenas moderada.

---

# 2. Execução do Planejado

A Execução mede aderência ao que estava previsto.

## Componentes candidatos

- treino planejado realizado;
- estudo planejado realizado;
- hábitos previstos;
- meta de hidratação;
- refeições planejadas;
- tarefas recorrentes;
- ações específicas do dia.

## Exemplo

Uma pessoa pode cumprir quase tudo que planejou, mas:

- dormir mal;
- estar exausta;
- ter humor ruim;
- se alimentar mal.

Nesse caso, a execução pode ser alta e a qualidade do dia, baixa.

---

# 3. Por que separar

Misturar tudo em uma única nota esconderia informações importantes.

Exemplo:

```text
Qualidade do dia:   68%
Execução do plano:  94%
```

Esse resultado diz muito mais do que apenas:

```text
81%
```

O primeiro formato permite perguntar:

> Por que estou executando tanto e me sentindo tão mal?

Ou o inverso:

```text
Qualidade do dia:   91%
Execução do plano:  61%
```

Nesse caso:

> Estou me sentindo bem, mas meu planejamento talvez esteja irrealista ou pouco alinhado.

---

# 4. Papel do 82%

A marca 82% não precisa obrigatoriamente significar uma média matemática fixa.

O número pode representar a filosofia de consistência sustentável.

A interface poderá exibir:

- Qualidade do Dia;
- Execução do Planejado;
- Consistência;
- tendências ao longo do tempo.

O indicador principal ainda será validado com uso real.

---

# 5. Possível estrutura futura

```text
HOJE

Qualidade do dia       84%
Execução do planejado  78%

Consistência           82%
```

A Consistência poderá ser um indicador derivado de várias dimensões, mas não deve ser criada como média arbitrária.

---

# 6. Insights possíveis

Separar essas dimensões permite detectar padrões como:

- alta execução + baixa qualidade;
- baixa execução + alta qualidade;
- alta execução + alta qualidade;
- baixa execução + baixa qualidade.

## Interpretação possível

### Alta execução + alta qualidade
Rotina funcionando bem.

### Alta execução + baixa qualidade
Possível sobrecarga ou planejamento excessivo.

### Baixa execução + alta qualidade
Planejamento pode estar desalinhado com necessidades reais.

### Baixa execução + baixa qualidade
Pode haver necessidade de reduzir carga, reorganizar rotina ou identificar fatores externos.

---

# 7. Princípio de produto

O Projeto 82% não deve apenas dizer:

> Você cumpriu ou não cumpriu.

Ele deve ajudar a entender:

> O que aconteceu, como você estava e quais padrões estão se repetindo.

Essa é a base para gerar insights realmente úteis.

---

# Próxima etapa

Definir os componentes da **Qualidade do Dia** e da **Execução do Planejado**, começando por:

- sono;
- água;
- humor;
- energia;
- treino;
- alimentação.
