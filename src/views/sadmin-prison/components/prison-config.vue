<template>
  <div>
    <m-form :items="formItems" @submit="onSubmit" :values="values"></m-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      formItems: {
        formConfigs: { labelWidth: '140px' },
        buttons: ['prev', 'next'],
        cost: { type: 'input', label: '单次会见费用', rules: ['required', 'isFee'], append: '/元' }
        // description: { type: 'editor', label: '监狱简介', rules: ['required'] },
        // provincesId: { type: 'select', label: '所在省', rely: 'citysId', func: this.onProvinceChange, loading: true, rules: ['required'], action: 'getProvincesAll' },
        // citysId: { type: 'select', label: '所在市', rules: ['required'], defer: true, disabled: true, loading: true },
        // street: { type: 'input', label: '街道' },
        // visitAddress: { type: 'textarea', label: '探监路线', autosize: { minRows: 2, maxRows: 6 } },
        // zipcode: { type: 'input', label: '监狱编号', rules: ['required'] }
      },
      values: {
        cost: 0
      }
    }
  },
  methods: {
    ...mapActions(['getCities']),
    onSubmit(e) {
      sessionStorage.setItem('base', JSON.stringify(e))
      this.$router.push({ query: Object.assign({}, { tag: 'prisonConfig' }) })
    },
    onNext(e) {
      console.log(e)
    },
    onProvinceChange(e) {
      this.values = { citysId: '' }
      this.formItems.citysId.loading = true
      this.formItems.citysId.disabled = false
      this.getCities(e).then(res => {
        if (!res) return
        this.formItems.citysId = Object.assign({}, this.formItems.citysId, { options: res.options, props: { label: res.label, value: res.value }, loading: false, value: '' })
      })
    }
  }
}
</script>

<style lang="css">
</style>
