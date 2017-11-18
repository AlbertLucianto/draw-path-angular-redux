import { Action } from 'redux';
import { CustomAction } from '../toolbox.action';

export enum PentoolActionType {
	PLACE_ANCHOR = 'TOOLBOX.PENTOOL.PLACE_ANCHOR',
}

export class PlaceAnchorAction extends CustomAction implements Action {
	type = PentoolActionType.PLACE_ANCHOR;
	targetIn: Array<number>;
	absPoint: { x: number, y: number };

	constructor(targetIn: Array<number>, absPoint: { x: number, y: number }) {
		super();
		this.targetIn = targetIn;
		this.absPoint = absPoint;
	}
}
