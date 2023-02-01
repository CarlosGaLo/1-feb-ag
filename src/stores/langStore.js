import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

export const useLangStore = defineStore("langStore", () => {

  const langOptions = reactive({
    lang: "es",
    labels: [],
    currency: "EUR",
    currencySymbol: "€",
    rateChange: 1,
    ratesInfo: {
      rates: {},
      timeNextUpdateUnix: null
    }
  })

  function setLangOptions() {
    const langOptionsLocalStore = localStorage.getItem("langOptions")
    if (langOptionsLocalStore) {
      Object.assign(langOptions, JSON.parse(langOptionsLocalStore))
    }
    // TODO: get labels from database and set labels variable
  }

  async function fetchRatesInfo() {
    const URL = "https://open.er-api.com/v6/latest/EUR"
    const fetchedRatesInfo = await fetch(URL)
      .then(response => response.json());
    langOptions.ratesInfo.rates = {
      EUR: fetchedRatesInfo.rates.EUR,
      GBP: fetchedRatesInfo.rates.GBP,
      USD: fetchedRatesInfo.rates.USD
    }
    langOptions.ratesInfo.timeNextUpdateUnix = fetchedRatesInfo.time_next_update_unix
    console.log("fetchedRatesInfo:", fetchedRatesInfo);
  }

  function setCurrencySymbol() {
    if (langOptions.currency === "EUR") langOptions.currencySymbol = "€"
    else if (langOptions.currency === "USD") langOptions.currencySymbol = "$"
    else if (langOptions.currency === "GBP") langOptions.currencySymbol = "£"
  }

  async function setRateChange() {
    const dateNow = Math.floor(new Date().getTime() / 1000)
    const updatedRatesDate = langOptions.ratesInfo.timeNextUpdateUnix

    try {
      if (!updatedRatesDate || dateNow > updatedRatesDate) {
        await fetchRatesInfo()
      }
      langOptions.rateChange = langOptions.ratesInfo.rates[langOptions.currency]
    } catch (error) {
      // TODO: inform that an error has occurred and currency is set back to "EUR"
      langOptions.currency = "EUR"
      langOptions.rateChange = 1;
    }

    setCurrencySymbol()
    localStorage.setItem("langOptions", JSON.stringify(langOptions))
  }

  function setLang() {
    // TODO: get labels from database and set labels variable
    console.log("lang changed to: ", langOptions.lang);
    localStorage.setItem("langOptions", JSON.stringify(langOptions))
  }

  watch(
    () => langOptions.currency,
    () => {
      setRateChange()
    }
  );

  watch(
    () => langOptions.lang,
    () => {
      setLang()
    }
  );

  return { langOptions, setLangOptions }
})