let table1 =
  [
    {"t":"下城国际创新发展公司","a":120,"b":130,"c":140,"d":150,"e":160,"f":170},
    {"t":"下城国际产业发展公司","a":120,"b":130,"c":140,"d":150,"e":160,"f":170},
    {"t":"合计","a":120,"b":130,"c":140,"d":150,"e":160,"f":170}
  ]

let categoryData =
  {
    "nameList":["市场化投资","政策性投资","国投产业发展","国投创新发展","总体"],
    "numberList":["280","280","280","280","280"],
    "rMoneyList":["7","7","7","7","7"],
    "sMoneyList":["9","9","9","9","9"]
  }

let pieData =
  [
    {"name":"通信","value":50},
    {"name":"计算机","value":40},
    {"name":"环保","value":30},
    {"name":"行业四","value":20},
    {"name":"行业五","value":15},
    {"name":"行业六","value":10},
  ]

let funnelData =
  [
    {"name":"投资线索","value":50},
    {"name":"投资过程中","value":40},
    {"name":"投后管理","value":30},
    {"name":"推出","value":20},
    {"name":"结束","value":10},
  ]

module.exports = { categoryData, pieData, funnelData }

