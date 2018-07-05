export function retrieve_plan (arg_str) {
    let saved_plan = localStorage.getItem(arg_str);
    if(saved_plan) {
        return JSON.parse(saved_plan);
    } else {
        console.log("Array not present in LocalStorage");
    }
}

export function save_plan(arg_str, arg_ar = []) {
    localStorage.setItem(arg_str,JSON.stringify(arg_ar));
}
