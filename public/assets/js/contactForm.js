function ContactForm() {}

ContactForm._listeners = [];

ContactForm.addListener = function(listener) {
    ContactForm._listeners.push(listener);
}

ContactForm.removeListener = function(listener) {
    var index = ContactForm._listeners.indexOf(listener);
    if(index > -1) {
        array.splice(index, 1);
    }
}

ContactForm.init = function() {

    $(function() {

        $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
            preventSubmit: true,
            submitSuccess: function($form, event) {
                event.preventDefault(); // Prevent default submit behaviour
                // Get values from FORM
                var name = $("input#name").val();
                var email = $("input#email").val();
                var phone = $("input#phone").val();
                var message = $("textarea#message").val();
                var firstName = name.match(/\S+/g)[0]; // For Success Message

                // Notify listeners
                for(var i in ContactForm._listeners) {
                    ContactForm._listeners[i].onSubmitSuccess(firstName, name, email, phone, message);
                }

                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Thanks " + firstName + "! Your message has been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                // Clear all fields
                $('#contactForm').trigger("reset");
            },
            filter: function() {
                return $(this).is(":visible");
            },
        });

        $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    });

    // When clicking on Full hide success boxes
    $('#name').focus(function() {
        $('#success').html('');
    });

}
