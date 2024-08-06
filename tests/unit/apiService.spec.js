// tests/unit/apiService.spec.js
import createApiService from '@/services/apiService';

describe('apiService', () => {
  const config = {
    apiUrl: 'http://localhost:8000/api/v2',
    accessKey: 'test-access-key',
    defaultLang: 'en',
  };
  const apiService = createApiService(config);

  it('should be defined', () => {
    expect(apiService).toBeDefined();
  });

  it('should have getRequest method', () => {
    expect(apiService.getRequest).toBeDefined();
  });

  it('should have postRequest method', () => {
    expect(apiService.postRequest).toBeDefined();
  });

  it('should have putRequest method', () => {
    expect(apiService.putRequest).toBeDefined();
  });

  it('should have deleteRequest method', () => {
    expect(apiService.deleteRequest).toBeDefined();
  });

  it('should have patchRequest method', () => {
    expect(apiService.patchRequest).toBeDefined();
  });
});
