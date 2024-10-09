import axios from "axios";
import assert from "assert";
import { Book } from "../../types/user";
import { Definer } from "../../lib/Definer";
import { SearchObj } from "../../types/others";
import { serverApi } from "../../lib/config";

class BookApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  async getTopCollections(): Promise<Book[]> {
    try {
      const url = "/books?order=random&page=1&limit=4",
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);
      console.log("state:::", result.data.state);

      const top_collections: Book[] = result.data.data;
      return top_collections;
    } catch (err: any) {
      console.log(`ERROR ::: getTopCollections ${err.message}`);
      throw err;
    }
  }

  async getBookshop(data: SearchObj): Promise<Book[]> {
    try {
      const url = `/books?order=${data.order}&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);
      console.log("state:::", result.data.state);

      const books: Book [] = result.data.data;
      return books;
    } catch (err: any) {
      console.log(`ERROR ::: getBookshop ${err.message}`);
      throw err;
    }
  }

  async getChosenBookshop(id: string) {
    try {
      const url = `/books/${id}`,
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", Definer.general_err1);
      console.log("state:::", result.data.state);

      const book: Book []  = result.data.data;
      return book;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenBookshop ${err.message}`);
      throw err;
    }
  }
}
export default BookApiService;
