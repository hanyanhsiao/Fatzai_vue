<script setup>
import { ref, computed, onUpdated } from 'vue'

// 定義總數量、每一頁的個數、當前頁碼
const props = defineProps({
    total: { type: Number },
    onePage: { type: Number },
    currentPage: { type: Number }
})

const currentNum = ref(props.currentPage)

// 總頁數
const pages = computed(() => {
    return Math.ceil(props.total / props.onePage)
})

// 依據產品數量產生頁碼
const list = computed(() => {
    const result = []
    for (let i = 1; i <= pages.value; i++) {
        result.push(i)
    }
    return result
})

const emit = defineEmits(['changePage'])

// 改變頁碼
function changePage(type) {
    // 點擊上一頁按鈕
    if (type === false) {
        if (currentNum.value > 1) return (currentNum.value -= 1)
    } else if (type === true) {
        // 點擊下一頁按鈕
        if (currentNum.value <= pages.value) return (currentNum.value += 1)
    } else {
        // 點擊頁碼
        currentNum.value = type
    }
    emit('changePage', currentNum.value)
}

onUpdated(() => {
    const pagination = document.querySelector('.pagination')
    if (pagination) {
        const pageItems = pagination.querySelectorAll('li')
        pageItems[0].classList.add('active')
    }
})
</script>

<template>
    <ul class="pagination">
        <span class="previous_page" :class="{ disabled: currentNum === 1 }" @click="currentNum !== 1 && changePage(false)">«</span>
        <li class="pagetabs" v-for="item in list" :key="item" :class="{ active: currentNum === item }" @click="changePage(item)">{{ item }}</li>
        <span class="next_page" :class="{ disabled: currentNum === pages }" @click="currentNum !== pages && changePage(true)">»</span>
    </ul>
</template>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 20px auto 0;

    span {
        display: inline-block;
        margin: 0 20px;
        cursor: pointer;
        font-size: 1.5rem;
        margin-top: -3px;
    }

    li {
        display: inline-block;
        float: left;
        padding: 8px 12px;
        cursor: pointer;
    }

    .active {
        background-color: $secondary_color;
        color: white;
        border-radius: 50%;
    }
    .disabled {
        color: rgb(198, 198, 198);
        cursor: default;
    }
}
</style>
