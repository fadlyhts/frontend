import api from './api';

const damagedParkService = {
  getAllDamagedParks: async () => {
    const response = await api.get('/damaged-parks');
    if (!response.data || !response.data.data) {
      throw new Error('Invalid response format from server');
    }
    return {
      data: Array.isArray(response.data.data) ? response.data.data : [],
      status: response.data.status,
      message: response.data.message
    };
  },

  getDamagedParkById: async (id) => {
    const response = await api.get(`/damaged-parks/${id}`);
    return response.data;
  },

  createDamagedPark: async (damageData) => {
    const formData = new FormData();
    
    // Add basic data
    formData.append('park_id', damageData.park_id);
    formData.append('damage_description', damageData.damage_description);
    
    // Add image if exists
    if (damageData.images) {
      formData.append('images', damageData.images);
    }

    const response = await api.post('/damaged-parks/report', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.data || response.data.status !== 'success') {
      throw new Error(response.data?.message || 'Failed to submit damage report');
    }

    return response.data;
  },

  updateDamagedParkStatus: async (id, statusData) => {
    const response = await api.put(`/damaged-parks/${id}`, statusData);
    return response.data;
  },

  deleteDamagedPark: async (id) => {
    const response = await api.delete(`/damaged-parks/${id}`);
    return response.data;
  },

  // Get damage reports by park ID
  getDamagedParksByParkId: async (parkId) => {
    const response = await api.get(`/damaged-parks/park/${parkId}`);
    return response.data;
  },

  // Get damage reports by user ID
  getDamagedParksByUserId: async (userId) => {
    const response = await api.get(`/damaged-parks/user/${userId}`);
    return response.data;
  },

  getMyDamagedParks: async () => {
    const response = await api.get('/damaged-parks/my-reports');
    if (!response.data || !response.data.data) {
      throw new Error('Invalid response format from server');
    }
    return {
      data: Array.isArray(response.data.data) ? response.data.data : [],
      status: response.data.status,
      message: response.data.message
    };
  },
};

export default damagedParkService;
