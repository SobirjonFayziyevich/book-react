import { serviceApi } from "../../lib/config";


class MemberApiService{
    private readonly path: string;
    constructor() {
        this.path = serviceApi;
    }
}

export default MemberApiService;