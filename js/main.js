$('.ui.sidebar').sidebar();
$('.special.cards .image').dimmer({
    on: 'hover'
});
$('.lazy').visibility({ type: 'image', transition: 'fade in', duration: 1000 });
$('.ui.dropdown').dropdown();
$('.ui.embed').embed();
$('.tabular .item').tab();
// -------------------------------------------------------------
//   Cycle By Items
// -------------------------------------------------------------
(function () {
    var $frame = $('#cycleitems1');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 1,

        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        prev: $wrap.find('.prev'),
        next: $wrap.find('.next')
    });

}());

$(".embed i").addClass("play");
$(".embed .placeholder").addClass("lazy");
$(".embed .placeholder").attr("data-src", "https://walter.trakt.tv/images/movies/000/224/812/fanarts/thumb/117557be80.jpg.webp");
