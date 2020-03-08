import axios from 'axios'
let getFoodInfo=()=>{
    let url='http://yapi.demo.qunar.com/mock/87086/food/getAllFood'
    return axios.post(url)
}
export { getFoodInfo }