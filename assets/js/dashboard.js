$(document).ready(function() {
    $("#next").click(function() {
      var marginLeftVal = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (marginLeftVal == -6375) {
        return false;
      } else {
        $('#carousel').css('margin-left', marginLeftVal - 1275)
      }
    });

    $("#prev").click(function() {
      var marginLeftVal = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (marginLeftVal == 0) {
        return false;
      } else {
        $('#carousel').css('margin-left', marginLeftVal + 1275);
      }
    });

    $('.carousel-item').click(function() {
      $(".modal-container").show();
      // $("#modal-container").css("display", '');
    });

    $('#cancel').click(function() {
      $(".modal-container").hide();
      // $("#modal-container").css("display", "none");
    });

    $('#choose-car-button').click(function() {
      $('.modal-container').hide();
      // $("#modal-container").css("display", "none");
      });

    $('.modal-overlay').click(function() {
      $('.modal-container').hide();
      // $("#modal-container").css("display", "none");
      });

});