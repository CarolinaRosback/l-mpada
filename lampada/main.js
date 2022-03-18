
function ligaDesliga(){
 var lampadaHtml = document.getElementById('lampada').src;
 var interruptorHtml = document.getElementById('interruptor').src;
 var lampadaAcessa = 'https://www.w3schools.com/js/pic_bulbon.gif';
 var lampadaApagada = 'https://www.w3schools.com/js/pic_bulboff.gif';
 var interruptorAcesso = 'acesso.jpg';
 var interruptorApagado = 'apagado.jpg';

    if (lampadaHtml == lampadaAcessa) {
        document.getElementById('lampada').src = lampadaApagada;
        document.getElementById('interruptor').src = interruptorApagado;
        console.log(interruptorApagado)
    } if(lampadaHtml == lampadaApagada) {
        document.getElementById('lampada').src = lampadaAcessa;
        document.getElementById('interruptor').src = interruptorAcesso;
        console.log(interruptorAcesso)
    }

    
    
}
document.getElementById("interruptor").addEventListener("click", ligaDesliga);