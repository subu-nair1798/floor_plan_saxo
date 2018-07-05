export class Floor {
    constructor(floor_id, bay_ar = []) {
        this.floor_id = floor_id;
        this.bay_ar = bay_ar;
    }

    getFloorDetail(floor_obj = {}) {
        let detail_obj = {
            floor_id: floor_obj.floor_id,
            bay_ar: floor_obj.bay_ar
        }
        return detail_obj;
    }
}