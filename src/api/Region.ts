import axios from "axios";

const getData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/region");
    return result.data;
  } catch (error) {
    return error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/region", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (payload: any) => {
  try {
    const result = await axios.put(
      `http://localhost:3002/region/${payload.id}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/region/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/region/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(
      `http://localhost:3002/region/upload`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updatePhoto = async (payload: any) => {
  const id = parseInt(payload.get("id"));
  try {
    const result = await axios.put(
      `http://localhost:3002/region/upload/${id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};

export const allFunc = {
  getData,
  create,
  update,
  findData,
  deleted,
  upload,
  updatePhoto,
};

export default allFunc;
