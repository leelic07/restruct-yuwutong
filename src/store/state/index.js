let BREADCRUMB = {
  breadcrumb: []//面包屑数组
}

let REGISTRATIONS = {
  registrations: [],//家属注册列表数组
  authorizationResult: {},//家属注册授权结果信息
  total: 0//家属注册列表总记录条数
}

let MEETINGS = {
  meetings: [],//会见申请列表数组
  authorizationResult: {},//会见申请授权结果信息
  total: 0//会见申请总记录条数
}

let PRISONERS = {
  prisonerList: [],//服刑人员以及家属列表数组
  total: 0//服刑人员列表总记录数
}

let FAMILIES = {
  familyList: [],//家属信息以及对应罪犯列表
  total: 0//家属信息列表总记录数
}

let ACCOUNTS = {
  accounts: [],//囚犯账户信息列表数组
  total: 0//囚犯账户信息列表总记录数
}

let TERMINALS = {
  terminals: [],//终端管理信息列表数组
  total: 0//终端管理信息列表数组总记录数
}

let VERSIONS = {
  prisonVersions: [],
  familyVersions: [],
  total: 0,
  updateVersionResult:{}
}

export default {
  BREADCRUMB, REGISTRATIONS, MEETINGS, PRISONERS, FAMILIES, ACCOUNTS, TERMINALS, VERSIONS
}
