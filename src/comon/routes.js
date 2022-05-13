import AccountListView from '../views/AccountList'
import AccountLogView from '../views/AccountLog'
import AlertHistoryView from '../views/AlertHistory'
import ContractListView from '../views/ContractList'
import DeviceActivityView from '../views/DeviceActivity'
import DeviceListView from '../views/DeviceList'
import DeviceStatusView from '../views/DeviceStatus'
import LogInView from '../views/LogIn'

const NEDRoutes = {
    New: "new",
    Detail: ":id"
}

export const ROUTES = {
    DEVICE_STATUS: {
        ID: 'DEVICE_STATUS',
        PATH: '/device-status',
        COMPONENT: DeviceStatusView,
        NAME: 'DeviceStatus'
    },
    DEVICE_LIST: {
        ID: 'DEVICE_LIST',
        PATH: '/device-list',
        COMPONENT: DeviceListView,
        NAME: 'DeviceList'
    },
    DEVICE_ACTIVITY: {
        ID: 'DEVICE_ACTIVITY',
        PATH: '/device-activity',
        COMPONENT: DeviceActivityView,
        NAME: 'DeviceActivity'
    },
    ALERT_HISTORY: {
        ID: 'ALERT_HISTORY',
        PATH: '/alert-history',
        COMPONENT: AlertHistoryView,
        NAME: 'AlertHistory'
    },
    CONTRACT_LIST: {
        ID: 'CONTRACT_LIST',
        PATH: '/contract-list',
        COMPONENT: ContractListView,
        NAME: 'ContractList'
    },
    ACCOUNT_LIST: {
        ID: 'ACCOUNT_LIST',
        PATH: '/account-list',
        COMPONENT: AccountListView,
        NAME: 'AccountList'
    },
    ACCOUNT_LOG: {
        ID: 'ACCOUNT_LOG',
        PATH: '/account-log',
        COMPONENT: AccountLogView,
        NAME: 'AccountLog'
    },
    // LOGIN: {
    //     ID: 'LOGIN',
    //     PATH: '/login',
    //     COMPONENT: LogInView,
    //     NAME: ''
    // }
}