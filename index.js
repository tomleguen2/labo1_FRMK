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
                src: './img/chausettes_blanches.webp',
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

                // if id chaussette is'nt in cart
                if (this.cart.find(p => p.id === this.chausettes[this.crntId].id)) {
                    this.cart.find(p => p.id === this.chausettes[this.crntId].id).quantity++;
                } else {
                    this.cart.push({
                        id: this.chausettes[this.crntId].id,
                        name: this.chausettes[this.crntId].name,
                        quantity: 1
                    });
                    this.total += this.chausettes[this.crntId].price;
                    console.log(this.cart);
                    console.log(this.chausettes);
                }
            }
        },

        //calculer le total du panier
        getTotal() {
            this.total = 0;
            this.cart.forEach((item) => {
                this.total += this.chausettes.find(item2 => item2.id === item.id).price * item.quantity;
            });
            return this.total;
        },

        //vider le panier
        emptyCart() {
            this.cart.forEach((item) => {
                this.chausettes.find(item2 => item2.id === item.id).quantity += item.quantity;
            });
            this.total = 0;
            this.cart = [];
        },

        totalQuantityPanier() {
            total = 0;
            this.cart.forEach((item) => {
                total += item.quantity;
            });
            return total;
        }, checkVIP() {
            return this.totalQuantityPanier() > 5;
        },

    }

});
