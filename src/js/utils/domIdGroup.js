export let floorIdArray = [];
floorIdArray.push("floor_group");
for(let i = 1; i <=2; i++) {
    floorIdArray.push("F"+i);
}

export let bayIdArray = [];
bayIdArray.push("bay_group");
for(let i = 1; i < floorIdArray.length; i++) {
    for(let j = 1; j <= 3; j++) {
        bayIdArray.push(floorIdArray[i]+"-B"+j);
    }
}

export let seatIdArray = [];
seatIdArray.push("seat_group")
for(let i = 1; i < bayIdArray.length; i++) {
    for(let j = 1; j <= 2; j++) {
        seatIdArray.push(bayIdArray[i]+"-S"+j);
    }
}
