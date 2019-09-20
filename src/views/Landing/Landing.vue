<template>
    <div class="landing-page">
        <div class="container">
            <div class="landing-page-inner">
                <div class="user-profile">
                    <h5>Welcome Ebenezer!</h5>
                    <p>Make Payment today.</p>
                    <p>Balance: <span> &#x20A6;</span>5,000 </p>
                </div>
                <div class="pay-now">
                    <paystack
                            :amount="amount"
                            :email="email"
                            :paystackkey="paystackkey"
                            :reference="reference"
                            :callback="callback"
                            :close="close"
                            :embed="false"
                            class="payment-btn"
                    >
                        <i class="fas fa-money-bill-alt"></i>
                        Make Payment
                    </paystack>
                </div>
                <div class="text-center lcc_logo"><img src="../../assets/images/lcc-logo.png" alt="LCC"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import paystack from 'vue-paystack';
    export default {
        name: "Landing.vue",
        components: {
            paystack
        },
        data(){
            return{
                paystackkey: "pk_test_aa5f479a9f5e5caf4bd9e0dcaf7a5838a195720f", //paystack public key
                email: "spaveline1@gmail.com", // Customer email
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
        methods: {
            callback: function(response){
                console.log(response)
            },
            close: function(){
                console.log("Payment closed")
            }
        }
    }
</script>

<style scoped>
    .landing-page-inner{
        width: 100%;
        height: 100vh;
        /*background: url(../../assets/images/bg_city.png) center bottom no-repeat;*/
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        padding: 3rem 1rem 1rem;
    }
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .user-profile{
        text-align: left;
        color: #FFFFFF;
    }
    .user-profile h5{
        font-family: Montserrat-SemiBold;
    }
    .user-profile p{
        font-family: Montserrat-Regular;
    }
    .lcc_logo img{
        border-radius: 50%;
        width: 60px;
        height: 60px;
    }
</style>