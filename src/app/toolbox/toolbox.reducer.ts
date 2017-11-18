import { Action, Reducer } from 'redux';
import { PentoolActionType } from './pentool/pentool.action';
import { createPentool } from './pentool/pentool.model';
import { pentoolReducer } from './pentool/pentool.reducer';
import { SelectiontoolActionType } from './selectiontool/selectiontool.action';
import { selectiontoolReducer } from './selectiontool/selectiontool.reducer';
import { ISetToolTraitAction, ToolboxActionType } from './toolbox.action';
import { ToolboxState } from './toolbox.model';

export const toolboxReducer: Reducer<ToolboxState> = (
	state: ToolboxState = new ToolboxState({ selected: createPentool() }),
	action: Action,
) => {
	switch (true) {
		case action.type in PentoolActionType:
			return pentoolReducer(state, action);
		case action.type in SelectiontoolActionType:
			return selectiontoolReducer(state, action);
	}
	switch (action.type) {
		case ToolboxActionType.SELECT_TOOL:
			return state; // Let be handled by each tool epic, will dispatch below action
		case ToolboxActionType.SET_TOOL_TRAIT:
			return new ToolboxState({ selected: (<ISetToolTraitAction>action).payload.tool }); // Need some way to utilise Immutablility!
	}
	return state;
};
