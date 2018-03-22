import PrisonerImportIndex from '@/views/PrisonerDataManagement/Prisoner'
import PrisonTermImportIndex from '@/views/PrisonerDataManagement/Prison-Term'
import PrisonerRewardPunishment from '@/views/PrisonerDataManagement/Prisoner-Reward-Punishment'

export default [{
  path: '/prisoner/import_index',
  name: 'PrisonerImportIndex',
  component: PrisonerImportIndex
},
  {
    path: '/prison_term/import_index',
    name: 'PrisonTermImportIndex',
    component: PrisonTermImportIndex
  },
  {
    path: '/prison_reward_punishment/import_index',
    name: 'PrisonerRewardPunishment',
    component: PrisonerRewardPunishment
  }]
