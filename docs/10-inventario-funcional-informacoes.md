# 10 — Inventário Funcional de Informações

## Objetivo

Definir quais informações o Projeto 82% realmente precisa armazenar, calcular ou inferir para cumprir sua proposta.

Este documento não define ainda a estrutura física do banco de dados.

Primeiro definimos **o que o produto precisa saber**. Depois transformamos isso em entidades, tabelas e relacionamentos.

---

# Regra de classificação

Todo dado deve ser classificado como:

- **DIGITAR** — exige entrada manual;
- **SELECIONAR** — escolha rápida em opções;
- **AUTOMÁTICO** — obtido pelo sistema;
- **CALCULADO** — derivado de outros dados;
- **ELIMINAR** — não justifica existir;
- **AVALIAR** — ainda precisa de validação.

---

# 1. Usuário e perfil

## Essenciais

| Informação | Tipo | Observação |
|---|---|---|
| ID do usuário | AUTOMÁTICO | Gerado pela autenticação |
| Nome | DIGITAR | Cadastro inicial |
| E-mail | DIGITAR | Login |
| Data de criação | AUTOMÁTICO | Auditoria |
| Status do onboarding | AUTOMÁTICO | Controla primeiro acesso |
| Módulos ativos | SELECIONAR | Personalização |

## Perfil opcional

| Informação | Tipo | Observação |
|---|---|---|
| Data de nascimento | DIGITAR | Pode apoiar idade e metas |
| Altura | DIGITAR | Útil para saúde e composição corporal |
| Sexo biológico | SELECIONAR / AVALIAR | Só se necessário para cálculos específicos |
| Foto/avatar | DIGITAR | Opcional |
| Fuso horário | AUTOMÁTICO | Importante para datas e rotina |

---

# 2. Metas

As metas devem ser configuráveis por módulo.

## Estrutura mínima

| Informação | Tipo |
|---|---|
| módulo | SELECIONAR |
| indicador | SELECIONAR |
| valor/meta | DIGITAR |
| unidade | AUTOMÁTICO / SELECIONAR |
| periodicidade | SELECIONAR |
| data inicial | AUTOMÁTICO / DIGITAR |
| data final | DIGITAR / opcional |
| ativa? | SELECIONAR |

Exemplos:

- Água: 3,5 L/dia
- Treino: 5x/semana
- Sono: 8h/noite
- Estudos: 40h/mês
- Peso: meta corporal
- Gastos: teto mensal

---

# 3. Status diário

O status diário funciona como um retrato resumido do dia.

## Dados candidatos

| Informação | Tipo | Prioridade |
|---|---|---|
| data | AUTOMÁTICO | ESSENCIAL |
| humor | SELECIONAR | ESSENCIAL |
| energia | SELECIONAR | ESSENCIAL |
| qualidade do sono | SELECIONAR / CALCULADO | ESSENCIAL |
| água consumida | CALCULADO | ESSENCIAL |
| treino realizado | CALCULADO | ESSENCIAL |
| dieta/aderência alimentar | CALCULADO / SELECIONAR | AVALIAR |
| leitura | CALCULADO | AVALIAR |
| estudo | CALCULADO | AVALIAR |
| observação do dia | DIGITAR | OPCIONAL |
| índice de consistência | CALCULADO | ESSENCIAL |

O usuário não deve precisar preencher o status diário inteiro manualmente.

---

# 4. Sono

## Dados

| Informação | Tipo |
|---|---|
| data/noite | AUTOMÁTICO |
| hora de dormir | DIGITAR / AUTOMÁTICO |
| hora de acordar | DIGITAR / AUTOMÁTICO |
| duração | CALCULADO |
| qualidade percebida | SELECIONAR |
| despertares | DIGITAR / AVALIAR |
| observação | DIGITAR / opcional |

## Futuro

Possível integração com:

- Apple Health;
- Google Health Connect;
- relógios/dispositivos compatíveis.

---

# 5. Água

## Dados

| Informação | Tipo |
|---|---|
| data/hora | AUTOMÁTICO |
| quantidade | SELECIONAR / DIGITAR |
| unidade | AUTOMÁTICO |
| total diário | CALCULADO |
| percentual da meta | CALCULADO |

A ação ideal deve ser de um toque:

- +250 ml
- +500 ml
- +750 ml
- valor personalizado

---

# 6. Humor e energia

## Humor

| Informação | Tipo |
|---|---|
| data/hora | AUTOMÁTICO |
| nota | SELECIONAR |
| observação | DIGITAR / opcional |

Escala inicial sugerida: 1–5.

## Energia

| Informação | Tipo |
|---|---|
| data/hora | AUTOMÁTICO |
| nota | SELECIONAR |
| observação | DIGITAR / opcional |

Pode haver mais de um registro no mesmo dia caso isso gere valor.

---

# 7. Corpo e medidas

## Peso

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| peso | DIGITAR |
| horário | AUTOMÁTICO |
| observação | DIGITAR / opcional |

## Medidas

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| cintura | DIGITAR |
| peito | DIGITAR |
| braço direito | DIGITAR |
| braço esquerdo | DIGITAR |
| antebraço direito | DIGITAR |
| antebraço esquerdo | DIGITAR |
| coxa direita | DIGITAR |
| coxa esquerda | DIGITAR |
| panturrilha direita | DIGITAR |
| panturrilha esquerda | DIGITAR |
| percentual de gordura | DIGITAR / AVALIAR |
| observação | DIGITAR / opcional |

Medidas corporais não devem ser solicitadas diariamente.

---

# 8. Treino

O treino deve ser separado em:

1. modelo de treino;
2. sessão executada;
3. exercícios da sessão.

## Modelo de treino

| Informação | Tipo |
|---|---|
| nome | DIGITAR |
| grupo muscular | SELECIONAR |
| exercícios | SELECIONAR / CADASTRO |
| ordem | SELECIONAR |
| séries planejadas | DIGITAR |
| repetições planejadas | DIGITAR |
| carga planejada | DIGITAR / opcional |

## Sessão de treino

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| modelo utilizado | SELECIONAR |
| início | AUTOMÁTICO |
| fim | AUTOMÁTICO |
| duração | CALCULADO |
| intensidade percebida | SELECIONAR |
| concluído? | CALCULADO / SELECIONAR |
| observação | DIGITAR / opcional |

## Exercício executado

| Informação | Tipo |
|---|---|
| exercício | SELECIONAR |
| série | AUTOMÁTICO |
| peso/carga | DIGITAR |
| repetições | DIGITAR |
| RIR/RPE | SELECIONAR / AVALIAR |
| descanso | AUTOMÁTICO / AVALIAR |

---

# 9. Cardio e atividade

## Dados

| Informação | Tipo |
|---|---|
| tipo | SELECIONAR |
| duração | DIGITAR / AUTOMÁTICO |
| distância | DIGITAR / AUTOMÁTICO |
| passos | AUTOMÁTICO / DIGITAR |
| intensidade | SELECIONAR / AUTOMÁTICO |
| calorias | AUTOMÁTICO / AVALIAR |

Passos devem ser automáticos quando houver integração disponível.

---

# 10. Alimentação

Esta área precisa ser simples. Não deve obrigar o usuário a pesar e cadastrar tudo para o sistema ser útil.

## Cadastro de alimento

| Informação | Tipo |
|---|---|
| nome | DIGITAR |
| categoria | SELECIONAR |
| unidade padrão | SELECIONAR |
| calorias | DIGITAR / AVALIAR |
| proteína | DIGITAR / AVALIAR |
| carboidrato | DIGITAR / AVALIAR |
| gordura | DIGITAR / AVALIAR |
| preço médio | CALCULADO |
| ativo? | SELECIONAR |

## Refeição

| Informação | Tipo |
|---|---|
| data/hora | AUTOMÁTICO |
| tipo da refeição | SELECIONAR |
| alimentos | SELECIONAR |
| quantidade | DIGITAR / SELECIONAR |
| observação | DIGITAR / opcional |

## Atalho importante

Refeições recorrentes devem poder ser salvas como **modelos**.

Exemplos:

- café da manhã padrão;
- marmita de frango;
- pós-treino;
- lanche da tarde.

---

# 11. Compras de alimentos

A V1 já possui uma área de compras.

## Dados úteis

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| produto | SELECIONAR / DIGITAR |
| categoria | AUTOMÁTICO / SELECIONAR |
| quantidade | DIGITAR |
| unidade | SELECIONAR |
| valor total | DIGITAR |
| valor unitário | CALCULADO |
| mercado | SELECIONAR |
| forma de pagamento | SELECIONAR |
| promoção? | SELECIONAR |
| observação | DIGITAR / opcional |

## Calculados

- preço médio por produto;
- preço por kg/l/unidade;
- variação de preço;
- gasto mensal;
- gasto por categoria;
- mercado mais barato por item.

---

# 12. Finanças

## Movimento financeiro

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO / DIGITAR |
| tipo | SELECIONAR |
| categoria | SELECIONAR |
| descrição | DIGITAR / SELECIONAR |
| valor | DIGITAR |
| forma de pagamento | SELECIONAR |
| conta/cartão | SELECIONAR |
| recorrente? | SELECIONAR |
| observação | DIGITAR / opcional |

## Calculados

- receitas;
- despesas;
- saldo;
- gasto por categoria;
- gasto fixo;
- gasto variável;
- evolução mensal;
- comprometimento de renda;
- orçamento restante.

---

# 13. Estudos

## Sessão de estudo

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| projeto/curso | SELECIONAR |
| assunto | DIGITAR / SELECIONAR |
| início | AUTOMÁTICO |
| fim | AUTOMÁTICO |
| duração | CALCULADO |
| tipo | SELECIONAR |
| foco percebido | SELECIONAR / AVALIAR |
| observação | DIGITAR / opcional |

## Calculados

- horas por semana;
- horas por mês;
- tempo por assunto;
- consistência;
- progresso por projeto.

---

# 14. Leitura

A V1 já possui uma biblioteca rica.

## Cadastro de livro

| Informação | Tipo |
|---|---|
| título | DIGITAR |
| autor | DIGITAR |
| país | DIGITAR / AUTOMÁTICO |
| gênero | SELECIONAR |
| subgênero | SELECIONAR |
| total de páginas | DIGITAR |
| comprado? | SELECIONAR |
| prioridade | SELECIONAR |
| status | SELECIONAR |

## Leitura

| Informação | Tipo |
|---|---|
| início | DIGITAR / AUTOMÁTICO |
| fim | DIGITAR / AUTOMÁTICO |
| página atual | DIGITAR |
| páginas lidas | CALCULADO |
| nota | SELECIONAR |
| frase marcante | DIGITAR / opcional |
| principal aprendizado | DIGITAR / opcional |

## Calculados

- livros lidos no ano;
- páginas lidas;
- média de notas;
- gêneros mais lidos;
- ritmo de leitura.

---

# 15. Hábitos

Hábitos devem ser configuráveis pelo usuário.

## Cadastro

| Informação | Tipo |
|---|---|
| nome | DIGITAR |
| categoria | SELECIONAR |
| tipo | SELECIONAR |
| meta | DIGITAR |
| periodicidade | SELECIONAR |
| ativo? | SELECIONAR |

## Registro

| Informação | Tipo |
|---|---|
| data | AUTOMÁTICO |
| hábito | SELECIONAR |
| valor | SELECIONAR / DIGITAR |
| observação | DIGITAR / opcional |

Exemplos:

- fumar;
- álcool;
- leitura;
- suplementação;
- meditação;
- rotina matinal.

---

# 16. Índice 82%

O índice de consistência será um dos elementos centrais do produto.

Ele **não deve ser definido arbitrariamente**.

A fórmula ainda será projetada.

## Candidatos de entrada

- aderência às metas diárias;
- frequência de treino;
- sono;
- água;
- alimentação;
- estudos;
- hábitos configurados pelo usuário.

## Requisitos

O índice deve:

- ser explicável;
- não punir excessivamente um dia ruim;
- respeitar prioridades diferentes;
- permitir módulos desativados;
- evitar falsa precisão;
- incentivar consistência e não perfeição.

---

# 17. Dados de sistema

Esses dados não aparecem necessariamente para o usuário, mas são necessários.

| Informação | Tipo |
|---|---|
| created_at | AUTOMÁTICO |
| updated_at | AUTOMÁTICO |
| user_id | AUTOMÁTICO |
| origem do dado | AUTOMÁTICO |
| timezone | AUTOMÁTICO |
| registro excluído/arquivado | AUTOMÁTICO |
| versão/schema | AUTOMÁTICO / AVALIAR |

---

# 18. O que não devemos carregar automaticamente da V1

A presença de um campo na planilha antiga **não garante** que ele deva existir na V2.

Antes de migrar qualquer campo, perguntar:

1. Este dado é utilizado em alguma decisão?
2. Ele alimenta algum cálculo útil?
3. Pode ser obtido automaticamente?
4. Pode ser inferido de outro registro?
5. O custo de preenchimento compensa o valor gerado?
6. A frequência de uso justifica sua existência?

Se a resposta for não, o campo deve ser simplificado ou eliminado.

---

# Próxima etapa

Revisar módulo por módulo e marcar cada item como:

- MANTER;
- ALTERAR;
- ADICIONAR;
- ELIMINAR;
- FUTURO.

Depois dessa validação, criar o **modelo de dados conceitual** da V2.
