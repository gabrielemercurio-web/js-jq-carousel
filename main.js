
// Ogni 3 secondi le slide si alternano

function slideSwitch(){

    var img_corrente = $('.visible');
    // recupero il pallino corrente
    var pallino_corrente = $('.fa-circle.visible');

    img_corrente.removeClass('visible');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('visible');

    img_successiva = img_corrente.next('img');
    // recupero il pallino successivo
    var pallino_successivo = pallino_corrente.next('.fa-circle');

    if (img_successiva.length != 0) {
        img_successiva.addClass('visible');
        pallino_successivo.addClass("visible");
    } else {
        img_successiva = $('img:first-child');
        img_successiva.addClass('visible');
        $(".fa-circle:first-child").addClass("visible");
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
    var pallino_corrente = $(".fa-circle.visible");

    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    pallino_corrente.removeClass("visible");

    // intercettare l'immagine successiva
    var img_successiva = img_corrente.next('img');
    var pallino_successivo = pallino_corrente.next(".fa-circle");

    // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo
    if (img_successiva.length != 0) {
        img_successiva.addClass('visible');
        pallino_successivo.addClass("visible");
    } else {
        img_successiva = $('img:first-child');
        img_successiva.addClass('visible');
        $(".fa-circle:first-child").addClass("visible");
    }
})

// intercettare il click sulla classe .prev
$('.prev').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    var pallino_corrente = $(".fa-circle.visible");

    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    pallino_corrente.removeClass("visible");

    // intercettare l'immagine successiva
    var img_precedente = img_corrente.prev('img');
    var pallino_successivo = pallino_corrente.prev(".fa-circle");
    // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo
    if (img_precedente.length != 0) {
        img_precedente.addClass('visible');
        pallino_successivo.addClass("visible");
    } else {
        img_precedente = $("img:last-of-type");
        img_precedente.addClass('visible');
        $(".fa-circle:last-child").addClass("visible");
    }
})

// Hamburger Menu OPEN e CLOSE
$(".fa-bars").click(function () {
  $(".hamburger-menu").addClass("active");
});

$(".fa-times").click(function () {
  $(".hamburger-menu").removeClass("active");
});


















// END
