var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var fullAndroidDataList = [
  {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 Android",type:co.ANDROID_T_FULL},
];


function getAndroidAllData()
{
  dataList = fullAndroidDataList
  return dataList
}

export
{
  fullAndroidDataList,
  getAndroidAllData
}
