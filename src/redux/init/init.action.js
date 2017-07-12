import * as types from './init.types'

export function initAction(response) {
  return {
    type: types.INIT_APPLICATION,
    payload: {...response}
  }
}

