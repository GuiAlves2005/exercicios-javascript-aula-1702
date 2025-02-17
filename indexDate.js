const { weekdays } = require("moment/moment");

// Criando uma data com a data e hora atuais
const agora = new Date();
console.log("Data e hora atuais:", agora);

//Criando uma data específica (Ano, Mês, (0-11), Dia, Hora, Minuto, Segundo)
const dataEspecifica = new Date(2025, 1 , 17, 9, 8, 0);
console.log("Data específica:", dataEspecifica);

//Criando uma data a partir de uma string (Formato ISO)
const dataISO = new Date("2015-02-17T9:08:00Z");
console.log("Data ISO:", dataISO);

//Criando uma data a partir de um timestamp (milissegundos desde 1° de janeiro de 1970)
const dataTimestamp = new Date(1708107000000);
console.log("Data por timestamp:", dataTimestamp);

//Extraindo componentes de uma data
console.log("Ano:", dataEspecifica.getFullYear());
console.log("Mês:", dataEspecifica.getMonth()); //Meses começam em 0 (0 = Janeiro)
console.log("Dia:", dataEspecifica.getDate());
console.log("Dia da Semana:", dataEspecifica.getDay()); // 0 = Domingo
console.log("Horas:", dataEspecifica.getHours());
console.log("Minutos:", dataEspecifica.getMinutes());
console.log("Segundos:", dataEspecifica.getSeconds());

//Modificando valores de uma data
dataEspecifica.setFullYear(2026);
dataEspecifica.setMonth(5); //Junho (Meses começam em 0)
dataEspecifica.setDate(20);
console.log("Data modificada:", dataEspecifica);

//Formatando Datas com toLocaleDateString()
console.log("Data formatada (Brasil)", agora.toLocaleDateString("pt-BR"));
console.log("Data formatada (EUA)", agora.toLocaleDateString("en-US"));
console.log("Data formatada detalhada (Brasil)", agora.toLocaleDateString("pt-BR"), { weekday: "long", year: "numeric", month: "long", day: "numeric"});

//Operações com Datas (Adicionar/Subtrair Dias, Meses)
const novaData= new Date();
novaData.setDate(novaData.getDate() + 7); //Adiciona 7 dias
console.log("Data após adicionar 7 dias:", novaData);

novaData.setMonth(novaData.getMonth() - 1); //Subtrai 1 mês
console.log("Data após subtrair 1 mês:", novaData);

