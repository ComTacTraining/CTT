export const UPDATE_USER_PREFERENCES = 'UPDATE_USER_PREFERENCES'
export const TOGGLE_TIPS = 'TOGGLE_TIPS'
export const TOGGLE_USING_MIC = 'TOGGLE_USING_MIC'
export const UPDATE_MASTER_VOLUME = 'UPDATE_MASTER_VOLUME'

export const toggleTips = () => {
  return { type: TOGGLE_TIPS }
}

export const updateUserPreferences = (data) => {
  return {
    type: UPDATE_USER_PREFERENCES,
    payload: {
      dispatchCenter: data.dispatchCenter,
      firstOnScene: data.firstOnScene,
      incomingCommandOfficer: data.incomingCommandOfficer,
      alarm1: data.alarm1,
      alarm2: data.alarm2,
      alarm3: data.alarm3,
      showTips: data.showTips
    }
  }
}

export const toggleUsingMic = () => {
  return { type: TOGGLE_USING_MIC }
}

export const updateMasterVolume = (level) => {
  return {
    type: UPDATE_MASTER_VOLUME,
    payload: {
      level: level
    }
  }
}
