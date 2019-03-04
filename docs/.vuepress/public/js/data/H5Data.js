var host = "https://www.leachchen.com/storewebsite1/"

var co= require('./Constant.js');

var dataList = []

var t_imagepreviewhost="http://www.leachchen.com/imagepreview/h5/"
var p_imagepreviewhost="http://www.leachchen.com/imagepreview/h5/"

var cssDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 h5",type:co.H5_T_CSS,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
    {
        thumbUrl: t_imagepreviewhost+"/css/thumb/t_h5css1_20190303.jpg",
        previewUrl: host+"1/preview",
        downloadUrl: host+"1/highway.zip",
        description:"旅游类型的纯CSS网站",
        type:co.PATH_H5_CSS,
        author:"模板之家",
        authorurl:"http://www.cssmoban.com",
        repo:"",
        fromauthor:"admin",
        fromauthorurl:"",
        from:co.FROM_DEFAULT,
        sold:true
      },
];
  
var jekyllDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 JEKYLL",type:co.H5_T_JEKYLL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var hexoDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 HEXO",type:co.H5_T_HEXO,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var phpDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 PHP",type:co.H5_T_PHP,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
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