/** Chiedere all'utente quanti elementi vuole includere nell'array.
    Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
    Stampare a schermo la somma dei numeri generati.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            result: '',
            userNumber: '',
        }
    },

    methods: {
        getRandomNumber(numberOfItems){
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + numberOfItems)
            .then((response) => {
                console.log(response.data.response);
                const numbers = response.data.response;
                let sum = 0;
                numbers.forEach(element => {
                    sum += element;
                });
                this.result = sum;
            });
        }
    },

}).mount("#app")