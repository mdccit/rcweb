import { ref } from 'vue'

export const usePackages = () => {
  const packages = ref([
    {
      label: 'Standard',
      name: 'Standard',
      value: 'standard',
      price: '$0.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      label: 'Premium',
      name: 'Premium',
      value: 'premium',
      price: '$100.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ])

  return {
    packages,
  }
}
