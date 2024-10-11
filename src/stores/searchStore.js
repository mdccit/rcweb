import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    search_key: '',
    search_button:false,
    user_role:'',
    state_name:'',
    city_name:'',
    tuition_in_state_min:'',
    tuition_in_state_max:'',
    tuition_out_state_min:'',
    tuition_out_state_max:'',
    gender_type:'',
    graduation_month:'',
    graduation_year:'',
    country_id:'',
    handedness_type:'',
    utr_min:'',
    utr_max:'',
    wtn_min:'',
    wtn_max:'',
    atp_ranking:'',
    itf_ranking:'',
    national_ranking:'',
    search_filter:[]
  }),
  getters: {
    searchKey: (state) => state.search_key || '',  
    searchButton: (state) => state.search_button || false,  
    userRole: (state) => state.user_role || '',  
    stateName: (state) => state.state_name || '',  
    cityName: (state) => state.city_name || null,  
    tuitionInStateMin: (state) => state.tuition_in_state_min || '',  
    tuitionInStateMax: (state) => state.tuition_in_state_max || '',  
    tuitionOutStateMin: (state) => state.tuition_out_state_min || '',  
    tuitionOutStateMax: (state) => state.tuition_out_state_max || '',  
    genderType: (state) => state.gender_type || '',  
    graduationMonth: (state) => state.graduation_month || '',  
    graduationYear: (state) => state.graduation_year || '',  
    countryId: (state) => state.country_id || '',  
    handednessType: (state) => state.handedness_type || '',  
    utrMin: (state) => state.utr_min || '',  
    utrMax: (state) => state.utr_max || '',  
    wtnMin: (state) => state.wtn_min || '',  
    wtnMax: (state) => state.wtn_max || '',  
    atpRanking: (state) => state.atp_ranking || '',  
    itfRanking: (state) => state.itf_ranking || '',  
    nationalRanking: (state) => state.national_ranking || '',
    searchFilter:(state) => state.search_filter || []
  },
  actions: {
    setSearchKey(key) {
        this.search_key = key;
        
    },
    setSearchButton(status) {
        this.search_button = status;
    },
    setUserRole(value) {
      this.user_role = value;
    },

    setState(value) {
        this.state_name = value;
    },

    setCity(value) {
      this.city_name = value;
     
    },
    setTuitionInStateMin(value) {
     this.tuition_in_state_min = value;
    },

    setTuitionInStateMax(value) {
      this.tuition_in_state_max = value;
    },

    setTuitionOutStateMin(value) {
      this.tuition_out_state_min = value;
    },

    setTuitionOutStateMax(value) {
      this.tuition_out_state_max = value;
    },

    setGenders(value) {
      this.gender_type = value;
    },

    setGraduationMonth(value) {
      this.graduation_month = value;
    },

    setGraduationYear(value) {
      this.graduation_year = value;
    },

    setCountryId(value) {
      this.country_id = value;
    },

    setHandednesses(value) {
      this.handedness_type = value;
    },

    setUtrMin(value) {
      this.utr_min = value;
    },
    setUtrMax(value) {
      this.utr_max = value;
    },
    setWtnMin(value) {
      this.wtn_min = value;
    },

    setWtnMax(value) {
      this.wtn_max = value;
    },

    setAtpRanking(value) {
      this.atp_ranking = value;
    },

    setItfRanking(value) {
      this.itf_ranking = value;
    },

    setNationalRanking(value) {
      this.national_ranking = value;
    },

    setSearchFilter(value) {
      this.search_filter = value;
    }
    
  },
  },
);
