#!/usr/bin/env sh

host="https://leach-chen.github.io/"

#仓库名称，和git上统一，新增仓库需修改
repo_android1="storeandroid1"
repo_flutter1="storeflutter1"
repo_h5game1="storeh5game1"
repo_ios1="storeios1"
repo_tool1="storetool1"
repo_vue1="storevue1"
repo_website1="storewebsite1"

#仓库url
repo_url_android1=$host$repo_android1
repo_url_flutter1=$host$repo_flutter1
repo_url_h5game1=$host$repo_h5game1
repo_url_ios1=$host$repo_ios1
repo_url_tool1=$host$repo_tool1
repo_url_vue1=$host$repo_vue1
repo_url_website1=$host$repo_website1

#资源前缀，区分资源类型，和资源名称前缀统一
android1="android1"
flutter1="flutter1"
h5game1="h5game1"
ios1="ios1"
tool1="tool1"
vue1="vue1"
website1="website1"





#资源type类型，和homeweb里面定义的类型统一,新增类型需修改
t_android_full_1="android_full_1"
t_android_animation_1="android_animation_1"
t_ios_full_1="ios_full_1"
t_flutter_full_1="flutter_full_1"
t_vue_full_1="vue_full_1"
t_website_css_1="website_css_1"
t_website_jekyll_1="website_jekyll_1"
t_website_hexo_1="website_hexo_1"
t_website_php_1="website_php_1"
t_game_synthesize_1="game_synthesize_1"
t_tool_full_1="tool_full_1"

#data js 文件路径,新增类型需修改
jsurl_android_full_1="android/data_android_full1.js"
jsurl_android_animation_1="android/data_android_animation1.js"
jsurl_ios_full_1="ios/data_ios_full1.js"
jsurl_flutter_full_1="flutter/data_flutter_full1.js"
jsurl_vue_full_1="vue/data_vue_full1.js"
jsurl_website_css_1="website/data_website_css1.js"
jsurl_website_jekyll_1="website/data_website_jekyll1.js"
jsurl_website_hexo_1="website/data_website_hexo1.js"
jsurl_website_php_1="website/data_website_php1.js"
jsurl_game_synthesize_1="game/data_game_synthesize1.js"
jsurl_tool_full_1="tool/data_tool_synthesize1.js"





#字段
thumbUrl=""
previewUrl=""
downloadUrl=""
description=""
type=""
author=""
authorurl=""
gitauthor=""
gitrepo=""
byauthor=""
byauthorurl=""

hosturl=""

for file in `ls .`
do
	array=(${file//_/ })  #将文件名以下划线分割成字符串数组
	count=0
	for var in ${array[@]}	#遍历字符串数组
	do
		count=$(($count+1)) 
		if [ $count -eq 1 ];
		  then
			if [ ${array[0]} = $android1 ];
				then
					hosturl=$repo_url_android1
			fi	

			if [ ${array[0]} = $flutter1 ];
				then
					hosturl=$repo_url_flutter1
			fi	
			
			if [ ${array[0]} = $h5game1 ];
				then
					hosturl=$repo_url_h5game1
			fi	

			if [ ${array[0]} = $ios1 ];
				then
					hosturl=$repo_url_ios1
			fi
			
			if [ ${array[0]} = $tool1 ];
				then
					hosturl=$repo_url_tool1
			fi
			
			if [ ${array[0]} = $vue1 ];
				then
					hosturl=$repo_url_vue1
			fi

			if [ ${array[0]} = $website1 ];
				then
					hosturl=$repo_url_website1
			fi					
		elif [ $count -eq 2 ];	#如果是第二个数据
		  then
			temp="temp"
		elif [ $count -eq 3 ];	#如果是第二个数据
		  then
			if [ ${var:0:1} = "t" ];
				then
					thumbUrl=$hosturl"/"${array[1]}"/"$file
			elif [ ${var:0:1} = "p" ];
				then
					previewUrl=$hosturl"/"${array[1]}"/"$file
			elif [ ${var:0:1} = "d" ];
				then
					downloadUrl=$hosturl"/"${array[1]}"/"$file		
			fi
		fi	
	done
done


if [ -z "$thumbUrl" ];
	then
		echo "请输入缩略图url(thumbUrl):"
		read thumb
		thumbUrl=$thumb
fi

if [ -z "$previewUrl" ];
	then
		echo "请输入预览url(previewUrl):"
		read pre
		previewUrl=$pre
fi


echo "----------------------------------"
echo "请输入资源描述(description):"
echo "----------------------------------"
read dec
description=$dec

#新增类型需修改
echo "----------------------------------"
echo "请选择资源分类:"
echo "(101) $t_android_full_1"
echo "(102) $t_android_animation_1"
echo "(201) $t_ios_full_1"
echo "(301) $t_flutter_full_1"
echo "(401) $t_vue_full_1"
echo "(501) $t_website_css_1"
echo "(502) $t_website_jekyll_1"
echo "(503) $t_website_hexo_1"
echo "(504) $t_website_php_1"
echo "(601) $t_game_synthesize_1"
echo "(701) $t_tool_full_1"
echo "----------------------------------"
read input
 
case $input in
    101)
		type=$t_android_full_1
		;;
	102)
		type=$t_android_animation_1
		;;
	201)
		type=$t_ios_full_1
		;;
	301)
		type=$t_flutter_full_1
		;;
	401)
		type=$t_vue_full_1
		;;
	501)
		type=$t_website_css_1
		;;	
	502)
		type=$t_website_jekyll_1
		;;	
	503)
		type=$t_website_hexo_1
		;;	
	504)
		type=$t_website_php_1
		;;	
	601)
		type=$t_game_synthesize_1
		;;
	701)
		type=$t_tool_full_1
		;;			
esac


echo "----------------------------------"
echo "请输入作者昵称(author):"
echo "----------------------------------"
read aut
author=$aut

echo "----------------------------------"
echo "请输入作者url(authorurl):"
echo "----------------------------------"
read auturl
authorurl=$aut

echo "----------------------------------"
echo "请输入Git作者名称(gitauthor):"
echo "----------------------------------"
read gitauturl
gitauthor=$gitauturl

echo "----------------------------------"
echo "请输入Git仓库名称(gitrepo):"
echo "----------------------------------"
read gitrep
gitrepo=$gitrep

echo "----------------------------------"
echo "请输入来自作者昵称(byauthor):"
echo "----------------------------------"
read byaut
byauthor=$byaut


echo "----------------------------------"
echo "请输入来自作者url(byauthorurl):"
echo "----------------------------------"
read byauturl
byauthorurl=$byauturl


if [ -z "$downloadUrl" ];
	then
	if [ -z "$gitrepo" ];
		then
			echo "请输入下载downloadUrl(downloadUrl):"
			read down
			downloadUrl=$down
	else
			downloadUrl="https://codeload.github.com/$gitauthor/$gitrepo/zip/master"
	fi
fi






thumbUrl=${thumbUrl//\//\\/}
previewUrl=${previewUrl//\//\\/}
downloadUrl=${downloadUrl//\//\\/}
description=${description//\//\\/}
type=${type//\//\\/}
author=${author//\//\\/}
authorurl=${authorurl//\//\\/}
gitauthor=${gitauthor//\//\\/}
gitrepo=${gitrepo//\//\\/}
byauthor=${byauthor//\//\\/}
byauthorurl=${byauthorurl//\//\\/}



json="\/\/replace\n  {\n    thumbUrl:\"$thumbUrl\",\n    previewUrl:\"$previewUrl\",\n    downloadUrl:\"$downloadUrl\",\n    description:\"$description\",\n    type:\"$type\",\n    author:\"$author\",\n    authorurl:\"$authorurl\",\n    gitauthor:\"$gitauthor\",\n    gitrepo:\"$gitrepo\",\n    byauthor:\"$byauthor\",\n    byauthorurl:\"$byauthorurl\",\n    sold:true\n  },"

echo $json

#https://www.cnblogs.com/kings-9/p/7738724.html



cd ../docs/.vuepress/public/js/data

jsurl=""

if [ $type = $t_android_full_1 ];
	then
		jsurl=$jsurl_android_full_1
fi	

if [ $type = $t_android_animation_1 ];
	then
		jsurl=$jsurl_android_animation_1
fi	

if [ $type = $t_ios_full_1 ];
	then
		jsurl=$jsurl_ios_full_1
fi	

if [ $type = $t_flutter_full_1 ];
	then
		jsurl=$jsurl_flutter_full_1
fi

if [ $type = $t_vue_full_1 ];
	then
		jsurl=$jsurl_vue_full_1
fi

if [ $type = $t_website_css_1 ];
	then
		jsurl=$jsurl_website_css_1
fi

if [ $type = $t_website_jekyll_1 ];
	then
		jsurl=$jsurl_website_jekyll_1
fi	

if [ $type = $t_website_hexo_1 ];
	then
		jsurl=$jsurl_website_hexo_1
fi	

if [ $type = $t_website_php_1 ];
	then
		jsurl=$jsurl_website_php_1
fi	

if [ $type = $t_game_synthesize_1 ];
	then
		jsurl=$jsurl_game_synthesize_1
fi	

if [ $type = $t_tool_full_1 ];
	then
		jsurl=$jsurl_tool_full_1
fi	


sed -i "s/\/\/replace/${json}/g" $jsurl


read -p "Press any key to continue." var