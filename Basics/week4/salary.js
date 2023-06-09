function salary(arr) {
    let tabsOpen = Number(arr[0]);
    let salary = Number(arr[1]);

    for( let i = 2; i <= tabsOpen +1; i++) {
        let nameOfTab = arr[i];
        switch(nameOfTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        } 
    }
    if(salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary)
    }

}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
