import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';

import {handleSignup,handleSignin,handleSignout} from './UserSaga'



function *watchAll() {
  yield all([


  ])
}

export default watchAll;

