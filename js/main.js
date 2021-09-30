function setstationdata(station) {

    //人口热力
    $.getJSON('data/population.json', function(population) {

        for (var i = 0; i < population[5].length; i++) {
            if (population[5][i]['name'] == station) {
                population[5][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
                population[6][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            }
        }
        var option2 = {
            title: [{
                    text: station,
                    left: '5%',
                    textStyle: { fontSize: 30 },
                    top: '2%'
                },
                {
                    text: '周边人口（内：居住，外：就业）',
                    left: '75%',
                    textAlign: 'center',
                    top: '5%'
                }, {
                    text: '职住人口比例',
                    left: '25%',
                    textAlign: 'center',
                    top: '13%'
                }, {
                    text: '人流量时变',
                    left: '25%',
                    textAlign: 'center',
                    top: '46%'
                }, {
                    text: '高峰小时人流量',
                    left: '75%',
                    textAlign: 'center',
                    top: '46%'
                },
            ],
            tooltip: {},
            grid: [{
                left: '8%',
                top: '48%',
                width: '42%',
                height: '38%'

            }, {
                left: '60%',
                top: '48%',
                width: '38%',
                height: '38%'

            }],
            xAxis: [{
                name: '小时',
                type: 'category',
                gridIndex: 0,
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            }, {
                name: '人',
                min: 0,
                max: 11000,
                gridIndex: 1
            }],
            yAxis: [{
                name: '人',
                min: 0,
                max: 11000,
                gridIndex: 0
            }, {
                inverse: true,
                type: 'category',
                gridIndex: 1,
                data: ['体育会展', '东界', '洪坑', '林前', '鼓锣', '翔安市民公园', '浦边', '后村', '蔡厝'],
            }],
            legend: [{
                top: '49%',
                left: '30%',
                data: ['工作日', '非工作日']
            }, {
                top: '49%',
                left: '80%',
                data: ['早高峰', '晚高峰']
            }],
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
            }, {
                type: 'pie',
                left: '50%',
                top: '0%',
                height: '50%',
                radius: '40%',
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                label: {
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
            }, {
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
            }, {
                name: '工作日',
                type: 'line',
                data: population[3][station]
            }, {
                name: '非工作日',
                type: 'line',
                data: population[4][station]
            }, {
                name: '早高峰',
                type: 'bar',
                data: population[5],
                barGap: '0%',
                barCategoryGap: '10%',
                xAxisIndex: 1,
                yAxisIndex: 1
            }, {
                name: '晚高峰',
                type: 'bar',
                data: population[6],
                xAxisIndex: 1,
                yAxisIndex: 1
            }],
        }
        myChart2.setOption(option2)
    })
    //土地开发利用
    $.getJSON('data/wordcloud.json', function(wordcloud) {
        for (var i = 0; i < wordcloud[5].length; i++) {
            if (wordcloud[5][i]['name'] == station) {
                wordcloud[3][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
                wordcloud[4][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
                wordcloud[5][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            }
        }
        var option3 = {
            tooltip: {},
            title: [{
                text: '周边用地词云图',
                left: '75%',
                textAlign: 'center',
                top: '2%'
            }, {
                text: '生活圈罗盘图',
                left: '25%',
                textAlign: 'center',
                top: '2%'
            }, {
                text: '周边POI分布',
                left: '25%',
                textAlign: 'center',
                top: '48%'
            }, {
                text: '房价分布区位',
                left: '75%',
                textAlign: 'center',
                top: '48%'
            }, ],
            radar: {
                center: ['25%', '25%'],
                radius: '37.5%',
                indicator: [
                    { text: '衣', max: 5 },
                    { text: '食', max: 5 },
                    { text: '住', max: 5 },
                    { text: '行', max: 5 },
                    { text: '娱', max: 5 },
                    { text: '教', max: 5 },
                    { text: '医', max: 5 },
                    { text: '养', max: 5 }
                ],
                name: {
                    textStyle: {
                        fontSize: 15,
                        color: '#000'
                    }
                },
                shape: 'circle',
                //splitArea: { areaStyle: { color: 'red' } }//底面的面
                //axisLine: { lineStyle: { color: 'red' } }//底面的轴
                //splitLine: { lineStyle: { color: 'red' } }//底面的分隔线
            },
            grid: [{
                left: '65%',
                top: '53%',
                width: '38%',
                height: '33%'

            }],
            xAxis: [{
                name: '元/平方米',
                min: 0,
                max: 50000,
                gridIndex: 0
            }],
            yAxis: [{
                inverse: true,
                type: 'category',
                gridIndex: 0,
                data: ['体育会展', '东界', '洪坑', '林前', '鼓锣', '翔安市民公园', '浦边', '后村', '蔡厝'],
            }],
            legend: [{
                top: '75%',
                left: '85%',
                data: ['3km平均房价', '5km平均房价', '10km平均房价']
            }],
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
            }, {
                name: '生活圈罗盘',
                type: 'radar',
                label: { show: true },
                data: [{ value: wordcloud[1][station] }],
                areaStyle: {}
            }, {
                name: '周边POI',
                type: 'pie',
                center: ['30%', '65%'],
                radius: '25.5%',
                label: {
                    show: true,
                    alignTo: 'labelLine',
                    formatter: '{name|{b}}\n{value|{c}}',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    rich: {
                        value: {
                            fontSize: 10,
                            color: '#999'
                        }
                    }
                },
                data: wordcloud[2][station],
                areaStyle: {}
            }, {
                name: '3km平均房价',
                type: 'bar',
                data: wordcloud[3],
                barGap: '0%',
                barCategoryGap: '10%',

            }, {
                name: '5km平均房价',
                type: 'bar',
                data: wordcloud[4],

            }, {
                name: '10km平均房价',
                type: 'bar',
                data: wordcloud[5],

            }],
        };
        myChart3.setOption(option3)
        //人口热力
        try {
            if ((myChart.getOption()
                    .series[5]['data'].length > 0) & (myChart.getOption()
                    .series[5]['type'] == 'lines')) {
                iso()
            }
        } catch {}
        //等时圈面积
        
        $.getJSON('data/isoarea.json', function(isoarea) {
            var s = []
            for (x in isoarea) {
                s1 = {
                    name: x,
                    type: 'bar',
                    data: isoarea[x],
                    barGap: '0%',
                    barCategoryGap: '10%',

                }
                if (x == station) {
                    s1['itemStyle'] = {
                        borderColor: 'black',
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    }

                } else {
                    s1['itemStyle'] = { borderWidth: 0, shadowBlur: 0 }
                }
                s.push(s1)
            }

            xs = []
            for (var r = 0; r < isoarea[x].length; r++) { xs.push(isoarea[x][r].name) }

            var option4 = {
                title: [{
                    text: '等时圈面积（平方千米）',
                    left: '45%',
                    top: '12%'
                }],
                grid: [{
                    left: '20%',
                    top: '15%',
                    width: '60%',
                    height: '38%'
                }],
                tooltip: {},
                xAxis: [{
                    name: '平方千米',
                    min: 0,
                    max: 300,
                    gridIndex: 0
                }],
                legend: { top: '55%' },
                yAxis: [{
                    inverse: true,
                    type: 'category',
                    gridIndex: 0,
                    data: xs
                }],
                series: s
            }
            myChart4.setOption(option4)

        })
        //等时圈面积
        $.getJSON('data/green.json', function(green) {
        for (var i = 0; i < green[2].length; i++) {
            if (green[2][i]['name'] == station) {
               green[2][i]['itemStyle'] = {
                    borderColor: 'black',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            }
        }

            var option5 = {
                title: [{
                    text: '地铁站周边绿地',
                    textAlign: 'center',
                    left: '50%',
                    top: '2%'
                }],
                grid: [{
                    left: '28%',
                    top: '8%',
                    width: '42%',
                    height: '38%'
                },{
                    left: '28%',
                    top: '55%',
                    width: '45%',
                    height: '35%'
                }],
                xAxis: [{
                    name: '米',
                    min: -1000,
                    max: 1000,
                    gridIndex: 0
                },{
                    name: '平方千米',
                    nameLocation:'middle',
                    min: 0,
                    max: 0.7,
                    gridIndex: 1
                }],
                yAxis: [{
                    name: '米',
                    min: -1000,
                    max: 1000,
                    gridIndex: 0,

                },{
                inverse: true,
                type: 'category',
                gridIndex: 1,
                data: ['体育会展', '东界', '洪坑', '林前', '鼓锣', '翔安市民公园', '浦边', '后村', '蔡厝'],
            }],
                legend: {  left: '18%',
                    top: '50%',
                   },
                series: [{
                    type: 'scatter',
                    name: '周边绿地',
                    symbol: 'rect',
                    symbolSize: 5,
                    data: green[0][station].value,
                    itemStyle: { color: 'green' }

                }, {
                    type: 'scatter',
                    name: '地铁站',
                    symbolSize: 10,
                    label: { show: true },
                    data: [{ 'name': station + '站', 'value': [0, 0] }],
                    itemStyle: { color: 'red' }

                }, {
                    type: 'line',
                    name: '地铁站周边600米',
                    symbolSize: 10,
                    smooth: 0.6,
                    symbol: 'none',
                    data: green[1],
                    lineStyle: { color: 'red', width: 5 },
                    itemStyle: { color: 'red' }
                }, {
                name: '地铁站周边600米绿地面积',
                type: 'bar',
                data: green[2],
                 xAxisIndex:1,
                  yAxisIndex :1,
                  label:{show:true,position:'right'},
                  itemStyle: { color: 'green' }

            }]
            }
            myChart5.setOption(option5)
        })
    })
}
//等时圈加载
function iso() {
    var station = myChart.getOption()
        .series[4]['data'][0]['name']
    $.getJSON('data/gis/' + station + '.json', function(iso) {

        var option_iso = {
            bmap: { zoom: 13 },
            visualMap: {
                max: 60,
                min:15,
                seriesIndex: 5,
                inRange: {
                    color: ['green', '#eac736', '#d94e5d']
                }
            },
            series: [{}, { label: { fontSize: 10 }, symbolSize: 10 }, { label: { fontSize: 10 }, symbolSize: 10 }, { label: { fontSize: 10 }, symbolSize: 10 }, {},
                {
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: iso,
                    label: { show: true },
                    lineStyle: {
                        width: 5
                    },
                    zlevel: 1

                }
            ]
        }
        myChart.setOption(option_iso)
    })
}
//衔接需求加载
function heatmap(id, sname) {

    $.getJSON('data/heatmap.json', function(heatmapdata) {
        var sers = 5
        series = [{}, { label: { fontSize: 20 }, symbolSize: 30 }, { label: { fontSize: 20 }, symbolSize: 30 }, { label: { fontSize: 20 }, symbolSize: 30 }, { label: { fontSize: 20 }, symbolSize: 30 }]
        if (id == 4) {
            series.push({ data: [] })
        } else {
            series.push({
                name: sname,
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: heatmapdata[id],
                symbol: 'rect',
                symbolSize: 14
            })
        }
        var option_heatmap = {
            bmap: {
                center: [118.2820, 24.575422],
                zoom: 15
            },
            visualMap: {
                max: 20,
                seriesIndex: sers,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: series
        }
        console.log(option_heatmap)
        myChart.setOption(option_heatmap)


    })
}