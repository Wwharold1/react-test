import { Plan } from "../../model/plan.model";
import { setPlan } from "../../store/slices/plan.slice";
import axios from 'axios';

const planAPi = axios.create({
    baseURL: 'https://rimac-front-end-challenge.netlify.app/api'
});

export const getPlan = ( page = 0) => {
    return async( dispatch: any, getState: any) => {
        // const resp = await planAPi.get('/plans.json');
        const plan: Plan = {
            list: [
                {
                    age: 12,
                    description: ['as', 'sasd'],
                    name: 'plan 12',
                    price: 123
                },
                {
                    age: 13,
                    description: ['as', 'sasd'],
                    name: 'plan 13',
                    price: 122
                },
                {
                    age: 14,
                    description: ['as', 'sasd'],
                    name: 'plan 14',
                    price: 132
                },
                {
                    age: 15,
                    description: ['as', 'sasd'],
                    name: 'plan 15',
                    price: 142
                },
                {
                    age: 16,
                    description: ['as', 'sasd'],
                    name: 'plan 16',
                    price: 152
                },
                {
                    age: 17,
                    description: ['as', 'sasd'],
                    name: 'plan 17',
                    price: 162
                }
            ]
        }
        dispatch( setPlan(plan) );
    };
}