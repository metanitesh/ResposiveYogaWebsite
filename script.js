$(document).ready(function() {

    var normalizeBackground = function() {
        $(".header_container").removeClass("orange blue red green purple")

    }

    var normalizeText = function() {
        $(".animated-message-container span").removeClass("visible");
    }

    showSlide = function(color, callback) {
        normalizeBackground();
        $(".header_container").addClass(color);
        setTimeout(function() {
            normalizeText();
            $("span." + color).addClass("visible");
            callback;
        }, 300)
    };

    var slideshow = function(start, step) {
        setTimeout(function() {
            showSlide("orange")
        }, start);
        setTimeout(function() {
            showSlide("blue")
        }, start + step);
        
        setTimeout(function() {
            showSlide("red")
            
        }, start + step * 2);



        setTimeout(function() {
            showSlide("green")
            
        }, start + step * 3);

        setTimeout(function() {
            showSlide("purple")
            $(document).trigger("cycle")
        }, start + step * 4);
    };

    $(document).on("cycle", function() {
        slideshow(6000, 6000);
    })

    slideshow(0, 6000);

    /**
        About me - animation.
    */

    setTimeout(function() { 
        $('.badge').addClass('animated fadeInLeft8');
    }, 300);


    setTimeout(function() { // animate logo tagline
        $('.main').show().addClass('animated fadeInUp8');
    }, 0);

    setTimeout(function() { // animate logo tagline
        // $('.text_underline').show().addClass('text_underline_full');
        $('.text_underline').addClass('animated fadeInRight6');
    }, 500);


    setTimeout(function() { // animate "featured in" text
        $('.sub_main').show().addClass('animated fadeIn5');
    }, 1000);

    setTimeout(function() { // animate "featured in" text
        $('.about_me_text').show().addClass('animated fadeIn');
    }, 1300);







    /**contact animation**/


    setTimeout(function() {
        $('.contact_heading_text').show().addClass('animated fadeInUp8');
    }, 0);

    setTimeout(function() {
        $('.contact_text_underline').show().addClass('width40');
    }, 500);

    setTimeout(function() {
        $('.sub_main_contact').show().addClass('animated fadeIn7');
    }, 1200);

    setTimeout(function() {
        $('.name_input').show().addClass('animated fadeIn');
    }, 1400);

    setTimeout(function() {
        $('.email_input').show().addClass('animated fadeIn');
    }, 1600);

    setTimeout(function() {
        $('.subject_input').show().addClass('animated fadeIn');
    }, 1800);

    setTimeout(function() {
        $('.message_input').show().addClass('animated fadeIn');
    }, 2000);

    setTimeout(function() {
        $('.input_submit').show().addClass('animated fadeIn');
    }, 2200);

    setTimeout(function() {
        $('#sec2').show().addClass('full_sec2');
    }, 1400);

    setTimeout(function() {
        $('#message').show().addClass('animated fadeIn');
    }, 1700);

    setTimeout(function() {
        $('#phone').show().addClass('animated fadeIn');
    }, 1800);

    setTimeout(function() {
        $('.contact_divider').show().addClass('full_divider');
    }, 1900);

    setTimeout(function() {
        $('.tm1').show().addClass('animated fadeIn');
    }, 2100);


    $(".error").hide();

    $(".button").click(function() {
        $('.error').hide();

        var name = $("input#Name").val();
        if (name == "" || name == "Name") {
            $("#name_error").show();
            $("input#Name").focus();
            return false;
        }
        var email = $("input#Email").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email == "" || email == "Email") {
            $("label#email_error").show();
            $("input#Email").focus();
            return false;
        } else if (!emailReg.test(email)) {
            $("label#email_validation_error").show();
            $("input#Email").focus();
            return false;
        }
        var subject = $("input#Subject").val();
        if (subject == "" || subject == "Subject") {
            $("label#subject_error").show();
            $("input#Subject").focus();
            return false;
        }

        var message = $("textarea#Message").val();
        if (message == "" || message == "Message") {
            $("label#message_error").show();
            $("textarea#Message").focus();
            return false;
        }

        $(".in, .button").fadeOut("slow");
        $("#stat").html("<img src=\"images/asynreq.gif\" alt=\"Loading\" /><span style=\"color:#c4982d\" >Attempting to send your email. Please standby..</span>");

        var dataString = $("form").serialize();
        //alert (dataString);return false;

        $.ajax({
            url: "include/process.php",
            type: "GET",
            data: dataString,
            // error:function(){
            //alert "error"
            //}
            cache: false,

            error: function() {

                $(".in, .button").fadeIn("slow");
                $("#stat").html("<img src=\"images/icon_cross_red.png\" alt=\"Sucess\" /> Something goes wrong. Please try again or mail me at nitesh.grep@gmail.com.");



            },

            success: function() {

                $(".in, .button").fadeIn("slow");
                $("#stat").html("<img src=\"images/icon_tick.png\" alt=\"Sucess\" /> <span style=\"color:green\" >Email successfully sent!</span>");

            }
        });

        return false;
    });
})
