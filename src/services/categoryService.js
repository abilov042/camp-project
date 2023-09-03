import axios from "axios";

export class CategoryService{
    getCategory(){

        return axios.get("http://localhost:8080/api/categories/getAll")
    }
}