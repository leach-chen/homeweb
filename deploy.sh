#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git add -A
#git commit -m 'update docs'
#git push -f git@github.com:leach-chen/leach-chen.github.io.git master 不能执行该指令

cp -R dist/* ../../../leach-chen.github.io

cd ../../../leach-chen.github.io

./commit.sh

cd -

read -p "Press any key to continue." var
