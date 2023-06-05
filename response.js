function getBotResponse(input) {


    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "how can I join an event?" || input == "event") {
        return "On the home page, scroll through the list of events to choose. Click on the details, RSVP, enter the number of guests you are bringing, and confirm. You are good to go and have fun!";
    } else if (input == "what is the age limit for the events?" || input == "limit") {
        return "The age limit for events may vary. Please check the event details or contact the event organizer for specific age restrictions.";
    } else if (input == "how do I create an account?"|| input == "account") {
        return "To create an account, go to the registration page and fill out the required information such as your name, email, and password. Once submitted, your account will be created.";
    } else if (input == "how can I reset my password?"|| input == "password") {
        return "If you forgot your password, you can click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password.";
    } else if (input == "can I bring my pet to the event?"|| input == "pet") {
        return "The policy regarding pets at events may vary. Please check the event details or contact the event organizer to inquire about their pet policy.";
    } else if (input == "what is the dress code for the events?"|| input == "dress code") {
        return "The dress code for events can vary depending on the nature of the event. It is usually mentioned in the event details. If not specified, smart casual attire is generally a safe choice.";
    } else if (input == "how can I contact the event organizer?"|| input == "contact organizer" || input == "organizer") {
        return "To contact the event organizer, look for their contact information in the event details page or visit the organizer's website for their contact information.";
    } else if (input == "are there any discounts available for the events?"|| input == "discount") {
        return "Discounts for events are offered at the discretion of the event organizer. Check the event details or promotional materials to see if any discounts are available or contact the organizer directly.";
    } else if (input == "how can I cancel my event RSVP?"|| input == "cancel") {
        return "To cancel your event RSVP, go to your account settings or event details page and look for the option to cancel or unregister from the event. Follow the provided instructions to complete the cancellation.";
    } else if (input == "can I transfer my ticket to someone else?"|| input == "transfer") {
        return "The ticket transfer policy may vary depending on the event and organizer. Check the event details or contact the organizer to inquire about their ticket transfer policy.";
    } else if (input == "how can I get a refund for my event ticket?"|| input == "refund") {
        return "Refund policies for event tickets are determined by the event organizer. Check the event details or contact the organizer to inquire about their refund policy.";
    } else if (input == "what payment methods are accepted for event tickets?"|| input == "payment") {
        return "Accepted payment methods for event tickets can vary. Commonly accepted payment methods include credit/debit cards, online payment platforms, or event-specific payment systems. Check the event booking or ticketing page for available payment options.";
    } else if (input == "what is the duration of the event?"|| input == "duration") {
        return "The duration of an event can vary depending on the type and nature of the event. Check the event details or schedule for information regarding the duration.";
    } else if (input == "is there parking available at the event venue?"|| input == "parking") {
        return "Parking availability and arrangements can vary depending on the event venue. Check the event details or contact the event organizer for information regarding parking facilities.";
    } else if (input == "what is the refund policy for event tickets?" || input == "policy") {
        return "Refund policies for event tickets are determined by the event organizer. Check the event details or contact the organizer to inquire about their specific refund policy.";
    } else if (input == "how can I volunteer for the event?"|| input == "volunteer") {
        return "To volunteer for an event, reach out to the event organizer or visit the event website for volunteer opportunities. They will provide you with further instructions on how to get involved.";
    } else if (input == "are outside food and drinks allowed at the event?"|| input == "food") {
        return "The policy regarding outside food and drinks at events can vary. Check the event details or contact the event organizer to inquire about their policy on bringing outside food and drinks.";
    } else if (input == "thank you") {
        return "You're welcome! I'm glad I could help. If you have any more questions, feel free to ask!";
    }  else if (input == "thx") {
        return "You're welcome! I'm glad I could help. If you have any more questions, feel free to ask!";
    } else {
        return "I'm sorry, I couldn't understand your question. Please try asking something else!";
    }
    
    
    
}