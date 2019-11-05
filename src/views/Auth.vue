<template>
    <div id="login">
        <v-form
          class="forma"
          ref="form"
          lazy-validation
        >
            <h1
            style="text-align:center"
            >Welcome to the Loans website</h1>
            <v-text-field
            v-model="input.username"
            :counter="10"
            label="Username"
            required
            ></v-text-field>

            <v-text-field
            type="password"
            v-model="input.password"
            label="Password"
            @keyup.enter="login()"
            required
            ></v-text-field>

            <div class="buttons"> 
                <v-btn
                dark
                color="success"
                class="mr-4"
                @click="login()"
                @keyup.enter="login()"
                >
                Login
                </v-btn>

                <v-btn
                dark
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    for (let i = 0; i < this.$parent.mockAccount.length;i++){
                    if(this.input.username == this.$parent.mockAccount[i].name && this.input.password == this.$parent.mockAccount[i].password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                        } 
                    }
                } else {
                    console.log("A username and password must be present");
                }
                
            },

            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
        }
</script>

<style scoped>
    .buttons{
       display: flex;
       justify-content: center; 
    }
    .mr-4{
        margin-left:15px;
        margin-right:15px;
    }

    .forma{
        width:400px;
        height: 400px;
        margin: auto;
        padding-top:250px;
    }
   
</style>


