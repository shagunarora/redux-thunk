export const ageUpAsynch = val => {
  return { type: "AGE_UP", value: val };
};
export const ageUp = val => {
  return dispatch => {
    setTimeout(() => {
      dispatch(ageUpAsynch(1));
    }, 5000);
  };
};
export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
};
