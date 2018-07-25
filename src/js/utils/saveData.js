import {save_plan} from './Storage';

export function save_data () {
  let emp_ar = [
    {
      "emp_id": "5b307db490eaa3eba7272710",
      "emp_name": "Lilian Hartman"
    },
    {
      "emp_id": "5b307db423ea8a57d9d2a1f3",
      "emp_name": "Jami Yang"
    },
    {
      "emp_id": "5b307db4bf6986ee96cf25de",
      "emp_name": "Tami Farley"
    },
    {
      "emp_id": "5b307db4cb2261e0afdcf774",
      "emp_name": "Haney Rios"
    },
    {
      "emp_id": "5b307db468c9aeba5cc68b9a",
      "emp_name": "Murphy Weiss"
    },
    {
      "emp_id": "5b307db432df4b7699de7af0",
      "emp_name": "Ella Hopkins"
    },
    {
      "emp_id": "5b307db4886319db3c8402a8",
      "emp_name": "Adele Mccall"
    },
    {
      "emp_id": "5b307db41a9c127bc515dbc3",
      "emp_name": "Brooks Bird"
    },
    {
      "emp_id": "5b307db43cec9b1a80965809",
      "emp_name": "Shawn Peck"
    },
    {
      "emp_id": "5b307db4aae599374a4e1af3",
      "emp_name": "Aguirre Melendez"
    },
    {
      "emp_id": "5b307db42d6ed8543959e26d",
      "emp_name": "Jocelyn Wagner"
    },
    {
      "emp_id": "5b307db476443167447bcb47",
      "emp_name": "May Alston"
    },
    {
      "emp_id": "5b307db451bc5d011d574df5",
      "emp_name": "Robin Anderson"
    },
    {
      "emp_id": "5b307db48449080143385baf",
      "emp_name": "Pittman French"
    },
    {
      "emp_id": "5b307db4ba64c8bb1cfd4181",
      "emp_name": "Cindy Rocha"
    },
    {
      "emp_id": "5b307db46ec709f311ebb192",
      "emp_name": "Hayden Gillespie"
    },
    {
      "emp_id": "5b307db44c7f4bfc22faf619",
      "emp_name": "Lily Wade"
    },
    {
      "emp_id": "5b307db448131df642061de2",
      "emp_name": "Janna Vazquez"
    },
    {
      "emp_id": "5b307db47763741fb7699152",
      "emp_name": "Minnie Navarro"
    },
    {
      "emp_id": "5b307db452c09c49a4d0506f",
      "emp_name": "Lola Cannon"
    },
    {
      "emp_id": "5b307db4d69b39e2f007e5ae",
      "emp_name": "Kelley Melton"
    },
    {
      "emp_id": "5b307db4cc045b304fbe5fa3",
      "emp_name": "Shelley Harrison"
    },
    {
      "emp_id": "5b307db44f1bcd5ac4574968",
      "emp_name": "England Bishop"
    },
    {
      "emp_id": "5b307db41c33b15e49d15bec",
      "emp_name": "Grimes Kidd"
    },
    {
      "emp_id": "5b307db411776538bf7b2521",
      "emp_name": "Leah Hernandez"
    },
    {
      "emp_id": "5b307db47d805dcc4194d2b6",
      "emp_name": "Carole Aguirre"
    },
    {
      "emp_id": "5b307db43f57c8cb15d20f55",
      "emp_name": "Mcfadden Buchanan"
    },
    {
      "emp_id": "5b307db4dd9e6968af5fa34d",
      "emp_name": "Sheree Sparks"
    },
    {
      "emp_id": "5b307db475651e27cbc0575b",
      "emp_name": "Marion Mercado"
    },
    {
      "emp_id": "5b307db45214d83a7e79b2ef",
      "emp_name": "April Wise"
    }
  ]

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


