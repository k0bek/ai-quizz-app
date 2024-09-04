import axios from 'axios';
import { API_BASE_URL, updateQuizStatusUrl } from '@/constants/api';

export const updateQuizStatus = async (id: string, newStatus: 'Active' | 'Inactive') => {
  try {
    const response = await axios.patch(
      updateQuizStatusUrl(id), 
      { status: newStatus }, 
      {
        headers: {
          'Content-Type': 'application/json-patch+json'
        },
        baseURL: API_BASE_URL, 
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          throw new Error('Quiz not found');
        } else if (status === 400) {
          throw new Error('Invalid request');
        } else if (status === 401) {
          throw new Error('Unauthorized access');
        } else if (status === 500) {
          throw new Error('Server error');
        }
      }
    }
    throw new Error('Failed to update quiz status');
  }
};
