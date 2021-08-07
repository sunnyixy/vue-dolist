export const Storage = {
    set:(item,data)=>{
         localStorage.setItem(item,data)
    },
    get:(item)=>{
         return localStorage.getItem(item)
    }
 }