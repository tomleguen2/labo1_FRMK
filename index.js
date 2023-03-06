let app = new Vue({
    el: '#app',
    data: {
        crntId: 0,
        stock: "",
        cart: [],
        total: 0,
        chausettes: [
            noir = {
                id: 1,
                name: 'Paire de chausettes noires',
                src: './img/chausettes_noires.jpg',
                alt: 'chausettes noires',
                quantity: 5,
                price: 5,
                color: '#000000'
            },
            blanc = {
                id: 2,
                name: 'Paire de chausettes blanches',
                src: './img/chausettes_blanche.jpg',
                alt: 'chausettes blanches',
                quantity: 6,
                price: 7,
                color: '#ffffff'

            },
            gris = {
                id: 3,
                name: 'Paire de chausettes grises',
                src: './img/chausettes_grises.webp',
                desc: 'Paire de chausettes grises semi-montante',
                alt: 'chausettes grises',
                quantity: 5,
                price: 6,
                color: '#808080'
            }
        ],
    },
    methods: {
        setImage(index) {
            this.crntId = index;
        },

        addToCart() {
            if (this.chausettes[this.crntId].quantity > 0) {
                this.chausettes[this.crntId].quantity--;
                this.cart.push(this.chausettes[this.crntId]);
                this.total += this.chausettes[this.crntId].price;
                if (this.chausettes[this.crntId].quantity <= 2) {
                    this.stock = "presque epuisé";
                } else if (this.chausettes[this.crntId].quantity === 0) {
                    this.stock = "rupture de stock";
                } else {
                    this.stock = "en stock";
                }
            }
        },

        //vider le panier
        emptyCart() {
            for (let i = 0; i < this.cart.length; i++) {
                this.cart[i].quantity++;
            }
            this.cart = [];
            this.total = 0;
        },


          //ajoute un vip
        addVip() {
            return this.cart.length > 5;
        }


        }

    });
