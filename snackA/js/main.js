/*
    Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una   conversazione (tipo whatsapp).
    Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
    differenziando i messaggi utente da quelli del computer. 
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            messageInput: '',
            userMessage: [
                {
                    text: 'Ciao',
                    received: false,
                },
                {
                    text: 'Ciao!',
                    received: true,
                }
            ],
        }
    },

    methods: {
        addNewMessage(currentMessage) {
            let messageContent = {
                text: currentMessage,
                received: false,
            }
            this.userMessage.push(messageContent);

            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                let receivedMessage = {
                    text: response.data.response,
                    received: true,
                }
                this.userMessage.push(receivedMessage);
            })
        }
    },

}).mount("#app")