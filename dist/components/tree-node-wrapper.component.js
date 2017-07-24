var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
var TreeNodeWrapperComponent = (function () {
    function TreeNodeWrapperComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeWrapperComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeWrapperComponent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeWrapperComponent.prototype, "templates", void 0);
    TreeNodeWrapperComponent = __decorate([
        Component({
            selector: 'tree-node-wrapper',
            encapsulation: ViewEncapsulation.None,
            styles: [
                ".node-content-wrapper {\n      display: inline-block;\n      padding: 2px 5px;\n      border-radius: 2px;\n      transition: background-color .15s,box-shadow .15s;\n    }",
                '.node-wrapper {display: flex; align-items: flex-start;}',
                ".node-content-wrapper-active,\n     .node-content-wrapper.node-content-wrapper-active:hover,\n     .node-content-wrapper-active.node-content-wrapper-focused {\n        background: #beebff;\n     }",
                '.node-content-wrapper-focused { background: #e7f4f9 }',
                '.node-content-wrapper:hover { background: #f7fbff }',
                ".node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n      box-shadow: inset 0 0 1px #999;\n    }",
                '.node-content-wrapper.is-dragging-over { background: #ddffee; box-shadow: inset 0 0 1px #999; }',
                '.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }'
            ],
            template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n        <tree-node-expander [node]=\"node\"></tree-node-expander>\n        <div class=\"node-content-wrapper\"\n          [class.node-content-wrapper-active]=\"node.isActive\"\n          [class.node-content-wrapper-focused]=\"node.isFocused\"\n          (click)=\"node.mouseAction('click', $event)\"\n          (dblclick)=\"node.mouseAction('dblClick', $event)\"\n          (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n          (treeDrop)=\"node.onDrop($event)\"\n          (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n          (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n          (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n          [treeAllowDrop]=\"node.allowDrop\"\n          [treeDrag]=\"node\"\n          [treeDragEnabled]=\"node.allowDrag()\">\n\n          <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n          </tree-node-content>\n        </div>\n      </div>\n      <ng-container \n        [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\" \n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n      </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], TreeNodeWrapperComponent);
    return TreeNodeWrapperComponent;
}());
export { TreeNodeWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXNEckQ7SUFNRTtJQUFnQixDQUFDO0lBSlI7UUFBUixLQUFLLEVBQUU7a0NBQU8sUUFBUTswREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOzsyREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzsrREFBZ0I7SUFKYix3QkFBd0I7UUFwRHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFO2dCQUNOLDRLQUtFO2dCQUNGLHlEQUF5RDtnQkFDekQsc01BSUc7Z0JBQ0gsdURBQXVEO2dCQUN2RCxxREFBcUQ7Z0JBQ3JELDBJQUVFO2dCQUNGLGlHQUFpRztnQkFDakcsa0VBQWtFO2FBQ25FO1lBQ0QsUUFBUSxFQUFFLHl5Q0F5QlA7U0FDSixDQUFDOztPQUVXLHdCQUF3QixDQVFwQztJQUFELCtCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS13cmFwcGVyJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMsYm94LXNoYWRvdyAuMTVzO1xyXG4gICAgfWAsXHJcbiAgICAnLm5vZGUtd3JhcHBlciB7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7fScsXHJcbiAgICBgLm5vZGUtY29udGVudC13cmFwcGVyLWFjdGl2ZSxcclxuICAgICAubm9kZS1jb250ZW50LXdyYXBwZXIubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlOmhvdmVyLFxyXG4gICAgIC5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmUubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2JlZWJmZjtcclxuICAgICB9YCxcclxuICAgICcubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZCB7IGJhY2tncm91bmQ6ICNlN2Y0ZjkgfScsXHJcbiAgICAnLm5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y3ZmJmZiB9JyxcclxuICAgIGAubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlLCAubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZCwgLm5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTk5O1xyXG4gICAgfWAsXHJcbiAgICAnLm5vZGUtY29udGVudC13cmFwcGVyLmlzLWRyYWdnaW5nLW92ZXIgeyBiYWNrZ3JvdW5kOiAjZGRmZmVlOyBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5OTk7IH0nLFxyXG4gICAgJy5ub2RlLWNvbnRlbnQtd3JhcHBlci5pcy1kcmFnZ2luZy1vdmVyLWRpc2FibGVkIHsgb3BhY2l0eTogMC41IH0nXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIXRlbXBsYXRlcy50cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZVwiIGNsYXNzPVwibm9kZS13cmFwcGVyXCIgW3N0eWxlLnBhZGRpbmctbGVmdF09XCJub2RlLmdldE5vZGVQYWRkaW5nKClcIj5cclxuICAgICAgICA8dHJlZS1ub2RlLWV4cGFuZGVyIFtub2RlXT1cIm5vZGVcIj48L3RyZWUtbm9kZS1leHBhbmRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1jb250ZW50LXdyYXBwZXJcIlxyXG4gICAgICAgICAgW2NsYXNzLm5vZGUtY29udGVudC13cmFwcGVyLWFjdGl2ZV09XCJub2RlLmlzQWN0aXZlXCJcclxuICAgICAgICAgIFtjbGFzcy5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkXT1cIm5vZGUuaXNGb2N1c2VkXCJcclxuICAgICAgICAgIChjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdjbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgKGRibGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2RibENsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAoY29udGV4dG1lbnUpPVwibm9kZS5tb3VzZUFjdGlvbignY29udGV4dE1lbnUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcCk9XCJub2RlLm9uRHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcERyYWdPdmVyKT1cIm5vZGUubW91c2VBY3Rpb24oJ2RyYWdPdmVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAodHJlZURyb3BEcmFnTGVhdmUpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ0xlYXZlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAodHJlZURyb3BEcmFnRW50ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ0VudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBbdHJlZUFsbG93RHJvcF09XCJub2RlLmFsbG93RHJvcFwiXHJcbiAgICAgICAgICBbdHJlZURyYWddPVwibm9kZVwiXHJcbiAgICAgICAgICBbdHJlZURyYWdFbmFibGVkXT1cIm5vZGUuYWxsb3dEcmFnKClcIj5cclxuXHJcbiAgICAgICAgICA8dHJlZS1ub2RlLWNvbnRlbnQgW25vZGVdPVwibm9kZVwiIFtpbmRleF09XCJpbmRleFwiIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPC90cmVlLW5vZGUtY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVzLnRyZWVOb2RlV3JhcHBlclRlbXBsYXRlXCIgXHJcbiAgICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSwgbm9kZTogbm9kZSwgaW5kZXg6IGluZGV4IH1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19