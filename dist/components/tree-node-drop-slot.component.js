var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeDropSlot = (function () {
    function TreeNodeDropSlot(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeDropSlot', 'tree-node-drop-slot', elementRef);
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeDropSlot.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeDropSlot.prototype, "dropIndex", void 0);
    TreeNodeDropSlot = __decorate([
        Component({
            selector: 'TreeNodeDropSlot, tree-node-drop-slot',
            encapsulation: ViewEncapsulation.None,
            styles: [
                '.node-drop-slot { display: block; height: 2px }',
                '.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }'
            ],
            template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\">\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], TreeNodeDropSlot);
    return TreeNodeDropSlot;
}());
export { TreeNodeDropSlot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy90cmVlLW5vZGUtZHJvcC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBaUI1RDtJQUlFLDBCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTztZQUNwQixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLE9BQU8sRUFBRSxNQUFNO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7a0RBQUM7SUFDZjtRQUFSLEtBQUssRUFBRTs7dURBQW1CO0lBRmhCLGdCQUFnQjtRQWY1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRTtnQkFDTixpREFBaUQ7Z0JBQ2pELGtHQUFrRzthQUNuRztZQUNELFFBQVEsRUFBRSxrSkFNVDtTQUNGLENBQUM7eUNBS2dDLFVBQVU7T0FKL0IsZ0JBQWdCLENBa0I1QjtJQUFELHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1RyZWVOb2RlRHJvcFNsb3QsIHRyZWUtbm9kZS1kcm9wLXNsb3QnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICAnLm5vZGUtZHJvcC1zbG90IHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMnB4IH0nLFxyXG4gICAgJy5ub2RlLWRyb3Atc2xvdC5pcy1kcmFnZ2luZy1vdmVyIHsgYmFja2dyb3VuZDogI2RkZmZlZTsgaGVpZ2h0OiAyMHB4OyBib3JkZXI6IDJweCBkb3R0ZWQgIzg4ODsgfSdcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwibm9kZS1kcm9wLXNsb3RcIlxyXG4gICAgICAodHJlZURyb3ApPVwib25Ecm9wKCRldmVudClcIlxyXG4gICAgICBbdHJlZUFsbG93RHJvcF09XCJhbGxvd0Ryb3AuYmluZCh0aGlzKVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVEcm9wU2xvdCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgZHJvcEluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZURyb3BTbG90JywgJ3RyZWUtbm9kZS1kcm9wLXNsb3QnLCBlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIG9uRHJvcCgkZXZlbnQpIHtcclxuICAgIHRoaXMubm9kZS5tb3VzZUFjdGlvbignZHJvcCcsICRldmVudC5ldmVudCwge1xyXG4gICAgICBmcm9tOiAkZXZlbnQuZWxlbWVudCxcclxuICAgICAgdG86IHsgcGFyZW50OiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFsbG93RHJvcChlbGVtZW50LCAkZXZlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGUub3B0aW9ucy5hbGxvd0Ryb3AoZWxlbWVudCwgeyBwYXJlbnQ6IHRoaXMubm9kZSwgaW5kZXg6IHRoaXMuZHJvcEluZGV4IH0sICRldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==