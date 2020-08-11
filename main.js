
// Ogni 3 secondi le slide si alternano

function slideSwitch(){

    var img_corrente = $('.visible');
    img_corrente.removeClass('visible');
    img_successiva = img_corrente.next('img');

    if (img_successiva.length != 0) {
        img_successiva.addClass('visible');
    } else {
        img_successiva = $('img:first-child');
        img_successiva.addClass('visible');
    }
};

var theInterval;

function startSlide() {
    theInterval = setInterval(slideSwitch, 3000);
}

function stopSlide() {
    clearInterval(theInterval);
}

$(function () {
    startSlide();
    $(".images").hover(
        function () {
            stopSlide();
        },
        function () {
            startSlide();
        }
    );
});

// Costruire uno Slider con immagini che scorrono
// cliccando sulle freccie

// intercettare il click sulla classe .next
$('.next').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    // intercettare l'immagine successiva
    var img_successiva = img_corrente.next('img');
    // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo
    if (img_successiva.length != 0) {
        img_successiva.addClass('visible');
    } else {
        img_successiva = $('img:first-child');
        img_successiva.addClass('visible');
    }
})

// intercettare il click sulla classe .prev
$('.prev').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    // intercettare l'immagine successiva
    var img_precedente = img_corrente.prev('img');
    // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo
    if (img_precedente.length != 0) {
        img_precedente.addClass('visible');
    } else {
        img_precedente = $('img:last-child');
        img_precedente.addClass('visible');
    }
})




















// END
