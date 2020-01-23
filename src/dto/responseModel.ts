export class ResponseModel<T>{
    public isValid: boolean; //if we get response it is true, error than false
    public data: T;
    public errors: any;

    constructor(isValid: boolean, data: any, errors: any) {

        this.isValid = isValid;
        this.data = data;
        this.errors = errors;
    }

    public static getValidResponse<T>(data: T):ResponseModel<T> {
        return new ResponseModel(true, data, null)
    }

    public static getInvalidResponse<T>(errors: any):ResponseModel<T> {
        return new ResponseModel(false, null, errors)
    }
}