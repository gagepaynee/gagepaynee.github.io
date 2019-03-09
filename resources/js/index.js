$(function () {

    $('#nameId').animate({
        opacity: 1,
        left: "+=100"
    }, 800)
    $('#title1').delay(300).animate({
        opacity: 1,
        top: "+=100"
    }, 500)
    $('#title2').delay(500).animate({
        opacity: 1,
        bottom: "+=100"
    }, 500)

    var attributesVisible = false;
    var runAttributes = false;
    var sidebarScroll = function (window, logo) {
        var scroll = window.scrollTop();
        var top = logo.offset().top - scroll;
        var homeHeight = $('#home ').outerHeight();
        var aboutHeight = $('#about').outerHeight();
        var project1Height = $('#project1').outerHeight();
        var project2Height = $('#project2').outerHeight();

        var switcher1 = (homeHeight - top) - 20;
        var switcher2 = ((homeHeight + aboutHeight) - top) - 20;
        var switcher3 = ((homeHeight + aboutHeight + project1Height) - top) - 20;
        var switcher4 = ((homeHeight + aboutHeight + project1Height + project2Height) - top) - 20;

        if ((scroll > switcher1 && scroll < switcher2) || (scroll > switcher3 && scroll < switcher4)) {
            logo.addClass('blue');
        } else {
            logo.removeClass('blue');
        }
    }

    var elementVisible = function (window, element) {
        var returnVal = false;
        var topOfElement = element.offset().top;
        var bottomOfWindow = window.scrollTop() + window.innerHeight();

        if (topOfElement < bottomOfWindow) {
            returnVal = true;
            attributesVisible = true;
            runAttributes = true;
        }

        return returnVal;
    }

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            console.log($(this.hash));
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        sidebarScroll($(window), $('#homeLogo'));
        sidebarScroll($(window), $('#aboutLogo'));
        sidebarScroll($(window), $('#projectLogo'));
        sidebarScroll($(window), $('#thankLogo'));

        if (!attributesVisible) {
            elementVisible($(window), $('.attributes'));
        }
        if (runAttributes) {
            $('#attribute1').animate({
                opacity: 1,
                top: "+=50"
            }, 500);
            $('#underBar1').delay(125).animate({
                opacity: 1,
                top: "+=50"
            }, 500);
            $('#attribute2').delay(250).animate({
                opacity: 1,
                top: "+=50"
            }, 500);
            $('#underBar2').delay(375).animate({
                opacity: 1,
                top: "+=50"
            }, 500);
            $('#attribute3').delay(500).animate({
                opacity: 1,
                top: "+=50"
            }, 500);
            runAttributes = false;
        }

    })
})
