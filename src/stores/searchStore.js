import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    search_key: '',
    search_button:false,
    user_role:null,
    state:null,
    city:null,
    tuition_in_state_min:null,
    tuition_in_state_max:null,
    tuition_out_state_min:null,
    tuition_out_state_max:null,
    gender:null,
    graduation_month:null,
    graduation_year:null,
    country_id:null,
    handedness:null,
    utr_min:null,
    utr_max:null,
    wtn_min:null,
    wtn_max:null,
    atp_ranking:null,
    itf_ranking:null,
    national_ranking:null
  }),
  getters: {
    searchKey: (state) => state.search_key || '',  
    searchButton: (state) => state.search_button || false,  
    userRole: (state) => state.user_role || null,  
    state: (state) => state.state || null,  
    city: (state) => state.city || null,  
    tuitionInStateMin: (state) => state.tuition_in_state_min || null,  
    tuitionInStateMax: (state) => state.tuition_in_state_max || null,  
    tuitionOutStateMin: (state) => state.tuition_out_state_min || null,  
    tuitionOutStateMax: (state) => state.tuition_out_state_max || null,  
    gender: (state) => state.gender || null,  
    graduationMonth: (state) => state.graduation_month || null,  
    graduationYear: (state) => state.graduation_year || null,  
    countryId: (state) => state.country_id || null,  
    handedness: (state) => state.handedness || null,  
    utrMin: (state) => state.utr_min || null,  
    utrMax: (state) => state.utr_max || null,  
    wtnMin: (state) => state.wtn_min || null,  
    wtnMax: (state) => state.wtn_max || null,  
    atpRanking: (state) => state.atp_ranking || null,  
    itfRanking: (state) => state.itf_ranking || null,  
    nationalRanking: (state) => state.national_ranking || null

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
        this.state = value;
    },

    setCity(value) {
      this.city = value;
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

    setGender(value) {
      this.gender = value;
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

    setHandedness(value) {
      this.handedness = value;
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
    
  },
  },
);
