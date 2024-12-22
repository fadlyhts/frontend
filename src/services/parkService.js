import api from './api';

const parkService = {
  getParkList: async () => {
    const response = await api.get('/parks');
    return response.data;
  },

  getParkById: async (id) => {
    const response = await api.get(`/parks/${id}`);
    return response.data;
  },

  getAllParks: async () => {
    const response = await api.get('/parks');
    if (!response.data || !response.data.data) {
      throw new Error('Invalid response format from server');
    }
    return response.data;
  },

  createPark: async (parkData) => {
    const formData = new FormData();
    Object.keys(parkData).forEach(key => {
      if (key === 'facilities' && Array.isArray(parkData[key])) {
        // Convert array to JSON string to preserve array structure
        formData.append(key, JSON.stringify(parkData[key]));
      } else if (key === 'images' && parkData[key]) {
        formData.append(key, parkData[key]);
      } else {
        formData.append(key, parkData[key]);
      }
    });

    const response = await api.post('/parks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  updatePark: async (parkId, parkData) => {
    const formData = new FormData();
    Object.keys(parkData).forEach(key => {
      if (key === 'facilities' && Array.isArray(parkData[key])) {
        // Convert array to JSON string to preserve array structure
        formData.append(key, JSON.stringify(parkData[key]));
      } else if (key === 'images' && parkData[key]) {
        formData.append(key, parkData[key]);
      } else {
        formData.append(key, parkData[key]);
      }
    });

    const response = await api.put(`/parks/${parkId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deletePark: async (parkId) => {
    const response = await api.delete(`/parks/${parkId}`);
    return response.data;
  },

  searchParks: async (query) => {
    const response = await api.get(`/parks/search?query=${query}`);
    if (!response.data || !response.data.data) {
      throw new Error('Invalid response format from server');
    }
    return response.data;
  },
};

export default parkService;
