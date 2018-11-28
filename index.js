
// Vue.component('eventTree', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })

var app = new Vue({
    el: '#app',
    data: {
        personality: {age: 1, music:0, dance: 0, cook: 0, study: 0},

        message: '胖宇领养中心!',
        isStartScene: true,
        basic: false,
        finish: false,
        baby: false,
        child: false,
        teenage: false,
        canDance:false,
        career: ''

    },


    watch: {
        personality: {
            handler(newName, oldName) {
                if (this.personality.age === 2) {
                    this.baby = true;
                }
                if (this.personality.age === 10) {
                    this.child = true;
                }
                if (this.personality.age === 7) {
                    this.teenage = true;
                }
                if (this.personality.age === 20) {
                    this.finish = true;
                    this.basic = false;
                    this.baby = false;
                    this.child = false;
                    this.teenage = false;
                }
                if (this.personality.music === 5){
                    this.canDance = true;
                }
            },
            immediate: true,
            deep: true
        }
    },
    methods: {

        startGame: function () {
            this.isStartScene = false;
            this.basic = true;
        },

        doSomthing: function (type) {


            console.log(type);
            switch (type){
                case "sleeping":
                    break;
                case  "eating":
                    break;
                case  "dancing":
                    this.personality.dance+=1;
                    break;
                case  "listening":
                    this.personality.music+=1;
                    break;
                case  "cooking":
                    this.personality.cook+=1;
                    break;
                case  "wandering":
                    wandering();
                    break;


            }





            // if (this.personality.age === 5) {
            //     this.finish = true;
            //     this.seen = false;
            //
            // }
            this.personality.age += 1;
        },



        // calCareer: function () {
        //
        //
        // }
    },
});

function wandering() {
    console.log('do something')
    
}