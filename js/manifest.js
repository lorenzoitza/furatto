// Generated by CoffeeScript 1.6.1
(function(){jQuery(function(){var e;e=$.jPanelMenu();e.on();$("select[data-furatto='select']").dropkick();$("input[data-furatto='checkbox'], input[data-furatto='radio']").each(function(){var e,t;t=$(this);e=$(this).data("color")||"blue";return t.iCheck({checkboxClass:"icheckbox_flat-"+e,radioClass:"iradio_flat-"+e})});$(".pagination a").click(function(e){e.preventDefault();if(!$(this).parent().hasClass("previous")&&!$(this).parent().hasClass("next")){$(this).parent().siblings("li").removeClass("active");return $(this).parent().addClass("active")}});$(".close").each(function(){return $(this).click(function(e){e.preventDefault();return $(this).parent().fadeOut()})});$("[data-toggle=tooltip]").tooltip();$("[data-tags]").tagsInput();$("[data-datepicker]").each(function(){var e;e=$(this);return e.pickadate({selectYears:e.data("select-years")||!1,selectMonths:e.data("select-months")||!1})});$("[data-toolbar]").each(function(){return $(this).toolbar({content:$(this).data("content"),position:$(this).data("position")||"top",hideOnClick:!0})});$('[data-toggle="modal"]').each(function(){var e;e=$(this).data("target");return $(this).avgrund({showClose:!0,showCloseText:"close",template:$(e).html()})});return $(".rslides").responsiveSlides({auto:!0,pager:!0,nav:!0,speed:500,namespace:"centered-btns"})})}).call(this);