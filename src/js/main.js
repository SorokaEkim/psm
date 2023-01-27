$('.row-match-height > div').matchHeight();

// Шеринг яндекс
$(".share-trigger").on('click', function(e) {
    e.preventDefault();
    var current = $(this);
    var data_id = current.attr('data-id');
    var parent = current.closest('.share-wrapper');
    var el = parent.find('.ya-share2__item_service_'+data_id);
    var toggle = el.find('.ya-share2__link');
    var href = toggle.attr('href');
    window.open(href, '_BLANK');
});

// Копирование текста
$('.btn-copy').click(function() {
    console.log(1);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.btn-copy').attr('data-url')).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).find(".soc-span").text('Скопировано');
});

// Прокрутка до комментариев
$(".go-comments").on('click', function(e) { // ID откуда кливаем
    console.log(1);
    e.preventDefault();
    $('html, body').animate({
    scrollTop: $(".comments").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
    