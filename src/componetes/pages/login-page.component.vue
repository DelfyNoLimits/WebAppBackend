<template>
    <div class="body">
        <div class="login">
            <img src="../../assets/images/logo-login.png" alt="Logo TripStore">
            <h1 style="color:black;">Login</h1>
            <span class="p-float-label p-4">
                <pv-input-text placeholder="Username" type="text" id="UserId" v-model="users.username" />
            </span>
            <span class="p-float-label p-4">
                <pv-input-text placeholder="Password" type="password" id="Password" v-model="users.password" />
            </span>

            <pv-button class="width" @click="login" label="Login"></pv-button><br><br>
            <pv-button class="changes" @click="redirectToDashboard" label="Sign Up"></pv-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        async login() {
           let result=await axios.get(
            //`http://localhost:3000/saveUser?username=${this.users.username}&password=${this.users.password}`
            `http://nicolasharo-001-site1.btempurl.com/api/user`
           )
            console.log(result.data[0].usuario)
            for (let i = 0; i < result.data.length; i++) {
               if(this.users.username===result.data[i].usuario && this.users.password===result.data[i].password){
                   console.log(this.users.username);
                   this.$router.push('/home');
               }
            }
           // console.log(result.data[0])
            //console.warn(result)


        },
        redirectToDashboard() {
            window.location.href = '/profile';
        },
    },
};
</script>





<style scoped>
.body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.login {
    width: 100%;
    padding: 15px;
    margin: auto;
    text-align: center;
}
.width {
    background-color: #673ab7;
    width: 8%;
    margin-top: 10px;
}
.changes {
    background-color: #ffd740;
    color: black;
    width: 8%;
    margin-top: 10px;
}
</style>