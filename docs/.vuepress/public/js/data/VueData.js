var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullVueDataList = [
  {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 Vue",type:co.VUE_T_FULL},
];


function getVueAllData()
{
  dataList = fullVueDataList
  return dataList
}

export
{
  fullVueDataList,
  getVueAllData
}