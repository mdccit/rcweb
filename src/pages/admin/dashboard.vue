<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="p-6 lg:p-8 bg-white border-b border-gray-200">
        <h1 class="mt-8 text-6xl mb-8 font-bold">
          Welcome!
        </h1>
        <p class="text-gray-700 leading-relaxed">
          You're logged in as an admin. This is the admin dashboard. You can manage your application from here.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div class="p-6 border border-border rounded-lg">
            <h3 class="text-lg font-semibold mb-2">
              Company Resources</h3>
            <p>To see these you need to be logged into your @recruited.pro Google Workspace account.
              <b>
                Please do not use @gmail.com accounts for business purposes.
              </b>
            </p>
            <ul class="list-disc list-inside">
              <li>
                <a href="https://docs.google.com/document/d/1d5PpzRerGT3kHNmuX-OeRuXqFPN3jzTQSrZwkQVFUCA/edit?usp=drive_link"
                  class="text-blue-500 hover:underline">
                  [Doc] Company handbook
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/18vUxFSKUwlmSyMTZ-UQG4Oqd6x3rWWAj?usp=drive_link"
                  class="text-blue-500 hover:underline">
                  Resources for everyone
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1NE1jwYNCckNy40uzYrVutCFHW-VBunh6?usp=drive_link"
                  class="text-blue-500 hover:underline">Marketing resources</a>
              </li>
            </ul>
          </div>
          <div class="p-6 border border-border rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Be Careful with Emails</h3>
            <p>Do not send emails to people who have opted out. Do not change email settings without the user's prior
              permission.
              <b> Do not send marketing emails more than ONCE A MONTH using this panel.

              </b>
            </p>
            <p class="mt-4">
              Emails may not be delivered to users. Log in to Zeptomail using Bitwarden credentials to check why.
            </p>
          </div>
          <div class="p-6 border border-border rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Security Reminder

            </h3>
            <p>Store passwords and 2FA tokens in Bitwarden.
              <b>
                Make sure each password is as long as possible and IS NOT MEMORABLE. YOU SHOULD ONLY REMEMBER YOUR
                BITWARDEN (and, optionally, Google Workspace) PASSWORD.)
              </b>
              Do not share sensitive credentials with anyone, even if they ask you to, in any message format.
            </p>
          </div>
          <div class="p-6 border border-border rounded-lg">
            <h3 class="text-lg font-semibold mb-2 text-red-500">
              Legal Reminder
            </h3>
            <p>
              Regularly check the legal@recruited.pro email address for copyright takedown, abuse and moderation
              requests. To see shared inboxes, go to
              <a href="//groups.google.com"><b>groups.google.com

                </b>
              </a>
              and log in with your FirstName@recruited.pro address.
            </p>
          </div>
        </div>
      </div>
      <div class="my-16">

      </div>
    </div>
  </div>

</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
// import DataTable from '~/components/EPDataTable.vue';
// import ImageUpload from '~/components/common/ImageUpload.vue'

const userStore = useUserStore()

definePageMeta({
  ssr: false,
  layout: 'admin',
  middleware: ['role'],
  requiredRole: ['admin'],
});

</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
