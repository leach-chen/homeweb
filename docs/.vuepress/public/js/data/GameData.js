var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var shootGameDataList = [
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
  {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Game",type:co.GAME_T_FULL,sold:true},
];


function getGameAllData()
{
  dataList = shootGameDataList
  return dataList
}

export
{
  shootGameDataList,
  getGameAllData
}
