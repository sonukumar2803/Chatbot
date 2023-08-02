function getBotResponse(input) {

    if (input == "apply admission") {
        return  "go to our official website";
    } else if (input == "geu full form") {
        return "Graphic Era University";
    } else if (input == "where are located") {
        return "We are on Celement Town, Dehradun, Uttrakhand";
    }else if (input == "what branches do you provide"){
        return "we provided namely five braches they are CSE,ECE,EEE,MECH,CIVIL";
    }else if (input == "hod of cse department") {
        return "Dr Devesh Pratap Singh";
    }

    if (input == "hi") {
        return "hello there";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else {
        return "Sorry I did not understand your question ";
    }
}