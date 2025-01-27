export const login = {
        data:function() {
            return {
                img:1,
                hs:0,
                parent:''
            }
        },
        mounted:function(){
            this.img = this.randomIntFromInterval(1,7);
            this.parent = this.$parent.$parent;
        },
        methods:{

        },
            template: `
            <div class="flex">
                gdfgdfgdfgdf
            </div>
    `};