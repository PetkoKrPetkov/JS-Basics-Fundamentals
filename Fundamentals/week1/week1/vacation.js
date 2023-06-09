function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let totalPrice = 0;

    switch (dayOfTheWeek) {
        case "Friday":
            switch (typeOfTheGroup) {
                case "Students":
                    totalPrice = groupOfPeople * 8.45;
                    if(groupOfPeople >= 30) {
                        totalPrice *= 0.85;
                    }
                break;
                case "Business":
                    totalPrice = groupOfPeople * 10.9;
                    if(groupOfPeople >= 100) {
                        totalPrice = (groupOfPeople - 10) * 10.9;
                    }
                break;
                case "Regular":
                    totalPrice = groupOfPeople * 15;
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice *= 0.95;
                    }
                break;
            }
        break;
        case "Saturday":
            switch (typeOfTheGroup) {
                case "Students":
                    totalPrice = groupOfPeople * 9.8;
                    if(groupOfPeople >= 30) {
                        totalPrice *= 0.85;
                    }
                break;
                case "Business":
                    totalPrice = groupOfPeople * 15.6;
                    if(groupOfPeople >= 100) {
                        groupOfPeople = groupOfPeople - 10;
                        totalPrice = groupOfPeople * 10.9;
                    }
                break;
                case "Regular":
                    totalPrice = groupOfPeople * 20;
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice *= 0.95;
                    }
                break;
            }
        break;
        case "Sunday":
            switch (typeOfTheGroup) {
                case "Students":
                    totalPrice = groupOfPeople * 10.46;
                    if(groupOfPeople >= 30) {
                        totalPrice *= 0.85;
                    }
                break;
                case "Business":
                    totalPrice = groupOfPeople * 16;
                    if(groupOfPeople >= 100) {
                        totalPrice = (groupOfPeople - 10) * 10.9;
                    }
                break;
                case "Regular":
                    totalPrice = groupOfPeople * 22.5;
                    if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                        totalPrice *= 0.95;
                    }
                break;
            }
        break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30, "Students", "Sunday")