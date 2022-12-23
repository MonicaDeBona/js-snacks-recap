/*
    Chiedere all'API 10 nomi da inserire in un array di invitati.
    Una volta generata la lista chiedere all'utente di dire il proprio nome.
    Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            guestList: [],
            userName : '',
            nameCheck: false,
        }
    },

    methods: {
        checkName(userName) {
            this.nameCheck = this.guestList.includes(userName);
        }
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((response) => {
                this.guestList.push(response.data.response);
            });
        }
    }

}).mount("#app")