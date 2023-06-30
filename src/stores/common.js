import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => {
        return { isMask: false }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        toggleMask() {
            this.isMask = !this.isMask
        }
    }
})