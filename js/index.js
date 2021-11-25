const vm = new Vue({
    el: '#app',
    data: {
        tabsActive: 0,
        active: 0,
        stickySatu: false,
        vantTabsIndex: 2,
        sortList: ['成交额', '最新价', '涨跌幅'],
        sortStatu: {
            index: null,
            statu: 0
        },
        downloadAppStatu: true,
        data_contentList: [
            {
                img: './images/new_icon_zb_64.png',
                name: 'ZB',
                cnName: '中币',
                total: 465000,
                price: 1534251,
                cny: 5669816,
                tage: 1
            },
            {
                img: './images/new_icon_btc_64.png',
                name: 'BTC',
                cnName: '比特币',
                total: 15000,
                price: 56716.1,
                cny: 380546.63,
                tage: 1
            },
            {
                img: './images/new_icon_eth_64.png',
                name: 'ETH',
                cnName: '以太坊',
                total: 18000,
                price: 352523.69,
                cny: 34513.42,
                tage: 1
            },
            {
                img: './images/new_icon_shib_64.png',
                name: 'SHIB',
                cnName: 'shib',
                total: 36694970000,
                price: 2134.69,
                cny: 123213.42,
                tage: 6
            },
            {
                img: './images/new_icon_mana_64.png',
                name: 'MANA',
                cnName: 'Decentraland',
                total: 123451,
                price: 13213.69,
                cny: 1345.42,
                tage: 1
            },
            {
                img: './images/new_icon_sand_64.png',
                name: 'SAND',
                cnName: 'sand',
                total: 3463426,
                price: 3467.69,
                cny: 123513.42,
                tage: 8
            },
            {
                img: './images/new_icon_gala_64.png',
                name: 'GALA',
                cnName: 'gala',
                total: 2562435,
                price: 1233.69,
                cny: 4567456.42,
                tage: 12
            },
            {
                img: './images/new_icon_waxp_64.png',
                name: 'WAXP',
                cnName: 'waxp',
                total: 5637457,
                price: 3742.69,
                cny: 734523.42,
                tage: 6
            },
            {
                img: './images/new_icon_sol_64.png',
                name: 'SOL',
                cnName: 'sol',
                total: 43263426,
                price: 347432.69,
                cny: 43643.42,
                tage: 7
            },
            {
                img: './images/new_icon_ada_64.png',
                name: 'ADA',
                cnName: 'ada',
                total: 2643643,
                price: 54677.69,
                cny: 634623.42,
                tage: 9
            },
            {
                img: './images/new_icon_dot_64.png',
                name: 'DOT',
                cnName: 'dot',
                total: 345345656,
                price: 55672.69,
                cny: 42336.42,
                tage: 11
            },
            {
                img: './images/new_icon_ens_64.png',
                name: 'ENS',
                cnName: 'ens',
                total: 3532554,
                price: 25795.69,
                cny: 65463.42,
                tage: 14
            },
            {
                img: './images/new_icon_imx_64.png',
                name: 'IMX',
                cnName: 'imx',
                total: 754573,
                price: 34623.69,
                cny: 352235.42,
                tage: 12
            }
        ]
    },
    mounted() {
        this.timeout()
    },
    methods: {
        changeStickyStatu(bool) {
            this.stickySatu = bool
        },
        changeVantTabs(index) {
            if (!index) {
                this.$toast('请先登录');
                return false
            }
            this.vantTabsIndex = index
        },
        changeSortStatu(index) {
            if (this.sortStatu.index != index) {
                this.sortStatu.index = index
                this.sortStatu.statu = 1
                return false
            }
            if (this.sortStatu.statu == 3) {
                this.sortStatu.statu = 0
            }
            this.sortStatu.statu++
        },
        timeout(){
            var self = this
            var arr = this.data_contentList
            setInterval(() => {
                for(var i in arr){
                    arr[i]['total'] = (arr[i]['total'] - (Math.random() - (Math.random()))).toFixed(2);
                    arr[i]['price'] = (arr[i]['price'] - (Math.random() - Math.random())).toFixed(2)
                    arr[i]['cny'] = (arr[i]['cny'] - (Math.random() - Math.random())).toFixed(2)
                    arr[i]['tage'] = (arr[i]['tage'] - (Math.random() - Math.random())).toFixed(2)
                }
            },2000)
        }
    },
    filters: {
        total(value) {
            var param = {};
            var k = 10000,
                sizes = ['', '万', '亿', '万亿'],
                i;
            if (value < k) {
                param.value = value
                param.unit = ''
            } else {
                i = Math.floor(Math.log(value) / Math.log(k));
                param.value = ((value / Math.pow(k, i))).toFixed(1);
                param.unit = sizes[i];
            }
            return param.value+param.unit
        }
    }
});