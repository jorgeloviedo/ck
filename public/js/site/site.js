/********************************
 Automation Page.-
 ********************************/
$(document).ready(function () {

  <!-- Generate html for Menu Content. -->
  $("div[class^='sub-section']").each(function (index, element) {
    $(element).attr('id', index);
    $("#menu").find("> ul")
        .append("<li><a class='option' href='#option'>option</a></li>"
            .replace('option', 'menu-l' + element.className.split('-')[2])
            .replace('option', element.id)
            .replace('option', element.children[0].textContent));
  });

  <!-- Add class to the html button tag. -->
  $("#menu-open-button").click(function (e) {
    e.preventDefault();
    $("#page").toggleClass("toggled");
  });

});

/********************************
 Crud Page.-
 ********************************/
$(function () {
  $('[data-toggle="popover"]').popover()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// add the animation to the popover
$('div[rel=popover]').popover().click(function (e) {
  e.preventDefault();
  var open = $(this).attr('data-easein');
  if (open == 'shake') {
    $(this).next().velocity('callout.' + open);
  } else if (open == 'pulse') {
    $(this).next().velocity('callout.' + open);
  } else if (open == 'tada') {
    $(this).next().velocity('callout.' + open);
  } else if (open == 'flash') {
    $(this).next().velocity('callout.' + open);
  } else if (open == 'bounce') {
    $(this).next().velocity('callout.' + open);
  } else if (open == 'swing') {
    $(this).next().velocity('callout.' + open);
  } else {
    $(this).next().velocity('transition.' + open);
  }
});

// add the animation to the modal
$(".modal").each(function () {
  $(this).on('show.bs.modal', function () {
    var open = $(this).attr('data-easein');
    if (open == 'shake') {
      $('.modal-dialog').velocity('callout.' + open);
    } else if (open == 'pulse') {
      $('.modal-dialog').velocity('callout.' + open);
    } else if (open == 'tada') {
      $('.modal-dialog').velocity('callout.' + open);
    } else if (open == 'flash') {
      $('.modal-dialog').velocity('callout.' + open);
    } else if (open == 'bounce') {
      $('.modal-dialog').velocity('callout.' + open);
    } else if (open == 'swing') {
      $('.modal-dialog').velocity('callout.' + open);
    } else {
      $('.modal-dialog').velocity('transition.' + open);
    }
  });
});


  //  	$(function () {
  //  		$('#dateTo').datetimepicker({
  //  			daysOfWeekDisabled: [0, 6],
  //  			showTodayButton: true,
  //  			minDate: new Date(),
  //  			defaultDate: new Date(),
  //  			showClear: true,
  //  			showClose: true
  //  		});
  //
  //  		$('#dateFrom').datetimepicker({
  //  			daysOfWeekDisabled: [0, 6],
  //  			showTodayButton: true,
  //  			minDate: new Date(),
  //  			showClear: true,
  //  			showClose: true
  //  		});
  //
  //  		$("#dateTo").on("dp.change", function (e) {
  //  			$('#dateFrom').data("DateTimePicker").minDate(e.date);
  //  		});
  //
  //  		$("#dateFrom").on("dp.change", function (e) {
  //  			$('#dateTo').data("DateTimePicker").maxDate(e.date);
  //  		});
  //  	});
