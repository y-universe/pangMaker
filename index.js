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
        personality: {age: 1, music: 0, sing: 0, dance: 0, cook: 0, study: 0},

        message: '胖宇领养中心!',
        isStartScene: true,
        basic: false,
        finish: false,
        baby: false,
        child: false,
        teenage: false,
        canDance: false,
        career: '',
        move:'',
        history: '',
        history1: [],
        mileStone: '',

    },

    watch: {
        personality: {
            handler(newName, oldName) {
                if (this.personality.age === 2) {
                    this.baby = true
                }
                if (this.personality.age === 5) {
                    this.child = true
                }
                if (this.personality.age === 7) {
                    this.teenage = true
                }
                if (this.personality.age === 20) {
                    this.finish = true
                    this.basic = false
                    this.baby = false
                    this.child = false
                    this.teenage = false
                }
                if (this.personality.music === 5) {
                    this.canDance = true
                }
            },
            immediate: true,
            deep: true,
        },
    },
    methods: {

        startGame: function() {
            this.isStartScene = false
            this.basic = true
        },

        doSomthing: function(type) {

            this.history = this.move+this.history


            console.log(type)
            switch (type) {
                case 'sleeping':
                    this.move = '睡了个好觉'
                    break
                case  'eating':
                    this.move = '吃的饱饱的'
                    break
                case  'dancing':
                    this.personality.dance += 1
                    this.move = '跳舞技能增加了'
                    break
                case  'listening':
                    this.personality.music += 1
                    this.move = '听的很开心'
                    break
                case  'cooking':
                    this.personality.cook += 1
                    this.move = '学会了一个新菜'
                    break
                case  'wandering':
                    wandering()
                    break

            }

            // if (this.personality.age === 5) {
            //     this.finish = true;
            //     this.seen = false;
            //
            // }
            this.personality.age += 1
            this.history1.unshift(this.move)
            // this.history1.splice(0, 0, this.move)
        },

        // calCareer: function () {
        //
        //
        // }
    },
})

function wandering() {
    console.log('do something')

}