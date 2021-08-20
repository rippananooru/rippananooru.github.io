let   $scrollable  = $(".scrollableContent"),
    $scrollbar   = $(".customScrollbar"),
    height       = $scrollable.outerHeight(true),    // visible height
    scrollHeight = $scrollable.prop("scrollHeight"), // total height
    barHeight    = height * height / scrollHeight;   // Scrollbar height!

// Scrollbar drag:
$scrollbar.height( barHeight ).draggable({
    axis: "y",
    containment: $(".tstCustomLinksContent"),
    drag: function(e, ui) {
        $scrollable.scrollTop( scrollHeight / height * ui.position.top  );
    }
});

// Element scroll:
$scrollable.on("scroll", function(){
    $scrollbar.css({top: $scrollable.scrollTop() / height * barHeight });
});