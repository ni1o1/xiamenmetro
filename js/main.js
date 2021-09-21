function setstationdata(station) {

    //人口热力
    $.getJSON('data/population.json', function(population) {
        console.log(population)
        var option2 = {
            title: [
            {
                text: station,
                left: '5%',
                textStyle:{ fontSize: 30},
                top: '2%'
            },
            {
                text: '周边人口（内：居住，外：就业）',
                left: '75%',
                textAlign: 'center',
                top: '45%'
            }, {
                text: '职住人口比例',
                left: '25%',
                textAlign: 'center',
                top: '45%'
            }, {
                text: '周边POI分布',
                left: '25%',
                textAlign: 'center',
                top: '95%'
            }, {
                text: '房价分布区位',
                left: '75%',
                textAlign: 'center',
                top: '95%'
            }, ],
            series: [{
                type: 'pie',
                left: '50%',
                top: '0%',
                height: '50%',
                radius: ['45%', '55%'],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                label: {
                    formatter: '{b|{b}：} \n{hr|}\n {per|{d}%}  ',
                    backgroundColor: '#F6F8FC',
                    borderColor: '#8C8D8E',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        b: {
                            align: 'center',
                            color: '#4C5058',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                    }
                },
                data: population[0][station],
                name: '地铁不同范围圈内居住人口'
            },{
                type: 'pie',
                left: '50%',
                top: '0%',
                height: '50%',
                radius:  '40%',
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                label:{
                     position: 'inner',
                     formatter: ' {per|{d}%}  ',
                    rich: {
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                    }
                },
                data: population[1][station],
                name: '地铁不同范围圈内就业人口'
            },{
                type: 'pie',
                right: '50%',
                top: '0%',
                height: '50%',
                radius: '35%',
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                label: {
                    formatter: '{b|{b}：} \n{hr|}\n {c}人{per|{d}%}  ',
                    backgroundColor: '#F6F8FC',
                    borderColor: '#8C8D8E',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        b: {
                            align: 'center',
                            color: '#4C5058',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                    }
                },
                data: population[2][station],
                name: '居住工作人口比例'
            }
            ],
        }
        myChart2.setOption(option2)
    })
    //土地开发利用
    $.getJSON('data/wordcloud.json', function(wordcloud) {
        var option3 = {
            title: [{
                text: '周边用地词云图',
                left: '75%',
                textAlign: 'center',
                top: '45%'
            }, {
                text: '生活圈罗盘图',
                left: '25%',
                textAlign: 'center',
                top: '45%'
            }, {
                text: '周边POI分布',
                left: '25%',
                textAlign: 'center',
                top: '95%'
            }, {
                text: '房价分布区位',
                left: '75%',
                textAlign: 'center',
                top: '95%'
            }, ],
            series: [{
                type: 'wordCloud',
                shape: 'circle',
                rotationRange: [20, 20],
                rotationStep: 45,
                left: '40%',
                top: '0%',
                height: '50%',
                data: wordcloud[0][station],
                sizeRange: [20, 60],
                textStyle: {}
            }],
        };
        myChart3.setOption(option3)
    })
}