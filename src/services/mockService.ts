import axios from "axios";

export const getPlaces = async () => {
    const res = await axios.get('http://localhost:4000/places');
    return res.data;
  };