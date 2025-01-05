$(document).ready(function() {
    // Animação de rolagem suave para links de navegação
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Animação de fade-in para seções
    $('section').css('opacity', 0);
    $(window).on('scroll', function() {
        $('section').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });

    // Atualizar o ano atual no rodapé
    $('#currentYear').text(new Date().getFullYear());
});