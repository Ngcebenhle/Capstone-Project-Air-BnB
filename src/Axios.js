import axios from 'axios'

const instance = axios.create({
    baseURL:'https://us-central1-react-app-676fe.cloudfunctions.net/api'
});

// const instance = axios.create({
//     baseURL = 'http://127.0.0.1:5001/react-app-676fe/us-central1/api'
// });

export default instance


// request example

// const response = await instance({
//     method: "post",
//     url: "/payments/create?total=" + getBasketTotal(basket) * 100, // how can i make this into an interger ??????????
//   });