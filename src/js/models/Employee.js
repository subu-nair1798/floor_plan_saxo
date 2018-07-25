export class Employee {
    constructor(emp_id, emp_name) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
    }

    getEmpDetail() {
        let emp_data = {
            emp_id: this.emp_id,
            emp_name: this.emp_name
        }
        return emp_data;
    }

    getSeat(seat_ar = []) {
        let seat_flag = 0;
        let seat_data;

        for(let i in seat_ar) {
            if(seat_ar[i].emp_id == this.emp_id) {
            seat_flag = 1;
            break;
            }
        }
        if(seat_flag == 1) {
            seat_data = seat_ar[seat_ar.map(s => s.emp_id).indexOf(this.emp_id)].seat_id;
            seat_flag = 0;
        } else {
            seat_data = "null";
        }
        return seat_data;
    }
}