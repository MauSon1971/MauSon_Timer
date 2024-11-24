// Función para calcular el tiempo restante
export const calculateRemainingTime = (targetDate = null, totalSeconds = null) => {
  let remainingSeconds;

  // Verifica si se proporciona una fecha objetivo (targetDate)
  if (targetDate) {
    const now = new Date().getTime(); // Tiempo actual en milisegundos
    const targetTime = new Date(targetDate).getTime(); // Tiempo objetivo en milisegundos

    console.log("Ahora:", now, "Target Time:", targetTime);

    // Validación: Si targetDate no es válido
    if (isNaN(targetTime)) {
      console.error("Formato de targetDate no válido:", targetDate);
      return {
        totalSeconds: 0,
        diasDecenas: "0",
        diasUnidades: "0",
        horasDecenas: "0",
        horasUnidades: "0",
        minutosDecenas: "0",
        minutosUnidades: "0",
        segundosDecenas: "0",
        segundosUnidades: "0",
      };
    }

    // Calcula segundos restantes
    remainingSeconds = Math.max(Math.floor((targetTime - now) / 1000), 0);
    console.log("Segundos restantes:", remainingSeconds);
  } 
  // Si se proporciona directamente el total de segundos
  else if (totalSeconds !== null) {
    remainingSeconds = Math.max(totalSeconds, 0);
  } 
  // Si no se proporciona ni targetDate ni totalSeconds
  else {
    console.error("Se debe proporcionar 'targetDate' o 'totalSeconds'");
    return {
      totalSeconds: 0,
      diasDecenas: "0",
      diasUnidades: "0",
      horasDecenas: "0",
      horasUnidades: "0",
      minutosDecenas: "0",
      minutosUnidades: "0",
      segundosDecenas: "0",
      segundosUnidades: "0",
    };
  }

  // Desglose del tiempo restante
  const segundos = remainingSeconds % 60;
  const minutos = Math.floor(remainingSeconds / 60) % 60;
  const horas = Math.floor(remainingSeconds / (60 * 60)) % 24;
  const dias = Math.floor(remainingSeconds / (60 * 60 * 24));

  // Divide los valores en decenas y unidades manualmente
  const segundosUnidades = (segundos % 10).toString(); // Unidades de segundos
  const segundosDecenas = Math.floor(segundos / 10).toString(); // Decenas de segundos

  const minutosUnidades = (minutos % 10).toString(); // Unidades de minutos
  const minutosDecenas = Math.floor(minutos / 10).toString(); // Decenas de minutos

  const horasUnidades = (horas % 10).toString(); // Unidades de horas
  const horasDecenas = Math.floor(horas / 10).toString(); // Decenas de horas

  const diasUnidades = (dias % 10).toString(); // Unidades de días
  const diasDecenas = Math.floor(dias / 10).toString(); // Decenas de días

  // Retorna los valores desglosados
  return {
    totalSeconds: remainingSeconds,
    diasDecenas,
    diasUnidades,
    horasDecenas,
    horasUnidades,
    minutosDecenas,
    minutosUnidades,
    segundosDecenas,
    segundosUnidades,
  };
};