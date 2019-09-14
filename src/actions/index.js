/* eslint-disable import/prefer-default-export */
import { SET_CURRENT_PAGE } from '@Constants/actionTypes';

export const setCurrentPage = (pageTitle) => ({
  type: SET_CURRENT_PAGE,
  payload: pageTitle,
});
