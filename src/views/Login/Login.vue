<template>
    <div class="login-screen">
        <div></div>
        <div class="">
            <img src="../../assets/images/lcc-logo.png" alt="LCC">
        </div>
        <div class="login-txt">
            <p>Catalyzing <span class="bold-txt">Change</span><br>
                Sustaining <span class="bold-txt">Development</span><br>
                Adding <span class="bold-txt">Value..</span></p>
        </div>
        <div class="login-box">
            <div class="email_label">
                <label class="label-email">e-Tag Code</label><br>
                <input class="login_input" type="text" name="text" placeholder="12345abc">
            </div>
            <!--<div class="email_label2">-->
                <!--<label class="label-email">PASSWORD</label><br>-->
                <!--<input class="login_input" type="password" name="password" placeholder="********">-->
            <!--</div>-->
            <div class="login_click">
                <router-link to="Landing"><button class="login-btn">Login</button></router-link>
            </div>
        </div>
        <div class="new_here">
            <p><font-awesome-icon icon="plus" class="fontawesom"/> New here?
                <router-link to="Register"><span class="create_account_now">Create Account</span></router-link>
            </p>
        </div>
        <div class="need_help">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
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