import PrisonAffairsDisclosure from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure'
import PrisonAffairsDisclosureNew from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure-New'
import PrisonAffairsDisclosureEditor from '@/views/NewsManagement/PrisonAffairsDisclosure/Prison-Affairs-Disclosure-Editor'
import WorkingDynamics from '@/views/NewsManagement/WorkingDynamics/Working-Dynamics'
import ComplaintsProposal from '@/views/NewsManagement/ComplaintsProposal/Complaints-Proposal'

export default [{
  path: '/news/prison_affairs_disclosure',
  name: 'PrisonAffairsDisclosure',
  component: PrisonAffairsDisclosure,
  children: [{
    path: '/news/prison_affairs_disclosure/new',
    name: 'PrisonAffairsDisclosureNew',
    component: PrisonAffairsDisclosureNew
  }, {
    path: '/news/prison_affairs_disclosure/:id/edit',
    name: 'PrisonAffairsDisclosureEditor',
    component: PrisonAffairsDisclosureEditor
  }]
},
{
  path: '/news/working_dynamics',
  name: 'WorkingDynamics',
  component: WorkingDynamics,
  children: [{
    path: '/news/working_dynamics/new',
    name: 'WorkingDynamicsNew',
    component: PrisonAffairsDisclosureNew
  }, {
    path: '/news/working_dynamics/:id/edit',
    name: 'WorkingDynamicsEditor',
    component: PrisonAffairsDisclosureEditor
  }]
},
{
  path: '/news/complaints_proposals',
  name: 'ComplaintsProposal',
  component: ComplaintsProposal,
  children: [{
    path: '/news/complaints_proposals/new',
    name: 'ComplaintsProposalNew',
    component: PrisonAffairsDisclosureNew
  }, {
    path: '/news/complaints_proposals/:id/edit',
    name: 'ComplaintsProposalEditor',
    component: PrisonAffairsDisclosureEditor
  }]
}]
