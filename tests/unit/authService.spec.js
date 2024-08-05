// tests/unit/authService.spec.js
import createAuthService from '@/services/authService';

describe('authService', () => {
  const mockApiService = {
    getRequest: jest.fn(),
    postRequest: jest.fn(),
    putRequest: jest.fn(),
    deleteRequest: jest.fn(),
    patchRequest: jest.fn(),
  };

  const authService = createAuthService(mockApiService);

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should have login method', () => {
    expect(authService.login).toBeDefined();
  });

  it('should have register method', () => {
    expect(authService.register).toBeDefined();
  });

  it('should have getGoogleAuthUrl method', () => {
    expect(authService.getGoogleAuthUrl).toBeDefined();
  });

  it('should have googleLogin method', () => {
    expect(authService.googleLogin).toBeDefined();
  });

  it('should have googleRegister method', () => {
    expect(authService.googleRegister).toBeDefined();
  });
});
