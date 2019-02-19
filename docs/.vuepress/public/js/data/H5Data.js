var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var cssDataList = [
    {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 h5",type:co.H5_T_CSS,sold:true},
];
  
var jekyllDataList = [
    {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 JEKYLL",type:co.H5_T_JEKYLL,sold:true},
];

var hexoDataList = [
    {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 HEXO",type:co.H5_T_HEXO,sold:true},
];

var phpDataList = [
    {thumb: host+"001/thumb/demo.png",preview: host+"001/source/",download: host+"001/download/before.zip",description:"旅游风格的H5网站 PHP",type:co.H5_T_PHP,sold:true},
];

function getH5AllData()
{
    dataList = cssDataList.concat(jekyllDataList).concat(hexoDataList).concat(phpDataList)
    return dataList
}


export
{
    cssDataList,
    jekyllDataList,
    hexoDataList,
    phpDataList,
    getH5AllData
}