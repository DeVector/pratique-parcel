AOS.init();

const dateOfBirth = new Date("Apr 6, 2024 23:31:00");
const timeStampOfBirth = dateOfBirth.getTime();

const toBirth = setInterval(function () { 

    const now = new Date();
    const timeStampNow = now.getTime();

    const toByBirth = timeStampOfBirth - timeStampNow;

    const dayInMs = 1000 * 60 * 60 * 24;

    const daysToEvent = Math.floor(toByBirth / dayInMs);

    document.getElementById('contador').innerHTML = `Falta apenas ${daysToEvent} dias para meu aniversario.`;

    if( toByBirth < 0 ){
        clearInterval(toBirth);
        document.getElementById('contador').innerHTML = `Apenas proximo ano vai acontecer novamente essa data especial.`;
    }
 }, 1000);