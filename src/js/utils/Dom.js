export function detailDom(detail_obj = {}) {
    
    if(Object.keys(detail_obj).length == 6) {
        $('.pop_div').css('display','block');
        $('#detail_content').css('display','block');
        $('#add_content').css('display','none');
        $('#edit_content').css('display','none');
        // $('#emp_search_content').css('display','none');
        $('.floor_group').css('display','none');
        $('.bay_group').css('display','none');
        $('#cancel_btn').css('display','inline');

        let floor_info = document.getElementById('floor_info');
        floor_info.innerHTML = detail_obj.floor_id;
        let bay_info = document.getElementById('bay_info');
        bay_info.innerHTML = detail_obj.bay_id;
        let seat_info = document.getElementById('seat_info');
        seat_info.innerHTML = detail_obj.seat_id;
        let name_info = document.getElementById('name_info');
        name_info.innerHTML = detail_obj.emp_name;
        let id_info = document.getElementById('id_info');
        id_info.innerHTML = detail_obj.emp_id;
        let start_info = document.getElementById('start_info');
        start_info.innerHTML = detail_obj.start_date
        let vacant_desk = document.getElementById('vacant_desk');
        vacant_desk.innerHTML = "Vacant Desk";

        if(detail_obj.emp_name != "null") {
            $('#info_1').css('display','block');
            $('#info_2').css('display','block');
            $('#info_3').css('display','block');
            $('#info_4').css('display','block');
            $('#info_5').css('display','block');
            $('#info_6').css('display','block');
            $('#info_7').css('display','none');
            $('#add_btn').css('display','none');
            $('#edit_btn').css('display','inline');
            $('#delete_btn').css('display','inline');
        } else {
            $('#info_1').css('display','block');
            $('#info_2').css('display','block');
            $('#info_3').css('display','block');
            $('#info_4').css('display','none');
            $('#info_5').css('display','none');
            $('#info_6').css('display','none');
            $('#info_7').css('display','block');
            $('#add_btn').css('display','inline');
            $('#edit_btn').css('display','none');
            $('#delete_btn').css('display','none');

        }
    } else if(Object.keys(detail_obj).length == 3) {
        
        $('.pop_div').css('display','none');
        $('.pop_content').css('display','none')
        $('.floor_group').css('display','block');
        $('#'+detail_obj.bay_id).css('display','block')

    } else if(Object.keys(detail_obj).length == 2) {
        
        $('.pop_div').css('display','block');
        $('#detail_content').css('display','block');
        $('#add_content').css('display','none');
        $('#edit_content').css('display','none');
        // $("#emp_search_content").css('display','none');
        $('.floor_group').css('display','none');
        $('.bay_group').css('display','none');

        let floor_info = document.getElementById('floor_info');
        floor_info.innerHTML = detail_obj.floor_id;
        let bay_info = document.getElementById('bay_info');
        bay_info.innerHTML = detail_obj.bay_ar;

        $('#info_1').css('display','block');
        $('#info_2').css('display','block');
        $('#info_3').css('display','none');
        $('#info_4').css('display','none');
        $('#info_5').css('display','none');
        $('#info_6').css('display','none');
        $('#info_7').css('display','none');
        $('#add_btn').css('display','none');
        $('#edit_btn').css('display','none');
        $('#delete_btn').css('display','none');
        $('#cancel_btn').css('display','none');
    }
}

export function traverseDom(seat_ar = []) {
    for(let i in seat_ar) {
        if(seat_ar[i].emp_id == "null") {
            $('#'+seat_ar[i].seat_id).css("background","green");
        } else {
            $('#'+seat_ar[i].seat_id).css("background","red");  
        }
    }  
}

export function addDom(seat_id) {
    $('.floor_group').css('display','none');
    $('.bay_group').css('display','none');
    $('#detail_content').css('display','none');
    $('#add_content').css('display','block');
    $('#edit_content').css('display','none');
    $('#seat_input').val(seat_id);
}

export function hideDoms() {
    $('.pop_div').css('display','none');
    $('.pop_content').css('display','none');
    $('.floor_group').css('display','none');
    $('.bay_group').css('display','none');
}

export function createEditDom(seat_id) {

    let edit_list_item = $('<li class="list-group-item list-group-item-dark"></li>');
    let content_div = $('<div class="row"></div>');

    let from_text = $('<div class="col-2"><h4>From : </h4></div>');
    let from_div = $('<div class="col-3 text-center"></div>');
    let from_input = $('<input type="text" class="form-control text-center" id="from_input"></input>');
    from_input.val(seat_id);

    let to_text = $('<div class="col-2"><h4> To : </h4></div>');
    let to_div = $('<div class="col-3 text-center"></div>');
    let to_input = $('<input type="text" class="form-control text-center" id="to_input"></input>');

    content_div.append(from_text).append(from_div.append(from_input)).append(to_text).append(to_div.append(to_input));
    edit_list_item.append(content_div);

    return edit_list_item;
}

export function assignId(idArray = []) {
    for(let i = 0; i < document.getElementsByClassName(idArray[0]).length; i++) {
        document.getElementsByClassName(idArray[0])[i].setAttribute("id", idArray[parseInt(i+1)]);
    }
}

// export function searchDom(emp_data = {}, seat_data) {
//     $('.pop_div').css('display','block');
//     $('#detail_content').css('display','none');
//     $('#add_content').css('display','none');
//     $('#edit_content').css('display','none');
//     $("#emp_search_content").css('display','block');
//     $('.floor_group').css('display','none');
//     $('.bay_group').css('display','none');

//     $('#name_search').html(emp_data.emp_name);
//     $('#id_search').html(emp_data.emp_id);
//     $('#seat_search').html(seat_data);

//     $('#search_1').css('display','block');
//     $('#search_2').css('display','block');
//     $('#search_3').css('display','block');
//     $('#fetch_btn').css('display','block');
// }