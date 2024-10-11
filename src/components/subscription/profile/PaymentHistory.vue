<template>

  <div class="card rounded-2xl overflow-hidden border border-lightSteelBlue bg-white w-full p-8 mt-3">
    <h2 class="text-2xl font-bold mb-6 text-black">Subscription & Billing</h2>
    <hr class="mt-5 mb-3 text-pigeonBlue">

    <h3 class="font-semibold text-xl mb-4 text-black">Payment history</h3>
    <p class="text-sm text-darkSlateBlue mb-4"> Lorem ipsum is a placeholder text commonly used to demonstrate the
      visual form of a document or a typeface without relying on meaningful content.</p>

    <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
      <table class="min-w-full border-collapse">
        <thead>
          <tr>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
            <td class="text-black p-1 font-semibold text-sm">$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
      <table class="min-w-full border-collapse">
        <thead>
          <tr>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
            <td class="text-black p-1 font-semibold text-sm">$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
      <table class="min-w-full border-collapse">
        <thead>
          <tr>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
            <td class="text-black p-1 font-semibold text-sm">$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card rounded-2xl overflow-hidden border border-gainsboroGray bg-white w-full p-2 mt-3">
      <table class="min-w-full border-collapse">
        <thead>
          <tr>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Date</th>
            <th class="p-1 text-left text-darkSlateBlue text-xs">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-black p-1 font-semibold text-sm">2024 05 01</td>
            <td class="text-black p-1 font-semibold text-sm">$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePackageStore } from '@/stores/packageStore';
import { useNuxtApp, useRuntimeConfig } from '#app';
// Access authService from the context
const nuxtApp = useNuxtApp();
const RuntimeConfig = useRuntimeConfig().public;

const $subscriptionService = nuxtApp.$subscriptionService;


</script>