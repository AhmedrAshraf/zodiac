# IronPlate
##### git fork and/or clone https://github.com/Tzikas/IronPlate.git
## Requirements
##### Node 22+ (Node 24 LTS recommended, run `nvm use`)

## Set up DB (Supabase)
##### Create a project at supabase.com
##### SQL Editor -> New query -> paste backend/supabase/schema.sql -> Run
##### Copy backend/.env.example to backend/.env and fill in SUPABASE_URL and SUPABASE_SECRET_KEY (Project Settings -> API Keys)
##### Optional: seed sample clothing with `node bin/seeds.js` from backend/

## Start Server
##### cd backend/ 
##### npm i 
##### npm run dev
##### Runs on http://localhost:5001 (5000 is taken by AirPlay on macOS); the frontend proxies /api to it


## Start client
##### cd frontend/ 
##### npm i 
##### npm start

## Deploy to Heroku
##### heroku create 
##### git add . 
##### git commit -m 'deploying' 
##### git push
##### git push heroku master
##### add config vars for SUPABASE_URL, SUPABASE_SECRET_KEY and SESSION_SECRET in heroku dashboard


## Deploy to Vercel
##### Import the repo on vercel.com; vercel.json deploys frontend (/) and backend (/api) as Services on one domain
##### Add environment variables SUPABASE_URL, SUPABASE_SECRET_KEY and SESSION_SECRET (a long random string)
##### Deploy

