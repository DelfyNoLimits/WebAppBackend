<template>
    <div className="text-center p-4">
        <h1 style="color:black;">Register</h1>

        <div className="image-left">
            <img src="../../assets/images/flight.jpg" alt="Left image">
        </div>

        <span className="p-float-label p-4">
      <pv-input-text placeholder="Username" type="text" id="UserId" v-model="usuario"/>
    </span>
        <span className="p-float-label p-4">
      <pv-input-text placeholder="Name" type="text" id="Name" v-model="name"/>
    </span>
        <span className="p-float-label p-4">
      <pv-input-text placeholder="Email" type="text" id="Email" v-model="email"/>
    </span>
        <span className="p-float-label p-4">
      <pv-input-text placeholder="Password" type="password" id="Password"  v-model="password"/>
    </span>
        <span className="p-float-label p-4">
      <pv-input-text placeholder="Re-enter Password" type="password" id="RePassword" v-model="rePassword"/>
    </span>
        <router-link to="/login">
            <pv-button style="background-color:#673ab7;" @click="saveUser" >Save changes</pv-button>
            <pv-button style="background-color:#ffd740;color:black;">Cancel</pv-button>
        </router-link>

    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: '',
            password: '',

        };
    },
    methods: {
        saveUser() {
            console.log("El método saveUser se está ejecutando");
            const newUser = {
                usuario: this.usuario,
                password: this.password
            };

            // Enviar una solicitud HTTP POST al servidor backend
            fetch('http://nicolasharo-001-site1.btempurl.com/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(response => response.text())
                .then(data => console.log(data))
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        redirectToLogin() {
            window.location.href = '/login';
        },

    }
};
</script>

<style>
.image-left {
    float: left;
    width: 5%;
    text-align: left;
}
</style>