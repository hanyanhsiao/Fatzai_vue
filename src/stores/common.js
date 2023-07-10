import { defineStore } from 'pinia'
// import { getProducts, IProduct } from "../api/shop";


// 遮罩
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

// 加入購物車、顯示購物車
export const CartStore = defineStore('cart',{
    state:()=>({
        // items:[],
    }),
    actions: {
    addCartItem(itemObj) {

    let items =  this.getCartItem();

    // 生成唯一键，使用商品的ID和尺寸
    let uniqueKey = itemObj.id+ '_'+ itemObj.size;

    // 若local有東西
    if (items) { 

        //1 找出已經存在產品 與 選擇的產品 的唯一鍵做判斷(find回傳物件)
        let exist_item = items.find((localItemObj)=> localItemObj.key === uniqueKey)

        //2 找出不一樣的產品做判斷(fillter回傳陣列)
        let different_item = items.filter(function (local_item_obj) {
            if (local_item_obj.item_id != itemObj.item_id) {
                return true;
            }
        })
    
        //3 合併一樣的產品數量跟金額
        if (exist_item) {
            exist_item.num += itemObj.num;
            exist_item.total +=  itemObj.num * itemObj.price;

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
            // itemObj.total = itemObj.num * itemObj.price;
            // items.push(itemObj);  
            let newCartItem = {
                key: uniqueKey,
                id: itemObj.id,
                name:itemObj.name,
                chineseName:itemObj.chineseName,
                size: itemObj.size,
                num: itemObj.num,
                price: itemObj.price,
                total: itemObj.num * itemObj.price,
                cover:itemObj.cover,
                image:itemObj.image
              };
              items.push(newCartItem);
        }
    }
    // 若local完全是空的 
    else {    
        // itemObj.total =  itemObj.num *  itemObj.price;
        // items = [itemObj];
        items = [
            {
                key: uniqueKey,
                id: itemObj.id,
                name:itemObj.name,
                chineseName:itemObj.chineseName,
                size: itemObj.size,
                num: itemObj.num,
                price: itemObj.price,
                total: itemObj.num * itemObj.price,
                cover:itemObj.cover,
                image:itemObj.image
            }
          ];
    }
      //將 JavaScript 值轉換為 JSON 字符串，物件變字串存入
      localStorage.setItem("car", JSON.stringify(items));
    },

    getCartItem(){
    return JSON.parse(localStorage.getItem("car"));
    }
  },
});

// 顯示商品列表
export const useProductsStore = defineStore("products", {
    state: () => {
      return {
        // all: [] as IProduct[], // 所有商品列表
        totalItems : [
            {
                id: 'SeasonItems',
                name: '季節限定',
                items: [
                    {
                        id: 1,
                        name: 'Strawberry Tart',
                        chineseName: '草莓塔',
                        size:['圓塔'],
                        price: 250,
                        cover: 'src/assets/image/items/tart10.jpg',
                        image: []
                    },
                    {
                        id: 2,
                        name: 'Strawberry Pistache Tart',
                        chineseName: '草莓開心果塔',
                        size:['圓塔'],
                        price: 200,
                        cover: 'src/assets/image/items/tart9.jpg',
                        image: []
                    },
                    {
                        id: 3,
                        name: 'Strawberry Cup Cake',
                        chineseName: '草莓杯子蛋糕',
                        size:['尺寸固定'],
                        price: 180,
                        cover: 'src/assets/image/items/cupCake9.jpg',
                        image: []
                    },
                    {
                        id: 4,
                        name: 'Heart Macaron',
                        chineseName: '草莓愛心馬卡龍',
                        size:['三入一組'],
                        price: 190,
                        cover: 'src/assets/image/items/macaron2.jpg',
                        image: []
                    },
                    {
                        id: 5,
                        name: 'Strawberry Charlotte',
                        chineseName: '草莓夏洛特',
                        size:['六吋','四吋'],
                        price: 200,
                        cover: 'src/assets/image/items/mousse13.jpg',
                        image: []
                    },
                    ]
            },
            {
                id: 'CupcakeItems',
                name: '杯子蛋糕系列',
                items: [
                    {
                        id:7,
                        name: 'Mint Chocolate Cup Cake',
                        chineseName: '薄荷巧克力杯子蛋糕',
                        size:['尺寸固定'],
                        price: 200,
                        cover: 'src/assets/image/items/cupCake1.jpg',
                        image: []
                    },
                    {
                        id: 8,
                        name: 'Oreo Cup Cake',
                        chineseName: 'Oreo杯子蛋糕',
                        size:['尺寸固定'],
                        price: 220,
                        cover: 'src/assets/image/items/cupCake8.jpg',
                        image: []
                    }
                ]
            },
            {
                id: 'TartItems',
                name: '小塔系列',
                items: [
                    {
                        id: 9,
                        name: 'Tiramisu Tart',
                        chineseName: '提拉米蘇塔',
                        size:['圓塔','方塔'],
                        price: 199,
                        cover:'src/assets/image/items/tart1.jpg',
                        image: ['src/assets/image/items/tart6.jpg','src/assets/image/items/tart7.jpg']
                    },
                    
                    {
                        id: 10,
                        name: 'PMatcha Creamcheese Tart',
                        chineseName: '抹茶乳酪塔',
                        size:['圓塔'],
                        price: 180,
                        cover: 'src/assets/image/items/tart4.jpg',
                        image: ['src/assets/image/items/tart4-1.jpg']
                    }
                ]
            },
            {
                id: 'ChouxItems',
                name: '泡芙系列',
                items: [
                    {
                        id: 11,
                        name: 'Seasame Choux',
                        chineseName: '香濃芝麻泡芙',
                        size:['尺寸固定'],
                        price: 190,
                        cover: 'src/assets/image/items/choux1.jpg',
                        image: ['src/assets/image/items/choux2.jpg']
                    },
                    {
                        id: 12,
                        name: 'Pistache Choux',
                        chineseName: '開心果泡芙',
                        size:['尺寸固定'],
                        price: 180,
                        cover: 'src/assets/image/items/choux3.jpg',
                        image: ['src/assets/image/items/choux4.jpg']
                    }
                ]
            }
        ]
      };
    },
    // 類似computed，用來封裝計算屬性，有緩存功能
    getters: {},
    actions: {
    //   async loadAllProducts() {
    //     const result = await getProducts();
    //     this.all = result;
    //   },
    },
  });
  