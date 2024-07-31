<template>
  <div>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto mt-10">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <div v-if="error" class="mt-4">
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ error }}</span>
      </div>
    </div>
    <div v-if="successMessage" class="mt-4">
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ successMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '~/services/mockAuthService'
import { useUserStore } from '~/stores/userStore'

const email = ref('')
const password = ref('')
const error = ref('')
const successMessage = ref('')

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = async () => {
  try {
    error.value = ''
    successMessage.value = ''
    const response = await login(email.value, password.value)
    if (response.status === 200) {
      successMessage.value = response.display_message
      userStore.setUser({
        email: email.value,
        role: response.data.role,
        token: response.data.token
      })
      localStorage.setItem('token', response.data.token)  // Set token in local storage
      router.push('/admin/dashboard')
    } else {
      error.value = response.display_message
    }
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}
</style>
