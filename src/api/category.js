import instance from "./instance";

export const getAllCategory = () =>{
    const url = "/categories";
    return instance.get(url);
}

export const getProductCate = (id) =>{
    const url = `/category/${id}/products`;
    return instance.get(url);
}