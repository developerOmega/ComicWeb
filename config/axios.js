import axios from 'axios';

const getReq = async (link) => {
  try {
    const req = await axios.get(link);
    return req.data.data.results;    
  } catch (error) {
    console.error(error);
    return [];
  }
}

const getParams = async (link) => {
  try {
    const req = await axios.get(link);
    delete req.data.data.results;
    return req.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { getReq, getParams };