import { faCodeBranch, faStar, faBinoculars, faEye, faUser, faFolderOpen, faFolder, faFileImport, faHistory, } from '@fortawesome/free-solid-svg-icons'

export default {
    metrics: {
      visibility:[
        {
          "name": "Forked",
          "icon": faCodeBranch,
          "total": 23,
          "today": 2
        },
        {
          "name": "Starred",
          "icon": faStar,
          "total": 23,
          "today": 2
        },
        {
          "name": "Watchers",
          "icon": faBinoculars,
          "total": 23,
          "today": 2
        },
        {
          "name": "Contributors",
          "icon": faUser,
          "total": 23,
          "today": 2
        }
      ],
      maintenance:[
        {
          "name": "Open Issues",
          "icon": faFolderOpen,
          "total": 23,
          "today": 2
        },
        {
          "name": "Closed Issues",
          "icon": faFolder,
          "total": 23,
          "today": 2
        },
        {
          "name": "Open PR",
          "icon": faFileImport,
          "total": 23,
          "today": 2
        },
        {
          "name": "Closed PR",
          "icon": faHistory,
          "total": 23,
          "today": 2
        }
      ]
    }
}
