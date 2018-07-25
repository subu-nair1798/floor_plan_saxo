export class Floor {
    constructor(floor_id, bay_ar = []) {
        this.floor_id = floor_id;
        this.bay_ar = bay_ar;
    }

    getFloorDetail() {
        let detail_obj = {
            floor_id: this.floor_id,
            bay_ar: this.bay_ar
        }
        return detail_obj;
    }
}