<template>
    <header >
        <pv-toolbar   style="background-color:#673ab7;">
            <template #start>
                <img src="../../assets/images/logo-login.png" alt="Logo TripStore">
                <h3 style="color:black;"></h3>
            </template>
            <template #end>
                <div class="flex-column div1">
                    <router-link v-for="item2 in items2" :to="item2.to" custom v-slot="{ navigate, href }" :key="item2.label">
                        <pv-button class="p-button-text text-white" :href="href" @click="navigate">{{ item2.label }}</pv-button>
                    </router-link>
                </div>

                <div class="vertical-divider"></div>
                <pv-button
                    class="p-button-text text-white"
                    :href="href"
                    @click="navigate">
                </pv-button>
                <div class="flex-column">
                    <router-link v-for="item in items"
                                 :to="item.to"
                                 custom
                                 v-slot="{ navigate, href }"
                                 :key="item.label">
                        <pv-button
                            class="p-button-text text-white"
                            :href="href"
                            @click="navigate">{{ item.label }}
                        </pv-button>
                    </router-link>

                </div>
            </template>
        </pv-toolbar>
    </header>
    <h1 class="product-title">Tus Compras: </h1>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.imageUrl" :alt="product.name" class="product-image"/>
            <div class="product-details">
                <h2 class="product-name">{{ product.name }}</h2>
                <p class="product-description">{{ product.description }}</p>
                <p class="product-price">s/.{{ product.price }}</p>
                <button class="delete-button" @click="removeProduct(product.id)">Eliminar</button>
            </div>
        </div>
    </div>

    <div v-if="showMessage" class="message-container">
        <div class="message">
            <p>Tu puedes!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

            products: [],
            items: [
                { label: ' Home', to: '/home'},
                { label: 'Add New Trip', to: '/addnewtrip'},
                { label: 'Flights history', to: '/flighthistory'},
                { label: 'Items', to: '/items'},
                { label: 'Log Out', to: '/login'},
            ],
            items2: [
                { label: ' Rams', to: '/rams'},
                { label: 'Headsets ', to: '/soliddisks'},
                { label: 'Solid Disks', to: '/Headsets'},

            ],
            showMessage: false,
        };
    },
    created() {
        fetch("http://nicolasharo-001-site1.btempurl.com/api/headset")
            .then((response) => response.json())
            .then((data) => {
                this.products = data;
                console.log(data)
            });
    },
    methods: {
        removeProduct(productId) {
            // Eliminar el producto con el ID especificado
            this.products = this.products.filter(product => product.id !== productId);
        },
        showMessage() {
            this.showMessage = true;
        },
    },
};
</script>

<style>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.product-card {
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: flex;
}

.product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
}

.product-details {
    flex: 1;
}

.product-name {
    font-size: 18px;
    margin-bottom: 5px;
}

.product-description {
    font-size: 14px;
    margin-bottom: 5px;
}

.product-price {
    font-weight: bold;
    margin-bottom: 10px;
}

.delete-button {
    background-color: #ff0000;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.message-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.message {
    padding: 20px;
    background-color: #ff0000;
    border-radius: 5px;
}

.message p {
    color: white;
    font-weight: bold;
}
.product-title {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    color:black;
}
.cart-icon {
    width: 20px;
    height: 20px;
}
</style>
