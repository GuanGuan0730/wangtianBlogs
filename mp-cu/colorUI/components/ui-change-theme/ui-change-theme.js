Component({
    data: {
     
        color: ['black', 'jiaohu','ganlan','zhulu','baochunhun','shangengzi','qingshuilan','hanwanglu','shanchahong','orange', 'yellow', 'olive', 'green', 'cyan', 'grey','blue', 'purple', 'mauve', 'pink', 'brown'],
        target: '',
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
    },
    lifetimes: {
        created() {

        },
        attached() {
            
        },
        ready() {

        },
    },
    methods: {
        tapAutoThemeChange(e) {
            let val = e.currentTarget.dataset.value;
            this.setTheme( val === 'auto'?'light':'auto')
        },
        tapThemeChange(e) {
            this.setTheme(e.currentTarget.dataset.value)
        },
        tapColorPicker() {
            this.setData({
                target: 'colorPicker'
            })
        },
        tapChooseColor(e) {
            this.setMain(e.currentTarget.dataset.value)
        },
    }
})