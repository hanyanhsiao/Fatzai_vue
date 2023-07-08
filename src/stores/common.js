import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    // 初始狀態，使用箭頭函式

    state: () => {
        return { isMask: false }
    },
    // 修改狀態用的 function
    actions: {
        toggleMask() {
            this.isMask = !this.isMask
        }
    },
     // 可以先將資料處理好用傳出
    getters: {
    
  }
})

export const CartStore = defineStore('cart',{
    state:()=>({
        // items:[],
    }),
    actions: {
    addCartItem(itemObj) {

    let items =  this.getCartItem();

    // 若local有東西
    if (items) { 

        //1 找出已經存在的產品與選擇的產品做判斷(find回傳物件)
        let exist_item = items.find((localItemObj)=> localItemObj.id === itemObj.id)

        //2 找出不一樣的產品做判斷(fillter回傳陣列)
        let different_item = items.filter(function (local_item_obj) {
            if (local_item_obj.item_id != itemObj.item_id) {
                return true;
            }
        })
    
        //3 合併一樣的產品數量跟金額
        if (exist_item) {
            exist_item.num += itemObj.num;
            exist_item.total +=  itemObj.num *  itemObj.price;

            if (exist_item.num > 10) {
                alert("購物車商品已達上限10個")
                return;
            } else if (exist_item.num < 1) {
                alert("購物車商品最少1個")
                return;
            }

            //合併不一樣的產品和一樣的產品
            different_item.push(exist_item);
        }

        //4 沒有一樣的產品就把點擊到的加入
        else {
            itemObj.total = itemObj.num * itemObj.price;
            items.push(itemObj);  
        }
    }
    // 若local完全是空的 
    else {    
        itemObj.total =  itemObj.num *  itemObj.price;
        items = [itemObj];
    }
      //將 JavaScript 值轉換為 JSON 字符串，物件變字串存入
      localStorage.setItem("car", JSON.stringify(items));
    },
    getCartItem(){
    return JSON.parse(localStorage.getItem("car"));
    }
  },
});