#!/usr/bin/env sh



repo_android1="storeandroid1"
repo_flutter1="storeflutter1"
repo_h5game1="storeh5game1"
repo_ios1="storeios1"
repo_tool1="storetool1"
repo_vue1="storevue1"
repo_website1="storewebsite1"

android1="android1"
flutter1="flutter1"
h5game1="h5game1"
ios1="ios1"
tool1="tool1"
vue1="vue1"
website1="website1"



firstpath=""
#basepath=$(cd `dirname $0`; pwd)
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
					firstpath=$repo_android1
			elif [ ${array[0]} = $flutter1 ];
				then
					firstpath=$repo_flutter1
			elif [ ${array[0]} = $h5game1 ];
				then
					firstpath=$repo_h5game1
			elif [ ${array[0]} = $ios1 ];
				then
					firstpath=$repo_ios1
			elif [ ${array[0]} = $tool1 ];
				then
					firstpath=$repo_tool1
			elif [ ${array[0]} = $vue1 ];
				then
					firstpath=$repo_vue1
			elif [ ${array[0]} = $website1 ];
				then
					firstpath=$repo_website1		
			fi
		elif [ $count -eq 2 ];	#如果是第二个数据
		  then
			if [ -d "../../"$firstpath ]; #如果storeandroid1文件夹存在
				then
					cd "../../"$firstpath	#进入storeandroid1文件夹
					if [ ! -d ${array[1]} ];#如果文件夹1不存在
						then
							echo "文件夹-->"${array[1]}" 不存在，将创建"
							mkdir ${array[1]}	#创建文件夹1
					fi
					cd "../manager/dispense" #退出stroeandroid1文件夹
					#cp -arf $file ${array[0]}/${array[1]}
					mv $file "../../"$firstpath/${array[1]} #将外面的文件剪切到storeandroid/1目录下	
					echo "拷贝"	$file "文件到" $firstpath/${array[1]} "目录下"
			else 
				echo $firstpath"文件夹不存在"
			fi		
			break
		fi	
	done
done

read -p "Press any key to continue." var
