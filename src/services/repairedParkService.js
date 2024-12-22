import api from './api';

const repairedParkService = {
  getAllRepairs: async () => {
    const response = await api.get('/repaired-parks');
    if (!response.data || !response.data.data) {
      throw new Error('Invalid response format from server');
    }
    return {
      data: Array.isArray(response.data.data) ? response.data.data : [],
      status: response.data.status,
      message: response.data.message
    };
  },

  getRepairById: async (id) => {
    const response = await api.get(`/repaired-parks/${id}`);
    return response.data;
  },

  createRepair: async (repairData) => {
    console.log('Creating repair with data:', repairData);

    const formData = new FormData();
    
    // Add required fields
    formData.append('damaged_park_id', repairData.damaged_park_id);
    formData.append('repair_description', repairData.repair_description);
    
    // Add image if exists
    if (repairData.images) {
      formData.append('images', repairData.images);
    }

    // Log the FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const response = await api.post('/repaired-parks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Server response:', response);

    if (!response.data || response.data.status !== 'success') {
      throw new Error(response.data?.message || 'Failed to create repair record');
    }

    return response.data;
  },

  updateRepair: async (id, repairData) => {
    const formData = new FormData();
    Object.keys(repairData).forEach(key => {
      if (key === 'images' && repairData[key]) {
        formData.append(key, repairData[key]);
      } else {
        formData.append(key, repairData[key]);
      }
    });

    const response = await api.put(`/repaired-parks/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteRepair: async (id) => {
    const response = await api.delete(`/repaired-parks/${id}`);
    return response.data;
  },
};

export default repairedParkService;
