// Pegar dados do arquivo json
const monthlyBilling = require("./dados.json");

// Filtrar os dias com faturamento (ignorar dias sem faturamento)
const daysWithBilling = monthlyBilling.filter((dia) => dia.valor > 0);

// Encontrar o menor valor de faturamento
const lowerRevenue = Math.min(...daysWithBilling.map((dia) => dia.valor));

// Encontrar o maior valor de faturamento
const higherRevenue = Math.max(...daysWithBilling.map((dia) => dia.valor));

// Calcular a média mensal (ignorando dias sem faturamento)
const totalRevenue = daysWithBilling.reduce((acc, dia) => acc + dia.valor, 0);
const mediaBilling = totalRevenue / daysWithBilling.length;

// Contar os dias em que o faturamento foi superior à média mensal
const daysAboveAverage = daysWithBilling.filter(
  (dia) => dia.valor > mediaBilling
).length;

// Exibir os resultados
console.log(`Menor faturamento: R$ ${lowerRevenue}`);
console.log(`Maior faturamento: R$ ${higherRevenue}`);
console.log(
  `Número de dias com faturamento acima da média: ${daysAboveAverage}`
);
