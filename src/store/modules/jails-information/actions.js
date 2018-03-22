import http from '@/service'

export default {
  // 获取监狱基本信息
  getJailsInformation: ({commit}) =>
    http.getJailsInformation().then(res => commit('getJailsInformation', res)).catch(err => console.log(err)),
  // 编辑监狱信息
  editJails({commit}, regs) {
    let formData = new FormData()
    regs.image && formData.append('file', regs.image.raw)
    formData.append('title', regs.title)
    formData.append('description', regs.description)
    formData.append('street', regs.street)
    formData.append('district', regs.district)
    formData.append('city', regs.city)
    formData.append('state', regs.state)
    formData.append('zipcode', regs.zipcode)
    formData.append('id', regs.id)
    // let data = {
    //   title: regs.title,
    //   description: regs.description,
    //   street: regs.street,
    //   district: regs.district,
    //   city: regs.city,
    //   state: regs.state,
    //   zipcode: regs.zipcode,
    //   id: sessionStorage['jail_id']
    // }
    http.editJails(formData).then(res => res.code === 200 && commit('editJails', res)).catch(err => err)
  },
  //新增监狱基本信息
  addJails({commit}, regs){
    let formData = new FormData()
    regs.image && formData.append('file', regs.image.raw)
    formData.append('title', regs.title)
    formData.append('description', regs.description)
    formData.append('street', regs.street)
    formData.append('district', regs.district)
    formData.append('city', regs.city)
    formData.append('state', regs.state)
    formData.append('zipcode', regs.zipcode)
    http.addJails(formData).then(res => res.code === 200 && http.getJailsInformation().then(response => {
      commit('addJails', res)
      commit('getJailsInformation', response)
    }).catch(err => console.log(err))).catch(err => console.log(err))
  }
}
