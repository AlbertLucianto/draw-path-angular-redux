import { dispatch } from '@angular-redux/store';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ToolBaseComponent } from '../tool/tool.base.component';
import { ActionCreator } from '../toolbox.model';

@Component({
	selector: 'app-pentool',
	templateUrl: './pentool.component.html',
	styleUrls: ['./pentool.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PenToolComponent extends ToolBaseComponent implements OnInit {
	ngOnInit() { }
	@dispatch() selectTool = () => {
		return new ActionCreator.SelectToolAction(this.context.toolName).toObject();
	}
}
