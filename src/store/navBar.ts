import { Action } from 'redux';

const IS_NAV_BAR_VISIBLE = 'IS_NAV_BAR_VISIBLE';

type SetNavBarAction = Action<typeof IS_NAV_BAR_VISIBLE> & {
  isNavBarVisible: boolean;
}

export const toggleNavBar = (isNavBarVisible: boolean) => ({
  type: IS_NAV_BAR_VISIBLE,
  isNavBarVisible,
});

type PossibleActions = SetNavBarAction;

const reducer = (isNavBarVisible: boolean = false, action: PossibleActions) => {
  switch (action.type) {
    case IS_NAV_BAR_VISIBLE:
      return !action.isNavBarVisible;

    default:
      return isNavBarVisible;
  }
};

export default reducer;
