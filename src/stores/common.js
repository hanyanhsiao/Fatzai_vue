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