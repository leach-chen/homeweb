var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullPracticalDataList = [
  {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 Tool",type:co.TOOL_T_FULL,sold:true},
];


function getToolAllData()
{
  dataList = fullPracticalDataList
  return dataList
}

export
{
  fullPracticalDataList,
  getToolAllData
}