rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "update dist"
git branch -M main
git remote add origin git@github.com:TsaiJie/vue-ui-website.git
git push -f -u origin main
cd ..