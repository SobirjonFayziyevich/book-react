import { serverApi } from "../../lib/config"
import axios from "axios";
import assert from "assert";




class BookApiService {
    private readonly path: string;
    constructor() {
        this.path = serverApi;
    }

}
export default BookApiService;