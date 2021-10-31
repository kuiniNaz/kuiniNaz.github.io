let app1 = new Vue({
    el: "#app1",
    data : {
        message: "Hello Bb Vue!"
    }
})

let app2 = new Vue({
    el:"#app2",
    data: {
        message: "Loaded on" + new Date().toLocaleString(),
        linkUrl: "https://www.youtube.com/watch?v=fcZXfoB2f70",
        linkText: "Come on, don't be shy. Click Me!"
    }
})

let app3 = new Vue({
    el: "#app3",
    data:{
        showIt: true
    },
    methods: {
        toggleMsg: function(){
            if(this.showIt){
                this.showIt = false
            } else {
                this.showIt = true
            }
        }
    }
})

let app4 = new Vue({
    el:"#app4",
    data: {
        theList: [
            { text: "Learn HTML" },
            { text: "Learn CSS" },
            { text: "Learn Javascript" }
        ]
    }
})

let app5 = new Vue({
    el:"#app5",
    data: {
        message: "Assalamualaikum!",
        groceryList: [
            {
                id: 1,
                desc: "Pocket Cocholate"
            },
            {
                id: 2,
                desc: "Samyang"
            },
            {
                id: 3,
                desc: "Roti"
            },
            {
                id: 4,
                desc: "Cheese"
            }
        ]
    }
})