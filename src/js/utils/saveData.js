import {save_plan} from './Storage';

export function save_data () {
  
  let emp_ar = require('./emp_details.json');
  // $.getJSON('emp_details.json', function(data) {
  //   console.log(data);
  //   emp_ar = data;
  // });

  let floor_ar = [];
  for(let i = 0; i < 2; i++) {
    let bay_ar = []; 
    for(let j = 0; j < 16; j++) {
      if(j < 9) {
        bay_ar[j] = "F"+parseInt(i+5)+"-B0"+parseInt(j+1);
      } else {
        bay_ar[j] = "F"+parseInt(i+5)+"-B"+parseInt(j+1);
      }
    }
    floor_ar.push({
        floor_id: "F"+parseInt(i+5),
        bay_ar: bay_ar
    })
  }

  let bay_ar = [];
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 16; j++) {
      bay_ar.push({
        bay_id: floor_ar[i].bay_ar[j],
        seat_ar: seat_ar = []
      })
    }
  }

  for(let i = 1; i <= 9; i++) {
    bay_ar[0].seat_ar.push(bay_ar[0].bay_id.substr(1,1)+".00"+i);
  }
  for(let i = 10; i <= 23; i++) {
    bay_ar[1].seat_ar.push(bay_ar[1].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 24; i <= 49; i++) {
    bay_ar[2].seat_ar.push(bay_ar[2].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 50; i <= 76; i++) {
    bay_ar[3].seat_ar.push(bay_ar[3].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 78; i <= 89; i++) {
    bay_ar[3].seat_ar.push(bay_ar[3].bay_id.substr(1,1)+".0"+i);
  }

  let seat_ar = [];

  for(let j = 0; j < 4; j++) {
    for(let k = 0; k < bay_ar[j].seat_ar.length; k++) {
      seat_ar.push({
        seat_id: bay_ar[j].seat_ar[k],
        emp_id: "null",
        assign_date: "null"
      })
    }
  }

  console.log(emp_ar)
  console.log(floor_ar);
  console.log(bay_ar);
  console.log(seat_ar)

  save_plan("floor_ar", floor_ar);  
  save_plan("bay_ar", bay_ar);
  save_plan("seat_ar", seat_ar);
  save_plan("emp_ar", emp_ar);
  console.log("Data saved in Local Storage");
}


