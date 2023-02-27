let app = new Vue({
    el: '#app',
    data: {
        crntId:0,
        chausettes: [
            noir = {
                id: 1,
                name: 'Noir',
                src: './img/chausettes_noires.jpg',
                alt: 'chausettes noires',
                quantity: 5,
                color: '#000000'
            },
            blanc = {
                id: 2,
                name: 'Blanc',
                src: './img/chausettes_blanche.jpg',
                alt: 'chausettes blanches',
                quantity: 6,
                color: '#ffffff'

            },
            gris = {
                id: 3,
                name: 'Gris',
                src: './img/chausettes_grises.webp',
                alt: 'Chausettes grises',
                quantity: 5,
                color: '#808080'
            }
        ],
    },
    methods: {
        setRed(index) {
            event.target.style.backgroundColor = "red";
            this.crntId = index;
        },
        setLeave() {
            event.target.style.backgroundColor = this.personnages[index].color;

        }
    }

});
