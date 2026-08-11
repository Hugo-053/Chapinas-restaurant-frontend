function mostrarAlerta() 
{
  window.alert("¡Reserva Realizada! 🥣🥡🍿"); 
}

function enviarCorreo()
{
    const destinatario = "hcapel4@gmail.com";
    const asunto = "Consulta desde la web";
    const mensaje = "Hola,Quiero más información. Gracias.";

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
}