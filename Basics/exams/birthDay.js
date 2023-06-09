function birthDay(input) {
    let room = Number(input[0]);
    let cake = 0.2 * room;
    let drinks = 0.55 * cake;
    let animator = (1 / 3) * room;
    
    let budget = room + cake + drinks + animator;
    console.log(budget);

}
birthDay([3720]);