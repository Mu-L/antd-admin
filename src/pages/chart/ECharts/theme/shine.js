import * as echarts from 'echarts'

let colorPalette = [
    '#c12e34',
    '#e6b600',
    '#0098d9',
    '#2b821d',
    '#005eaa',
    '#339ca8',
    '#cda819',
    '#32a487',
  ]

  let theme = {
    color: colorPalette,

    title: {
      fontWeight: 'normal',
    },

    visualMap: {
      color: ['#1790cf', '#a2d4e6'],
    },

    toolbox: {
      iconStyle: {
        borderColor: '#06467c',
      },
    },

    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },

    dataZoom: {
      dataBackgroundColor: '#dedede',
      fillerColor: 'rgba(154,217,247,0.2)',
      handleColor: '#005eaa',
    },

    timeline: {
      lineStyle: {
        color: '#005eaa',
      },
      controlStyle: {
        color: '#005eaa',
        borderColor: '#005eaa',
      },
    },

    candlestick: {
      itemStyle: {
        color: '#c12e34',
        color0: '#2b821d',
        lineStyle: {
          width: 1,
          color: '#c12e34',
          color0: '#2b821d',
        },
      },
    },

    graph: {
      color: colorPalette,
    },

    map: {
      label: { color: '#c12e34' },
      itemStyle: {
        borderColor: '#eee',
        areaColor: '#ddd',
      },
      emphasis: {
        label: { color: '#c12e34' },
        itemStyle: {
          areaColor: '#e6b600',
        },
      },
    },

    gauge: {
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#2b821d'], [0.8, '#005eaa'], [1, '#c12e34']],
          width: 5,
        },
      },
      axisTick: {
        splitNumber: 10,
        length: 8,
        lineStyle: {
          color: 'auto',
        },
      },
      axisLabel: {
        color: 'auto',
      },
      splitLine: {
        length: 12,
        lineStyle: {
          color: 'auto',
        },
      },
      pointer: {
        length: '90%',
        width: 3,
        color: 'auto',
      },
      title: {
        color: '#333',
      },
      detail: {
        textStyle: {
          color: 'auto',
        },
      },
    },
  }
if (echarts && typeof echarts.registerTheme === 'function') {
  echarts.registerTheme('shine', theme)
} else {
  // Console may be used only to report theme registration failure; suppress lint here
  // eslint-disable-next-line no-console
  if (typeof console !== 'undefined' && console.error) console.error('ECharts is not loaded, failed to register shine theme')
}
