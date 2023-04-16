import axios from 'axios';
import getQuestions from '../services/getQuestions';
import { commonUrl } from '../services/commonUrl'

const questionUrl = commonUrl;
jest.mock('axios');

describe('getQuestions', () => {
  it('should return an array of questions for a given patient and activity ID', async () => {
    const patientId = '123';
    const activityId = '456';
    const data = [{ id: 1, question: 'Question 1' }, { id: 2, question: 'Question 2' }];
    axios.get.mockResolvedValue({ data });

    const result = await getQuestions(patientId, activityId);

    expect(axios.get).toHaveBeenCalledWith(`${questionUrl}/patients${patientId}/activity${activityId}`);
    expect(result).toEqual(data);
  });

  it('should throw an error for an invalid patient ID', async () => {
    const patientId = 'invalid';
    const activityId = '3';
    axios.get.mockRejectedValue(new Error('Invalid patient ID'));

    await expect(getQuestions(patientId, activityId)).rejects.toThrow('Invalid patient ID');
  });

  it('should throw an error for an invalid activity ID', async () => {
    const patientId = '123';
    const activityId = 'invalid';
    axios.get.mockRejectedValue(new Error('Invalid activity ID'));

    await expect(getQuestions(patientId, activityId)).rejects.toThrow('Invalid activity ID');
  });

  it('should throw an error for a missing patient ID', async () => {
    const patientId = '';
    const activityId = '3';

    await expect(getQuestions(patientId, activityId)).rejects.toThrow('Missing patient ID');
  });

  it('should throw an error for a missing activity ID', async () => {
    const patientId = '123';
    const activityId = '';

    await expect(getQuestions(patientId, activityId)).rejects.toThrow('Missing activity ID');
  });
});