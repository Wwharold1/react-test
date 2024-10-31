import { User } from "../../model/user.model";
import { setUser } from "../../store/slices/user.slice";
import axios from 'axios';

const userAPi = axios.create({
    baseURL: 'https://rimac-front-end-challenge.netlify.app/api'
});

export const getUser = ( page = 0) => {
    return async( dispatch: any, getState: any) => {
        const resp = await userAPi.get('/user.json');
        const user: User = {
            birthDay: 'birthDay',
            lastName: 'lastName',
            name: 'name'
        }
        // dispatch( setUser(user) );
    };
}