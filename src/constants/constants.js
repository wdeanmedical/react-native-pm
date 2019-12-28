import { Dimensions } from 'react-native'

const { height } = Dimensions.get('window').height
export const SCREEN_HEIGHT = height

const { width } = Dimensions.get('window').width
export const SCREEN_WIDTH = width

export const BROWSER = 'browser'
export const MOBILE = 'mobile'
export const ENABLED = 'enabled'
export const DISABLED = 'disabled'

export const HANDLE_FIELD_CHANGE = 'handleFieldChange'

// Platform Types
export const IOS = 'ios'
export const ANDROID = 'android'

export const ACCEPT = 'accept'
export const REJECT = 'reject'

export const API_URL = 'http://localhost:3000/api'
// export const API_URL = 'http://10.0.2.2:3000/api'
// export const API_URL = 'http://192.168.0.11:3000/api'
