import {get, post} from "@/request/request";

//获取所有板块
export const getAllCategory = (params) => get('/category/selectAllCategory',params)

//返回帖子列表然后进行分页展示
export const PostListByCategory = (param)=>post('/category/findPostByCategory',param)