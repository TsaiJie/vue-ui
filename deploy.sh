rm -rf dist_website
yarn build
cd dist_website
git init
git add .
git commit -m "update dist_website"
git branch -M main
git remote add origin git@github.com:TsaiJie/vue-ui-website.git
git push -f -u origin main
cd ..