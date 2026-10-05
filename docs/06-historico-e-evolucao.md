# 06 — Histórico e Evolução

## V1 — Prova de conceito

A primeira versão do Projeto 82% foi construída principalmente utilizando:

- Google Sheets;
- registros manuais;
- fórmulas;
- Looker Studio para visualização.

Ela permitiu testar diferentes áreas da rotina, incluindo:

- compras;
- medidas;
- treino;
- hábitos;
- estudos;
- finanças;
- metas;
- leitura.

## Aprendizados da V1

A V1 provou que centralizar os dados gera valor.

Também revelou problemas importantes:

- excesso de preenchimento manual;
- campos redundantes;
- informações que poderiam ser calculadas;
- datas e padrões inconsistentes;
- dependência da planilha como interface;
- dificuldade de manter o hábito de registro.

## V2 — Reconstrução

A V2 nasce com um novo princípio:

> manter ou aumentar a qualidade dos dados, reduzindo o esforço necessário para produzi-los.

A arquitetura conceitual da nova versão será organizada em:

**CADASTROS → MODELOS → REGISTROS → CÁLCULOS → VISUALIZAÇÃO**

A V2 deverá ser pensada desde o início como uma aplicação digital hospedada online.

A direção inicial é uma aplicação web responsiva/PWA, com banco de dados e autenticação, mantendo aberta a possibilidade de evolução futura para aplicativo nativo.
