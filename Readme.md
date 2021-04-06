# Backend Deployment:

1. Git clone Ironclad `https://github.com/Tzikas/IronPlate.git`

2. Remove github directory `rm -rf .git`

3. Make new github repository. `git init`,`git add .`, `git commit -m "Deployment"......`

4. Replace <b>MONGODB_URI</b> with your own Mongodb link from Atlas.

5. Go to Heroku -> Create New App -> Select Your project from github repository -> Enable automatic deploy -> Deploy Branch.

6. Add all .env variables to <b>Config vars</b> in Heroku

7. In frontend/api.js, switch your baseurl with your heroku endpoint (ex. https://iron-clad.heroku.com)

# FrontEnd Deployment:

1. Go to Netlify.com -> Click New Site -> Select your Repo from Github

2. Into Basic Build Settings,paste these -> `cd frontend && npm i && npm run build` in Build Command -> `frontend/build` in Publish Directory.

3. Advanced Build Settings,paste these -> `{CI: false} in new variables.
