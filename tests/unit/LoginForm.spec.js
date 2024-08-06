import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  it('renders a form with email and password fields', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
  });

  it('emits submit event with email and password on form submit', async () => {
    const wrapper = shallowMount(LoginForm);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    emailInput.setValue('test@example.com');
    passwordInput.setValue('password123');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted().submit[0]).toEqual(['test@example.com', 'password123']);
  });
});
