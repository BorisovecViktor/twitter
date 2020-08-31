import { Action } from 'redux';

const IS_WIDGETS_VISIBLE = 'IS_WIDGETS_VISIBLE';

type SetWidgetsAction = Action<typeof IS_WIDGETS_VISIBLE> & {
  isWidgetsVisible: boolean;
}

export const toggleWidgets = (isWidgetsVisible: boolean) => ({
  type: IS_WIDGETS_VISIBLE,
  isWidgetsVisible,
});

type PossibleActions = SetWidgetsAction;

const reducer = (isWidgetsVisible: boolean = false, action: PossibleActions) => {
  switch (action.type) {
    case IS_WIDGETS_VISIBLE:
      return !action.isWidgetsVisible;

    default:
      return isWidgetsVisible;
  }
};

export default reducer;
