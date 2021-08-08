export const Storage = {
    set:(item,data)=>{
         localStorage.setItem(item,JSON.stringify(data))
    },
    get:(item)=>{
         return JSON.parse(localStorage.getItem(item))
    }
 }