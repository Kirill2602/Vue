import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        page: [],
    },
    getters: {
        PAGE: state => {
            return state.page;
        }
    },
    mutations: {
        SET_PAYMENT_LIST: (state, payload) => {
            state.page = payload;
        },
        ADD_PAY: (state, newData) => {
            state.page = [...state.page, newData]
        },
        DELETE_PAYMENT: (state, id) => {
            state.page = state.page.filter(value => value.id !== id)
        },
        EDIT_PAYMENT: (state, Obj) => {
            for (let i = 0; i < state.page.length; i++) {
                if (state.page[i].id === Obj.id) {
                    state.page[i].category = Obj.category
                    state.page[i].date = Obj.date
                    state.page[i].value = Obj.value
                }
            }
        },
    },
    actions: {
        GET_PAY_FROM_API({commit}) {
            return axios(' http://localhost:3000/page', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_PAYMENT_LIST', response.data)
                })
        }
    },
    modules: {}
})