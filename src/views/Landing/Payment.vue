<template>
    <div class="payment-page">
        <paystack
                :amount="amount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
        >
            <i class="fas fa-money-bill-alt"></i>
            Make Payment
        </paystack>
    </div>
</template>

<script>
    import paystack from 'vue-paystack';
    export default {
        name: "Payment.vue",
        components: {
            paystack
        },
        data(){
            return{
                paystackkey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxx", //paystack public key
                email: "foobar@example.com", // Customer email
                amount: 1000000 // in kobo
            }
        },
        computed: {
            reference(){
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for( let i=0; i < 10; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }
        },
        // methods: {
        //     callback: function(response){
        //         console.log(response)
        //     },
        //     close: function(){
        //         console.log("Payment closed")
        //     }
        // }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
</style>