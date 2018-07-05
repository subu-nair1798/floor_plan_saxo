export class Bay {
    constructor(bay_id, seat_ar = []) {
        this.bay_id = bay_id;
        this.seat_ar = seat_ar;
    }

    getBayDetail (bay_obj = {}) {

        let detail_obj = {
            bay_id: bay_obj.bay_id,
            floor_id: $('#'+bay_obj.bay_id).parent().attr('id'),
            seat_ar: bay_obj.seat_ar
        }
        return detail_obj;
    }
}