// Costruire uno Slider con immagini che scorrono cliccando sulle freccie

// intercettare il click sulla classe .next
$('.next').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    console.log(img_corrente);
    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    // intercettarel'immagine successiva
    var img_successiva = img_corrente.next('img');
    // aggiungo la classe .visible a img_successiva
    if (img_successiva.length != 0) {
        img_successiva.addClass('visible');
    } else {
        // Se img_successiva è l'ultima si ricomincia da capo
        img_successiva = $('img:first-child');
        img_successiva.addClass('visible');
    }
})

$('.prev').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    console.log(img_corrente);
    // rimuovo la classe .visible all'img corrente
    img_corrente.removeClass('visible');
    // intercettarel'immagine successiva
    var img_precedente = img_corrente.prev('img');
    // aggiungo la classe .visible a img_successiva
    if (img_precedente.length != 0) {
        img_precedente.addClass('visible');
    } else {
        // Se img_successiva è l'ultima si ricomincia da capo
        img_precedente = $('img:last-child');
        img_precedente.addClass('visible');
    }
})
