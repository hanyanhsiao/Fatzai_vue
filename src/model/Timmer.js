export default class Timer{
    constructor(callbck,delay){
        // remaining 初始化傳入 delay值
        let timerId,start,remaining = delay;

        // 方法1 暫停計時器運行 (this指的是物件本身)
        this.pause = ()=>{

            window.clearTimeout(timerId);
            timerId= null;
            remaining -= Date.now() - start;
        }

        // 方法2 恢復計時器運行
        this.resume = ()=>{

            // 如果運行中則返回
            if(timerId) return;
            start =Date.now();
            timerId = window.setTimeout(callbck,remaining)
        };
        this.resume();
    }
} 