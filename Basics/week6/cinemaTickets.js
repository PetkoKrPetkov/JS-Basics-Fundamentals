function cinemaTickets(arr) {
    let index = 0;

    let command = arr[index];
    index++;

    let studentTickets = 0;
    let kidsTickets = 0;
    let standartTickets = 0;

    while(command !== "Finish") {
        let movieName = command;
        let ticketsAvaible = Number(arr[index]);
        index++;
        let ticketsSold = 0;

        let command1 = arr[index];
        index++;
        let curMovieTicketsSold = 0;

        while(command1 !== "End") {
            
            let ticketType = command1;
            ticketsSold++;
            curMovieTicketsSold++;
            switch(ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standartTickets++;
                    break;
                case "kid":
                    kidsTickets++;
                    break;
            }
            
            if(curMovieTicketsSold === ticketsAvaible) {
                break;
            }
            command1 = arr[index];
            index++;
        }

        let percentageFull = (ticketsSold / ticketsAvaible) * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`)
        command = arr[index];
        index++;
    }

    let totalTickets = studentTickets + kidsTickets + standartTickets;
    let perKidTick = (kidsTickets / totalTickets) * 100;
    let perStudentTick = (studentTickets / totalTickets) * 100;
    let perStandartTick = (standartTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${perStudentTick.toFixed(2)}% student tickets.`);
    console.log(`${perStandartTick.toFixed(2)}% standard tickets.`);
    console.log(`${perKidTick.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
