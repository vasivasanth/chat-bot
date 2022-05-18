function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    //introducing myself
    if (input == "what is your name?") {
        return "myself spiker";
    } else if (input == "where are you from?") {
        return "i am from walajabad";
    } else if (input == "what's your hobby?") {
        return "playing volleyball";
    } else if (input == "who is your best friend") {
        return "Vanmathi..."
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}