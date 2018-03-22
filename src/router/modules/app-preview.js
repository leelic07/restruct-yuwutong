import FamilyDownloadOld from '@/views/AppPreview/Family-DownLoad-Old'
import FamilyDownload from '@/views/AppPreview/Family-DownLoad'
import PrisonDownload from '@/views/AppPreview/Prison-DownLoad'
import PrisonDownloadOld from '@/views/AppPreview/Prison-DownLoad-Old'

export default [{
  path: '/app_preview/family_download_old',
  name: 'FamilyDownloadOld',
  component: FamilyDownloadOld
}, {
  path: '/app_preview/family_download',
  name: 'FamilyDownload',
  component: FamilyDownload
}, {
  path: '/app_preview/prison_download_old',
  name: 'PrisonDownloadOld',
  component: PrisonDownloadOld
}, {
  path: '/app_preview/prison_download',
  name: 'PrisonDownload',
  component: PrisonDownload
}]
