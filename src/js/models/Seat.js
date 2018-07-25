export class Seat {
    constructor(seat_id, emp_id, assign_date) {
        this.seat_id = seat_id;
        this.emp_id = emp_id;
        this.assign_date = assign_date;
    }

    getSeatDetail(emp_data = {}, bay_id, floor_id) {

        let detail_obj = {
            floor_id: floor_id,
            bay_id: bay_id,
            seat_id: this.seat_id,
            emp_id: this.emp_id,
            emp_name: emp_data.emp_name,
            start_date: this.assign_date
        }

        return detail_obj;
    }

    assignSeat(input_id, emp_ar = [], seat_ar = []) {
        let temp_id = "null";
        for(let i in emp_ar) {
            if(emp_ar[i].emp_id == input_id) {
                temp_id = emp_ar[i].emp_id;
                break;
            }
        }
        for(let i in seat_ar) {
            if(seat_ar[i].emp_id == temp_id) {
                window.alert("Employee: " + temp_id + " already assigned to Seat: " + seat_ar[i].seat_id);
                return false;
            }
        }
        if(temp_id == "null") {
            window.alert("Incorrect Employee ID");
            return false;
        } else {
            this.emp_id = temp_id;
            this.assign_date = new Date();
            return true;
        }

    }

    unassignSeat(seat_index, seat_ar = []) {
        seat_ar[seat_index].emp_id = "null";
        seat_ar[seat_index].assign_date = "null";
    }
}