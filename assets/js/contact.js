$(document).ready(function () {

    (function ($) {
        "use strict";

        // Custom validation (optional - you can remove if not needed)
        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value);
        }, "Please enter the correct answer.");

        // Validate contact form
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Name must be at least 2 characters long."
                },
                subject: {
                    required: "Please enter a subject",
                    minlength: "Subject must be at least 4 characters long."
                },
                number: {
                    required: "Please enter your phone number",
                    minlength: "Phone number must be at least 5 digits."
                },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address."
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Message must be at least 10 characters long."
                }
            },

            // Styling for errors (makes it look premium)
            errorElement: "span",
            errorClass: "text-danger",
            highlight: function (element) {
                $(element).addClass("is-invalid");
            },
            unhighlight: function (element) {
                $(element).removeClass("is-invalid");
            },

            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "contact_process.php",
                    success: function () {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo("slow", 1, function () {
                            $('#success').fadeIn();
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                        });
                    },
                    error: function () {
                        $('#contactForm').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                            $('.modal').modal('hide');
                            $('#error').modal('show');
                        });
                    }
                });
            }
        });

    })(jQuery);

});