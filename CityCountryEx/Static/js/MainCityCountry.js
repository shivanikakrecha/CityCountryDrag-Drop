$(document).ready(function() {
  $(".add-element").draggable({
    //  use a helper-clone that is append to "body" so is not "contained" by a pane
    helper: function() {
      return $(this).clone().removeClass("add-element").appendTo(".canvas_parent").css({
        "zIndex": 5, "background": 'lavender'
      }).show();

    },
    cursor: "move",
    containment: "document"
  });

  $(".canvas, .canvas *").droppable({
      // it works for move draggable element into country element.
    accept: ".add-element",
    drop: function(event, ui) {
      if (!ui.draggable.hasClass("dropped"))
        $(this).css("background", 'lavender');
        $(this).append($(ui.draggable).clone().removeClass("ui-draggable").removeClass("dropped"));
    }
  }).sortable({
    placeholder: "sort-placer",
    cursor: "move",
    helper: function (evt, ui) {
      return $(ui).clone().appendTo(".canvas").show();
    }
  });

  $(".container").on('click', function () {
    //use for remove city element from country.
      var t = this.children[0].parentElement;
      var t2 = t.children[1];
      t2.remove();
      t.style.background =  "peachpuff"

  })

  $('.x .ui-droppable, .x').on('click', function () {
    //use for remove each element while clicking close button
      this.parentElement.remove();
  })

});

