import { serverApi } from "../../lib/config";


class MemberApiService{
    private readonly path: string;
    constructor() {
        this.path = serverApi;
    }
}

export default MemberApiService;