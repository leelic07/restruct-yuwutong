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
        cost: { type: 'input', label: '单次会见费用', rules: ['required', 'isFee'], append: '/元' },
        branchPrison: { type: 'switch', label: '是否需要分监区', rules: ['required'] },
        meeting: { type: 'switch', label: '会见模块开放', rules: ['required'] },
        rewards: { type: 'switch', label: '奖励模块开放', rules: ['required'] },
        shopping: { type: 'switch', label: '电子商务模块开放', rules: ['required'] },
        prisonTerm: { type: 'switch', label: '监狱条款模块开放', rules: ['required'] },
        faceRecognition: { type: 'switch', label: '人脸识别模块开放', rules: ['required'] },
        remittance: { type: 'input', label: '汇款限制', rules: ['required', 'isFee'], append: '/元' },
        consumption: { type: 'input', label: '消费限制', rules: ['required', 'isFee'], append: '/元' }
        // windowSize: { type: 'input', label: '实地探监窗口个数', rules: ['required', 'isNumber', 'numberRange1-20'], append: '/个' }
      },
      values: {
        cost: 0,
        branchPrison: 1,
        meeting: 1,
        rewards: 1,
        shopping: 1,
        prisonTerm: 1,
        faceRecognition: 1,
        remittance: 800,
        consumption: 800
      }
    }
  },
  mounted() {
    if (parseInt(sessionStorage.getItem('step')) !== 1 || !sessionStorage.getItem('base')) {
      this.$router.push({ query: Object.assign({}, { tag: 'prisonBase' }) })
    }
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  methods: {
    ...mapActions(['getCities']),
    onSubmit(e) {
      console.log(e)
      sessionStorage.setItem('config', JSON.stringify(e))
      sessionStorage.setItem('step', 2)
      this.$router.push({ query: Object.assign({}, { tag: 'prisonRemote' }) })
    },
    onNext(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css">
</style>
