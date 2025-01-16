// Dados de faturamento por estado
const invoicing = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Calculando o faturamento total
const totalRevenue = Object.values(invoicing).reduce(
  (acc, value) => acc + value,
  0
);

// Calculando o percentual de representação para cada estado
const percentages = Object.entries(invoicing).map(([state, value]) => {
  const percentual = (value / totalRevenue) * 100;
  return { state, percentual: percentual.toFixed(2) }; // Arredondar para 2 casas decimais
});

// Exibindo os resultados
console.log(`Faturamento total: R$ ${totalRevenue.toFixed(2)}\n`);
percentages.forEach(({ state, percentual }) => {
  console.log(`${state}: ${percentual}%`);
});
