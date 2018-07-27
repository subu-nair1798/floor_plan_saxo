import DateGenerator from 'random-date-generator';
import {Seat} from './models/Seat';
import {Employee} from './models/Employee';
import {Floor} from './models/Floor';
import {Bay} from './models/Bay';
import {save_data} from './utils/saveData';
import {save_plan, retrieve_plan} from './utils/Storage';
import {detailDom, addDom, hideDoms, createEditDom} from './utils/Dom';
// import {floorIdArray, bayIdArray, seatIdArray} from './utils/domIdGroup';
import {seatCoords} from './utils/seatCoords';


let emp_ar = [];
let floor_ar = [];
let bay_ar = [];
let seat_ar = [];
let edit_list = $('#edit_list');

// ---------- Search Event Variables ----------
let onload_flag = 0;
let fetchSeat_flag = 0;
let search_seat_query;

// ---------- Pin Offset vars ----------
let img_width;
let img_height;
let top_offset;
let left_offset;
let seatTop;
let seatLeft;

console.log("Inside Script : app.js");
render_plan(true)

// ---------- On-Click event Handlers ----------

$('.floorImgGroup').maphilight();
$('.mapArea').attr('data-maphilight','{"strokeColor":"000000", "strokeWidth":2, "fillColor":"ff0000", "fillOpacity":0.4}');

$('#docBody').click(function(event) {
  
  let id_ar = [];
  let target_div = event.target.id;
  if(seat_ar.map(s => s.seat_id).indexOf(target_div) >= 0) {

    let target_bay;
    let target_floor;
    id_ar.push(target_div);
    for(let i = 0; i < bay_ar.length; i++) {
      for(let j = 0; j < bay_ar[i].seat_ar.length; j++) {
        if(bay_ar[i].seat_ar[j] == target_div) {
          target_bay = bay_ar[i].bay_id;
          target_floor = bay_ar[i].bay_id.substr(0,2);
          break;
        }
      }
    }
    id_ar.push(target_bay);
    id_ar.push(target_floor);
    
  } else if(bay_ar.map(b => b.bay_id).indexOf(target_div) >= 0) {
    id_ar.push(target_div);
    id_ar.push(target_div.substr(0,2));
  }
  fetchDetail(id_ar);
})

$('.floor_info').click(function() {
  let id_ar =[];
  id_ar.push($(this).attr('id').substr(0,2));
  fetchDetail(id_ar);
})

$('.close').click(function() {
  $('.pop_div').css('display','none');
  $('.floor_group').css('display','none');
  render_plan();
})

$('#cancel_btn').click(function() {
  $('.pop_div').css('display','none');
  $('.floor_group').css('display','block');
  $('.bay_content').empty();
  $('.bay_range').empty();
  let id_ar = [];
  id_ar.push($('#bay_info').html());
  id_ar.push($('#floor_info').html())
  fetchDetail(id_ar);
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
    if(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#seat_input').val())].assignSeat($('#id_input').val(), emp_ar, seat_ar)){
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
        seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#to_input').val())].assignSeat(seat_ar[seat_ar.map(s => s.seat_id).indexOf($('#from_input').val())].emp_id, emp_ar);
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

// ---------- NavBar functions ----------

$('#floor5_toggle').click(function() {
  if($('#floor_5').css('display','none')) {
    $('#floor_5').css('display','block');
    $('#floor_6').css('display','none');
    hideDoms();
  }
  
})  

$('#floor6_toggle').click(function() {
  if($('#floor_6').css('display','none')) {
    $('#floor_6').css('display','block');
    $('#floor_5').css('display','none');
    hideDoms();
  }
})

$('#seat_search_btn').click(function() {
  let query_flag = 0;
  let seat_query = $('#seat_search_input').val();

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
      fetchSeat(seat_query);
      $('#seat_search_input').val("");
      query_flag = 0;
    } else {
      window.alert("Incorrect Seat ID");
      $('#seat_search_input').val("");
    }
  }
})

function fetchSeat(seat_query) {
  hideDoms();
  if(seat_query.substr(0,1) == '5') {
    $('#floor5_toggle').click();
  } else if (seat_query.substr(0,1) == '6') {
    $('#floor6_toggle').click();
  }
  for(let i in seatCoords) {
    if(seatCoords[i].seat_id == seat_query) {
      seatTop =  seatCoords[i].top;
      seatLeft = seatCoords[i].left;
      search_seat_query = seatCoords[i].seat_id;
      fetchSeat_flag = 1;
      markSeat(top_offset, left_offset, img_width, img_height);
      break;
    }
  }
}



$('#pin_img').click(function() {
  let query_ar = [];
  let query_bay;
  let query_floor;
  for(let i = 0; i < bay_ar.length; i++) {
    for(let j = 0; j < bay_ar[i].seat_ar.length; j++) {
      if(bay_ar[i].seat_ar[j] == search_seat_query) {
        query_bay = bay_ar[i].bay_id;
        query_floor = bay_ar[i].bay_id.substr(0,2);
        break;
      }
    }
  }
  query_ar.push(search_seat_query);
  query_ar.push(query_bay);
  query_ar.push(query_floor);
  fetchDetail(query_ar);
  query_ar = [];
  $('#pin_img').css('visibility','hidden');
  fetchSeat_flag = 0;
})

$('#emp_search_btn').click(function() {
  
  let emp_query = $('#emp_search_input').val();
  let query_flag = 0;
  let index;

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
      let seat_data = emp_ar[index].getSeat(seat_ar);
      if(seat_data == "null") {
        window.alert('No Seat Assigned to Employee: '+emp_query);
      } else {
        fetchSeat(seat_data);
      }
      $('#emp_search_input').val("");
      query_flag = 0;
    } else {
      window.alert("Incorrect Employee ID");
      $('#emp_search_input').val("");
    }
  }

})



// function change_higlight(mapId) {
//   let data = $('#'+mapId).mouseout().data('maphilight') || {};
//   data.alwaysOn = !data.alwaysOn;
//   $('#'+mapId).data('maphilight', data).trigger('alwaysOn.maphilight');
// }

// ---------- Function to fetch Detail of the target element and Create Dom Element ----------

function fetchDetail(id_ar = []) {
  let detail_obj;
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
      emp_data = emp_ar[emp_index].getEmpDetail();
    } else {
      emp_data = {
        emp_id: "null",
        emp_name: "null"
      }
    }
    detail_obj = seat_ar[index].getSeatDetail(emp_data, id_ar[1], id_ar[2]);

  } else if(id_ar.length == 2) {
    let index;
    for(let i in bay_ar) {
      if(bay_ar[i].bay_id == id_ar[0]) {
        index = i;
        break;
      }
    }
    detail_obj = bay_ar[index].getBayDetail(id_ar[1]);

  } else if(id_ar.length == 1) {
    let index;
    for(let i in floor_ar) {
      if(floor_ar[i].floor_id == id_ar[0]) {
        index = i;
        break;
      }
    }
    detail_obj = floor_ar[index].getFloorDetail();
  }
  detailDom(detail_obj, seat_ar);
}

// ---------- Render function to save the changes to DB and re-render DOM elements ----------

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
  $('.bay_content').empty();
  $('.bay_range').empty();
  hideDoms();
  $(":input").val("");
  edit_list.empty();

  console.log(floor_ar);
  console.log(bay_ar);
  console.log(seat_ar);
}

// ---------- Function Call to Handle Window ReSize ----------

$(window).resize(function () {
  $('.floorImgGroup').maphilight();
    if(onload_flag == 1) {
      img_width = $('#F5').width();
      img_height = $('#F5').height();
      let left_margin;
      if(parseFloat($('.container').css('marginLeft')) == 0) {
        left_margin = 15;
      } else {
        left_margin = 30;
      }
      top_offset = parseFloat($('.floorAreaGroup').css('marginTop')) + (parseFloat($('.floorArea').height()) - parseFloat($('.floorImgGroup').height()));
      left_offset = parseFloat($('.container').css('marginLeft')) + left_margin;
    }
    if(fetchSeat_flag == 1) {
      markSeat(top_offset, left_offset, img_width, img_height);
    }
})

function markSeat(top, left, width, height) {
  let pin_left = (seatLeft/2724)*width;
  let pin_top = (seatTop/1884)*height;
  $('#pin_img').css('visibility','visible');
  $('#pin_img').offset({top: -parseFloat((2048/2073)*60) + pin_top + top, left: -parseFloat((1079/2481)*60) + pin_left + left});
}
// ---------- Function to calculate Image CSS before Bootstrap ----------

setTimeout(function() {
    console.log("Plan Loaded.");
    img_width = $('#F5').width();
    img_height = $('#F5').height();
    let left_margin;
    if(parseFloat($('.container').css('marginLeft')) == 0) {
      left_margin = 15;
    } else {
      left_margin = 30;
    }
    top_offset = parseFloat($('.floorAreaGroup').css('marginTop')) + (parseFloat($('.floorArea').height()) - parseFloat($('.floorImgGroup').height()));
    left_offset = parseFloat($('.container').css('marginLeft')) + left_margin;
    onload_flag = 1;
}, 0)



$('img[usemap]').rwdImageMaps();