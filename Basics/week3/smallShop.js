function smallShop(arr) {
    let product = arr[0];
    let city = arr[1];
    let quantity = Number(arr[2]);
    let price = 0;
    
    if (city = "Sofia") {
            switch(product) {
                case"coffee":
                    price = quantity * 0.50;
                    break;
                case"water":
                    price = quantity * 0.80;
                    break;
                case"beer":
                    price = quantity * 1.20;
                    break;
                case"sweets":
                    price = quantity * 1.45;
                    break;
                case"peanuts":
                    price = quantity * 1.60;
                    break;
                }
    } else if (city = "Plovdiv") {
            switch(product) {
                case"coffee":
                    price = quantity * 0.40;
                    break;
                case"water":
                    price = quantity * 0.70;
                    break;
                case"beer":
                    price = quantity * 1.15;
                    break;
                case"sweets":
                    price = quantity * 1.30;
                    break;
                case"peanuts":
                    price = quantity * 1.50;
                    break;
                }
        } else if (city = "Varna") {
                switch(product) {
                    case"coffee":
                        price = quantity * 0.45;
                        break;
                    case"water":
                        price = quantity * 0.7;
                        break;
                    case"beer":
                        price = quantity * 1.1;
                        break;
                    case"sweets":
                        price = quantity * 1.35;
                        break;
                    case"peanuts":
                        price = 1.55;
                        break;
                    }
    }
    console.log(price);
}
smallShop(["sweets",
"Sofia",
"2.23"])
