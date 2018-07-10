export class Seat {
    constructor(seat_id, emp_id, assign_date) {
        this.seat_id = seat_id;
        this.emp_id = emp_id;
        this.assign_date = assign_date;
    }

    getSeatDetail(seat_obj = {}, emp_data = {}) {

        let detail_obj = {
            floor_id: $('#'+seat_obj.seat_id).parent().parent().parent().attr('id'),
            bay_id: $('#'+seat_obj.seat_id).parent().parent().attr('id'),
            seat_id: seat_obj.seat_id,
            emp_id: seat_obj.emp_id,
            emp_name: emp_data.emp_name,
            start_date: seat_obj.assign_date
        }

        return detail_obj;
    }

    assignSeat(seat_obj = {}, input_id, emp_ar = []) {
        let temp_id = "null";
        for(let i in emp_ar) {
            if(emp_ar[i].emp_id == input_id) {
                temp_id = emp_ar[i].emp_id;
                break;
            }
        }
        if(temp_id == "null") {
            window.alert("Incorrect Employee ID");
            return false;
        } else {
            seat_obj.emp_id = temp_id;
            seat_obj.assign_date = new Date();
            return true;
        }

    }

    unassignSeat(seat_index, seat_ar = []) {
        seat_ar[seat_index].emp_id = "null";
        seat_ar[seat_index].assign_date = "null";
    }
}