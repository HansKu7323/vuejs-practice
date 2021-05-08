
// alert('hello')

var vm =new Vue({
    el:'#box',
    data:{
       isActive:true
    },
    methods:{
        handleClick(){
            this.isActive = !this.isActive
        }
    }
});
