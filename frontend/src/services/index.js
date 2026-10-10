import axios from 'axios';

// The backend is served under /api on the same domain: by Vercel in production,
// and by the Vite dev server proxy locally (see vite.config.mjs)
const baseURL = '/api';

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')

  },
  //add request for get clothing
  getClothing: async () => {
    return await service.get('/getClothing')
  },

//add request for get clothing
getPrints: async () => {
  return await service.get('/getPrints')
},
newCollab: async (state) => {
  return await service.post('/savenewCollab',state)
},
getMycollab: async () => {
  return await service.get('/Amaken')
  
},
getMycollabs: async () => {
  return await service.get('/getMycollabs')
},
getallcollabs: async () => {
  return await service.get('/getallcollabs')
},
makelive: async (id) => {
  return await service.post('/shift',id)
},
notlive: async (id) => {
  return await service.post('/unshift',id)
}
};

export default actions;
