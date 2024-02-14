import axios from "axios";
import assert from "assert";
import { Book } from "../../types/user";
import { Definer } from "../../lib/Definer";
import { SearchObj } from "../../types/others";
import { serviceApi } from "../../lib/config";

class BookApiService {
  private readonly path: string;
  constructor() {
    this.path = serviceApi;
  }
  async getTopCollections(): Promise<Book[]> {
    try {
      const url = "/books?order=top&page=1&limit=4", // postmandagi getBookshopni URLi.
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result, Definer.general_err1);
      // assert.ok(result?.data.state !== "fail", Definer.general_err1);

      console.log("state:::", result.data.state);
      const top_books: Book[] = result.data.data; //toprestaurantsni type: interface Restaurant bulayopti,
      // resultni ichidan kelayotgan datani ichidagi data; resultni ichidagi data axios bn keladi, 2chi data backendda hosil qilingan data.
      return top_books;
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
      const books: Book[] = result.data.data;
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

      const book: Book[] = result.data.data; //toprestaurantsni type: interface Restaurant bulayopti,
      // resultni ichidan kelayotgan datani ichidagi data; resultni ichidagi data axios bn keladi, 2chi data backendda hosil qilingan data.
      return book;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenBookshop ${err.message}`);
      throw err;
    }
  }
}
export default BookApiService;
