import Vue from 'vue';
import VueSupabase from "vue-supabase";

const supabase = new Vue.use(VueSupabase, {
  supabaseUrl: process.env.VUE_APP_SUPABASE_URL,
  supabaseKey: process.env.VUE_APP_SUPABASE_ANON_KEY,
  supabaseOptions: {},
});

export default supabase;