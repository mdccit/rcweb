import { ref } from 'vue'

export const usePackages = () => {
  const packages = ref([
    {
      role: 'player',
      label: 'Standard',
      name: 'Standard',
      value: 'standard',
      price: '$0.00',
      description: 'Enjoy a hassle-free experience as you explore our offerings without any commitment.',
      features: ['Profile Page Access', 'Newsfeed', 'Chat', 'Search', 'Network'
      , 'Resources' ]   },
    {
      role: 'player',
      label: 'Premium',
      name: 'Premium',
      value: 'premium',
      price: '$100.00',
      description: 'Unlock advanced features and enjoy enhanced services, priority support, and exclusive content for a seamless experience, all at an affordable monthly.',
      features: ['Profile Page Access', 'Manage school', 'Newsfeed', 'Chat', 'Search', 'Network'
      , 'Resources', 'Transript' ],
    },

    {
      role: 'coach',
      label: 'Standard',
      name: 'Standard',
      value: 'standard',
      price: '$0.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      features: ['Profile Page Access', 'Manage School', 'Newsfeed', 'Chat', 'Search', 'Network'
      , 'Resources'],
    },
    {
      role: 'coach',
      label: 'Premium',
      name: 'Premium',
      value: 'premium',
      price: '$100.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      features: ['Profile Page Access', 'Manage School', 'Newsfeed', 'Chat', 'Search', 'Network'
      , 'Resources', 'Transfer Tacker'],
    },
  ])

  return {
    packages,
  }
}
