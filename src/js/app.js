import DateGenerator from 'random-date-generator';
import {Seat} from './models/Seat';
import {Employee} from './models/Employee';
import {Floor} from './models/Floor';
import {Bay} from './models/Bay';
import {save_data} from './utils/saveData';
import {save_plan, retrieve_plan} from './utils/Storage';
import {detailDom, traverseDom, addDom, hideDoms, createEditDom, searchDom, assignId} from './utils/Dom';
import {floorIdArray, bayIdArray, seatIdArray} from './utils/domIdGroup';


assignId(floorIdArray);
assignId(bayIdArray);
assignId(seatIdArray);

let emp_ar = [];
let floor_ar = [];
let bay_ar = [];
let seat_ar = [];
let edit_list = $('#edit_list');

console.log("Inside Script : app.js");
render_plan(true)

// ---------- On-Click event Handlers ----------

let docBody = document.getElementsByTagName('BODY')[0];

docBody.onclick = function(event) {
  
  let id_ar = [];
  let target_div = event.target.id;
  if(seat_ar.map(s => s.seat_id).indexOf(target_div) >= 0) {

      id_ar.push(event.target.id);
      id_ar.push(event.target.parentElement.id);
      id_ar.push(event.target.parentElement.parentElement.id);
      fetchDetail(id_ar);

  } else if(bay_ar.map(b => b.bay_id).indexOf(target_div) >= 0) {

    id_ar.push(event.target.id);
    id_ar.push(event.target.parentElement.id);
    fetchDetail(id_ar);

  } else if(floor_ar.map(f => f.floor_id).indexOf(target_div) >= 0) {

    id_ar.push(event.target.id);
    fetchDetail(id_ar);

  }
}

$('.close').click(function() {
  $('.pop_div').css('display','none');
  render_plan();
})

$('#add_btn').click(function() {
  if(seat_ar[seat_ar.map(s => s.seat_id).indexOf(document.getElementById('seat_info').innerHTML)].emp_id == "null") {
    addDom(document.getElementById('seat_info').innerHTML);
  } else {
    window.alert('Seat Occupied!');
    render_plan();
  }
}) 

$('#submit_add').click(function() {
  if(($("#seat_input").val() == "") || ($("#id_input").val() == "")) {
    window.alert("Please fill all input fields");
  } else {
    if(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#seat_input').val())].assignSeat(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#seat_input').val())], $('#id_input').val(), emp_ar)){
      render_plan();
    }
  }
})

$('#cancel_add').click(function() {
  $("#desk_input").val("");
  $("#id_input").val("");
  $("#add_content").css('display','none');
  $("#edit_content").css('display','none');
  $("#detail_content").css('display','block');
  $("#emp_search_content").css('display','none');
})

$('#delete_btn').click(function() {
  if(seat_ar[seat_ar.map(s => s.seat_id).indexOf(document.getElementById('seat_info').innerHTML)].emp_id == "null") {
    window.alert('Cannot unassign a vacant seat')
  } else {
    let confirm_delete = confirm("Are You Sure you want to unassign the following desk(s) ?");
    if(confirm_delete == true) {
      seat_ar[seat_ar.map(s => s.seat_id).indexOf(document.getElementById('seat_info').innerHTML)].unassignSeat(seat_ar.map(s => s.seat_id).indexOf(document.getElementById('seat_info').innerHTML), seat_ar);
      render_plan();
    }
  }

})

$('#edit_btn').click(function() {
  $('#edit_content').css('display','block');
  $('#detail_content').css('display','none');
  $('#add_content').css('display','none');
  $("#emp_search_content").css('display','none');
  let edit_list_item = createEditDom(document.getElementById('seat_info').innerHTML);
  edit_list.append(edit_list_item);
})

$('#submit_edit').click(function() {
  let edit_flag = 0;
  if(($("#to_input").val() == "") || ($("#from_input").val()== "")) {
    window.alert('Input field(s) empty');
  } else {
    for( let i in seat_ar) {
      if(seat_ar[i].seat_id == $('#to_input').val()) {
        edit_flag = 1;
        break;
      }
    }
    if(edit_flag == 1) {
      if($('#to_input').val() === $('#from_input').val()) {
        window.alert('Source and Destination seat are same!');
      } else if(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#to_input').val())].emp_id == "null") {
        seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#to_input').val())].assignSeat(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#to_input').val())], seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#from_input').val())].emp_id, emp_ar);
        seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#from_input').val())].unassignSeat(seat_ar.map(s => s.seat_id).indexOf($('#from_input').val()), seat_ar);
        render_plan();
      } else {
        window.alert('Destination Seat already occupied');
      }
      edit_flag = 0;
    } else {
      window.alert('Incorrect Seat ID');
    }
  }
  
})

$('#cancel_edit').click(function() {
  $("#from_input").val("");
  $("#to_input").val("");
  $("#add_content").css('display','none');
  $("#edit_content").css('display','none');
  $("#emp_search_content").css('display','none');
  $("#detail_content").css('display','block');
  edit_list.empty();
})

$('#seat_search_btn').click(function() {

  let seat_query = $('#seat_search_input').val();
  let query_flag = 0;
  let query_ar = [];

  if(seat_query == "") {
    window.alert("Query field empty");
  } else {
    for(let i in seat_ar) {
      if(seat_ar[i].seat_id == seat_query) {
        query_flag = 1;
        break;
      }
    }

    if(query_flag == 1) {
      query_ar.push(seat_query);
      query_ar.push($('#'+seat_query).parent().attr('id'))
      query_ar.push($('#'+seat_query).parent().parent().attr('id'))
      console.log(query_ar);
      fetchDetail(query_ar);

      query_flag = 0;
      query_ar = [];
      $('#seat_search_input').val("");
    } else {
      window.alert("Incorrect Seat ID");
      $('#seat_search_input').val("");
    }
  }
})

$('#emp_search_btn').click(function() {
  
  let emp_query = $('#emp_search_input').val();
  let query_flag = 0;
  let index;
  let emp_data;
  let seat_data;

  if(emp_query == "") {
    window.alert("Query field empty");
  } else {
    for(let i in emp_ar) {
      if(emp_ar[i].emp_id == emp_query) {
        index = i;
        query_flag = 1;
        break;
      }
    }
    if(query_flag == 1) {
      
      emp_data = emp_ar[index].getEmpDetail(emp_ar[index]);
      seat_data = emp_ar[index].getSeat(emp_ar[index], seat_ar);
      searchDom(emp_data, seat_data);
      query_flag = 0;
      $('#emp_search_input').val("");
      
    } else {
      window.alert("Incorrect Employee ID");
      $('#emp_search_input').val("");
    }
  }

})

$('#fetch_btn').click(function() {
  let fetch_ar = []
  let fetch_seat = $('#seat_search').html();
  if(fetch_seat == "null") {
    window.alert("No seat assigned to the Employee");
  } else {
    fetch_ar.push(fetch_seat);
    fetch_ar.push($('#'+fetch_seat).parent().attr('id'));
    fetch_ar.push($('#'+fetch_seat).parent().parent().attr('id'));

    fetchDetail(fetch_ar);
    fetch_ar = [];
  }
})

// ---------- Functions ----------

function fetchDetail(id_ar = []) {
  if(id_ar.length == 3) {
    let index;
    for(let i in seat_ar) {
      if(seat_ar[i].seat_id == id_ar[0]) {
        index = i;
        break;
      }
    }

    
    let emp_index = emp_ar.map(e => e.emp_id).indexOf(seat_ar[index].emp_id);
    let emp_data;
    if(emp_index >= 0) {
      emp_data = emp_ar[emp_index].getEmpDetail(emp_ar[emp_index]);
    } else {
      emp_data = {
        emp_id: "null",
        emp_name: "null"
      }
    }
    
    let detail_obj = seat_ar[index].getSeatDetail(seat_ar[index], emp_data);

    detailDom(detail_obj);

  } else if(id_ar.length == 2) {
    let index;
    for(let i in bay_ar) {
      if(bay_ar[i].bay_id == id_ar[0]) {
        index = i;
        break;
      }
    }
    let detail_obj = bay_ar[index].getBayDetail(bay_ar[index]);
    detailDom(detail_obj);

  } else if(id_ar.length == 1) {
    let index;
    for(let i in floor_ar) {
      if(floor_ar[i].floor_id == id_ar[0]) {
        index = i;
        break;
      }
    }
    let detail_obj = floor_ar[index].getFloorDetail(floor_ar[index]);
    detailDom(detail_obj);
  }
}

function render_plan(first_page_load = false) {

  if((localStorage.getItem("emp_ar") == null) || (localStorage.getItem("seat_ar") == null)) {
    save_data();
  }
  if(!first_page_load) {
    console.log("Not FPL");
    save_plan("emp_ar",emp_ar);
    save_plan("seat_ar",seat_ar);
    save_plan("bay_ar",bay_ar);
    save_plan("bay_ar",bay_ar);
  }
  let emp_plan = retrieve_plan("emp_ar");
  let floor_plan = retrieve_plan("floor_ar");
  let bay_plan = retrieve_plan("bay_ar");
  let seat_plan = retrieve_plan("seat_ar");

  for(let x = 0; x < emp_plan.length; x++) {
    emp_ar[x] = new Employee(emp_plan[x].emp_id, emp_plan[x].emp_name);
  }
  console.log(emp_ar);
  
  for(let i = 0; i < floor_plan.length; i++) {
    floor_ar[i] = new Floor(floor_plan[i].floor_id, floor_plan[i].bay_ar);
  }

  for(let i = 0; i < bay_plan.length; i++) {
    bay_ar[i] = new Bay(bay_plan[i].bay_id, bay_plan[i].seat_ar);
  }
 
  for(let i = 0; i < seat_plan.length; i++) {
    if(seat_plan[i].emp_id == "null") {
      seat_ar[i] = new Seat(seat_plan[i].seat_id, seat_plan[i].emp_id, "null")
    } else {
      seat_ar[i] = new Seat(seat_plan[i].seat_id, seat_plan[i].emp_id, DateGenerator.getRandomDate())
    }
  }

  traverseDom(seat_ar)
  hideDoms();
  $(":input").val("");
  edit_list.empty();

  console.log(floor_ar);
  console.log(bay_ar);
  console.log(seat_ar);
}