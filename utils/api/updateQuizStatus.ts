import axios from 'axios';

export const updateQuizStatus = async (id: string, newStatus: 'Active' | 'Inactive') => {
  console.log(id);
  
  try {
    const response = await axios.patch(`/api/quiz/${id}/status`, JSON.stringify(newStatus), {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.log(error.response.data)
        console.log(error.response.headers)

        throw new Error('Quiz not found');
      } else if (error.response?.status === 400) {
       
        throw new Error('Invalid request');
      }
    }
    throw new Error('Failed to update quiz status');
  }
};

