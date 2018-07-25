export class Bay {
    constructor(bay_id, seat_ar = []) {
        this.bay_id = bay_id;
        this.seat_ar = seat_ar;
    }

    getBayDetail (floor_id) {

        let detail_obj = {
            bay_id: this.bay_id,
            floor_id: floor_id,
            seat_ar: this.seat_ar
        }
        return detail_obj;
    }
}