import axios from 'axios';

const instans = axios.create({
    baseURL: "https://react-my-burger-faa49.firebaseio.com/"
});

export default instans;
