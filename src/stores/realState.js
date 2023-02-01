import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import supabase from "@/config/supabaseClient";

export const useRealState = defineStore("realState", () => {
  const properties = ref([])
  const fetchError = ref(null)

  async function fetchProperties() {
    const { data, error } = await supabase
      .from('properties')
      .select()

    if (error) {
      properties.value = []
      fetchError.value = error
      return
    }

    properties.value = data
    fetchError.value = null
  }

  const funnel = reactive({
    type: "all",
    salePrice: "all",
    rentPrice: "all",
    rooms: 1,
    search: ""
  })

  return { properties, fetchProperties, fetchError, funnel }
})