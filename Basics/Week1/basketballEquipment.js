function basketballEquipment(input) {
    let annualtTrainingFee = Number(input[0]);
    let priceDiffBetw = 0.4 * annualtTrainingFee;
    let sneakersPrice = annualtTrainingFee - priceDiffBetw;

    let priceDiffSneakersOutfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffSneakersOutfit;

    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let totalPrice = annualtTrainingFee + sneakersPrice + outfitPrice + accessoriesPrice + ballPrice;

    console.log(totalPrice);


}

basketballEquipment(["365"]);