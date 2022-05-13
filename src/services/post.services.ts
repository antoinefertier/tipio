import { AxiosResponse } from "axios";
import { PostDTO } from "../dto/post.dto";
import Axios from "./index";

export default {
    getPosts: (): Promise<AxiosResponse<PostDTO[]>> => {
        return Axios.get('/posts');
    },
}