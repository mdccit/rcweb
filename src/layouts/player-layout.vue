<template>
  <div>
    <!-- Notification component -->
    <Notification v-if="showNotification" :message="notificationMessage" :type="notificationType"
      :visible="showNotification" @close="closeNotification" :key="notificationKey" />
  </div>
  <NavBarPublic></NavBarPublic>
  <main class="bg-graySnowDrift">
    
    <div class="container-compressed">
      <div class="grid grid-cols-6 gap-4 temp-row grid-rows-[70px_auto] mt-16 pt-4">
        <div class="row-span-2 col-span-1 ">
          <playerProfileLeft :data="leftData"  :userSlug="route.params.slug"  />
        </div>
        <div class="col-start-2 col-span-5 mt-4">
          <playerProfileHedarer @changeTab="setSelectedTab" :playerId="playerID" :userSlug="route.params.slug" />
        </div>
        <div class="col-start-2 col-span-4 bg-brown-500">
          <!-- Content changes based on the selected tab -->
          <UserFeed v-if="tab === 'feed'" :posts="posts" @listpost="loadInitfintePost" :commentHidden="isHidddenComment"/>
          <Connection v-if="tab === 'connection'" :playerId="playerID" @profileView="redirectPage" />
          <mediaTab v-if="tab === 'media'" :galleryItems="galleryItems" :userSlug="route.params.slug" @uploadMedia="fetchUserDetailsBySlug" />

        </div>
        <div>
          <playerProfileRight :data="utrData"  :userSlug="route.params.slug" />
        </div>
      </div>
    </div>
    
  </main>
  <FooterPublic></FooterPublic>
</template>

<script setup>
import playerProfileLeft from '~/components/profiles/player/layout/playerProfileLeft.vue';
import playerProfileRight from '~/components/profiles/player/layout/playerProfileRight.vue';
import playerProfileHedarer from '~/components/profiles/player/layout/playerProfileHeader.vue';
import playerProfileFeed from '~/components/profiles/player/layout/playerProfileFeed.vue';
import NavBarPublic from '~/components/user/navbar.vue';
import FooterPublic from '~/components/user/user-footer.vue';
import { ref, watchEffect, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Notification from '~/components/common/Notification.vue'; // <-- Ensure this path is correct!
import { useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import UserFeed from '~/components/user/profile/userFeed.vue';
// import Connection from '~/components/user/profile/connection.vue';
import mediaTab from '~/components/profiles/player/tabs/mediaTab.vue';
import Connection from '~/components/user/profile/connection.vue';

const router = useRouter();

const nuxtApp = useNuxtApp();


const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('');
const notificationKey = ref(0);

// Sync the state from the notification plugin to the layout
watchEffect(() => {
    showNotification.value = nuxtApp.$notification.showNotification.value;
    notificationMessage.value = nuxtApp.$notification.notificationMessage.value;
    notificationType.value = nuxtApp.$notification.notification_type.value;
    notificationKey.value = nuxtApp.$notification.notificationKey.value;
});

const closeNotification = () => {
    showNotification.value = false; // Hide the notification
};

const tab = ref('feed'); // Default tab is 'feed'

// Function to update the selected tab
const setSelectedTab = (selectedTab) => {
    tab.value = selectedTab;
};


const $publicService = nuxtApp.$publicService;
const $userService = nuxtApp.$userService;
const $feedService = nuxtApp.$feedService;
const userStore = useUserStore();
const route = useRoute();

const bio = ref('');
const country = ref('');
const city = ref('');
const heigth = ref('');
const weight = ref('');
const graduationDate = ref('');
const birthday = ref('');
const budgetMin = ref('')
const budgetMax = ref('')
const name = ref('')
const joinDate = ref('')
const utr = ref(0)
const gpa = ref("Unknown")
const sat = ref("Unknown")
const toefl = ref("Unknown")
const atp = ref("Unknown")
const itf = ref("Unknown")
const feet = ref(0)
const pounds = ref(0)
const posts = ref([])

const userId = ref('')
const playerID = ref('')
const sportName = ref('')
const email = ref('')
const phone = ref('')
const wtn = ref('')
const act = ref('')
const nationalRanking = ref('')
const gender = ref('')
const nationality = ref('')
const handness = ref('')
const preferredSurface = ref('')
const phoneCode = ref('')
const userRole = ref(null)
const addressLine01 = ref('');
const addressLine02 = ref('');
const stateProvince = ref('');
const slug = ref('');
const utrData = ref({})
const leftData = ref({})
const media_info = ref();
const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});
const currentPage = ref(1)
const lastPage  =ref('')
const isHidddenComment = ref([])

onMounted(() => {
    slug.value = route.params.slug;

  if (slug) {
    fetchUserDetails();
   // fetchUserDetailsBySlug();
  }
  userId.value = userStore.user?.user_id || null;
  // console.log(props.user?.user_basic_info?.id)
  //  playerID.value = props.user?.user_basic_info?.id || null;
  //userRole.value = userStore.user?.role || null;

    if (playerID.value != null) {
        // fetchConnections();
       // fetchPost();
        //  fetchCheckConnection();
        // fetchMediaGallery();
        loadInitfintePost()
    }
});

const fetchUserDetails = async () => {
    try {
        const dataSets = await $publicService.get_player(route.params.slug);
        playerID.value = dataSets.user_basic_info.id || null;
        if (dataSets.user_basic_info) {
            bio.value = dataSets.user_basic_info.bio ?? "User has not entered bio"
            name.value = dataSets.user_basic_info.display_name ?? "User has not entered name";


            const birthDate = new Date(dataSets.user_basic_info.date_of_birth);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            birthday.value = age ?? 'User has not entered birthday'

            const date = new Date(dataSets.user_basic_info.joined_at);
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const year = date.getFullYear();
            const month = monthNames[date.getMonth()];
            const day = date.getDate();
            joinDate.value = `${year} ${month} ${day}`

            nationality.value = dataSets.user_basic_info.nationality ?? "User has not entered nationality"
            email.value = dataSets.user_basic_info.email ?? "User has not entered email"
            gender.value = dataSets.user_basic_info.gender ?? "User has not entered gender"

        }


        if (dataSets.user_address_info) {
            country.value = dataSets.user_address_info.country ?? 'User has not entered country'
            city.value = dataSets.user_address_info.city ?? 'User has not entered city'
            addressLine01.value = dataSets.user_address_info.address_line_1 ?? 'User has not entered address line 01'
            addressLine02.value = dataSets.user_address_info.address_line_2 ?? 'User has not entered address line 02'
            stateProvince.value = dataSets.user_address_info.state_province ?? 'User has not entered stare provice'
        }

        if (dataSets.user_phone_info) {
            phone.value = dataSets.user_phone_info.phone_number ?? 'User has not entered phone number'
            phoneCode.value = dataSets.user_phone_info.phone_code ?? ''
        }

        if (dataSets.player_info) {
            heigth.value = dataSets.player_info.height ?? 'User has not entered height'
            weight.value = dataSets.player_info.weight ?? 'User has not entered weight'
            utr.value = dataSets.player_info.other_data.utr ?? 0
            gpa.value = dataSets.player_info.gpa ?? "Unknown"
            sportName.value = dataSets.player_info.sport_name ?? 'User has not entered sport'

      if (dataSets.player_info.other_data) {
        budgetMin.value = dataSets.player_info.other_data.budget_max ?? 'User has not entered budget min value'
        budgetMax.value = dataSets.player_info.other_data.budget_min ?? 'User has not entered budget max value'
        sat.value = dataSets.player_info ? dataSets.player_info.other_data.sat_score : "Unknown"
        toefl.value = dataSets.player_info ? dataSets.player_info.other_data.toefl_score : "Unknown"
        atp.value = dataSets.player_info.other_data.atp_ranking ?? "Unknown"
        itf.value = dataSets.player_info.other_data.itf_ranking ?? "Unknown"
        act.value = dataSets.player_info.other_data.act_score ?? "Unknown"
        wtn.value = dataSets.player_info.other_data.wtn_score_manual ?? "Unknown"
        nationalRanking.value = dataSets.player_info.other_data.national_ranking ?? "Unknown"
        handness.value = dataSets.player_info.other_data.handedness ?? "User has not entered handness"
        preferredSurface.value = dataSets.player_info.other_data.preferred_surface ?? "User has not entered preferred surface"

                utrData.value = {
                    sat: sat.value,
                    toefl: toefl.value,
                    atp: atp.value,
                    itf: itf.value,
                    act: act.value,
                    wtn: wtn.value,
                    nationalRanking: nationalRanking.value,
                    utr: utr.value,
                    gpa: gpa.value,

                }

            }

            const parsedDate = new Date(dataSets.player_info.graduation_month_year);
            const options = { year: 'numeric', month: 'long' };
            graduationDate.value = parsedDate.toLocaleDateString('en-US', options) ?? 'User has not entered graduation date'

            feet.value = (dataSets.player_info.height / 30.48).toFixed(2);
            pounds.value = (2.20462 * dataSets.player_info.weight).toFixed(2)
        }

        if (dataSets.media_info) {
            setGalleryItems(dataSets.media_info);
        } else {
            console.log('No media info available');
        }

        leftData.value = {
            bio: bio.value,
            nationality: nationality.value,
            heigth: heigth.value,
            weight: weight.value,
            graduationDate: graduationDate.value,
            feet: feet.value,
            pounds: pounds.value,
            handness: handness.value,
            birthday: birthday.value,
            country: country.value,
            city: city.value,
            addressLine01: addressLine01.value,
            addressLine02: addressLine02.value,
            stateProvince: stateProvince.value,
            joinDate: joinDate.value,
            budgetMin: budgetMin.value,
            budgetMax: budgetMax.value,
            name: name.value,
            sportName: sportName.value,
            media_info: dataSets.media_info,
            phone:phone.value,
            phoneCode:phoneCode.value

        }


        const date = new Date(dataSets.user_basic_info.joined_at);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        joinDate.value = `${year} ${month} ${day}`

        nationality.value = dataSets.user_basic_info.nationality ?? "User has not entered nationality"
        email.value = dataSets.user_basic_info.email ?? "User has not entered email"
        gender.value = dataSets.user_basic_info.gender ?? "User has not entered gender"

    } catch (error) {
        console.log(error)
        console.error('Error fetching data:', error.message);
    }

}


// const fetchUserDetailsBySlug = async () => {
//   try {
//     const dataSets = await $publicService.get_user_profile(route.params.slug);
   
//     if (dataSets.media_info) {
//       setGalleryItems(dataSets.media_info);
//     } else {
//       console.log('No media info available');
//     }
//   } catch (error) {
//     console.log(error)
//     console.error('Error fetching data:', error.message);
//   }
// }


// Array of gallery items (images and video)
const galleryItems = ref([]);


const setGalleryItems = (mediaInfo) => {
    galleryItems.value = mediaInfo.media_urls.map(media => {
        if (media.media_type === 'image') {
            return {
                type: 'image',
                href: media.url,
                src: media.url, // Replace with thumbnail URL if available
                media_id: media.media_id,
            };
        } else if (media.media_type === 'video') {
            return {
                type: 'video',
                href: media.url,
                src: media.url || 'https://via.placeholder.com/200x150.png?text=Video', // Use server-provided thumbnail or placeholder
                media_id: media.media_id,
            };
        }
    });
};

// const fetchPost = async () => {
//     try {
//         const response = await $feedService.list_posts({});
//         const filteredData = response.filter(item => item.user_id === playerID.value);
//         posts.value = filteredData || [];

//     } catch (error) {
//         console.error('Failed to load posts:', error.message);
//     }
// }

const loadInitfintePost = async () =>{
    try {
      //  isLoading.value = true;
      const response = await $feedService.list_posts(currentPage.value);
     // const filteredData = response.filter(item => item.user_id === playerID.value);
       posts.value.push(...response.data);

      lastPage.value =response.last_page
      currentPage.value =response.current_page +1
      const idsArray = [];
      for (const post of posts.value) {
        idsArray[post.id] = false
      }
      isHidddenComment.value = idsArray
      //  isLoading.value = false;
    } catch (error) {
      // isLoading.value = false;
      console.error('Failed to load posts:', error.message);
    }
  }

const redirectPage = (url) =>{
    router.push({
      path: url,

    });
}

</script>

<style scoped>
/* Add any styles here if needed */
temp-row {
    grid-template-rows: 90px auto !important;
}
</style>
