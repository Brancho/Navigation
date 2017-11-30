import {SET_ACTIVE_VERTICAL, SET_ACTIVE_CATEGORY, REMOVE_ACTIVE_CATEGORY, SET_ALL} from './types';

export const setActiveVertical = (vertical) => {
  return {
    type: SET_ACTIVE_VERTICAL,
    vertical
  }
};

export const setActiveCategory = (category) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    category
  }
};

export const removeActiveCategory = () => {
  return {
    type: REMOVE_ACTIVE_CATEGORY
  }
};

export const setAll = () => {
  return {
    type: SET_ALL
  }
};


