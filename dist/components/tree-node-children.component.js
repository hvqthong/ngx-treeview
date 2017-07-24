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
var TreeNodeChildrenComponent = (function () {
    function TreeNodeChildrenComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeChildren', 'tree-node-children', elementRef);
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeChildrenComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeChildrenComponent.prototype, "templates", void 0);
    TreeNodeChildrenComponent = __decorate([
        Component({
            selector: 'TreeNodeChildren, tree-node-children',
            encapsulation: ViewEncapsulation.None,
            styles: [
                '.tree-children.tree-children-no-padding { padding-left: 0 }',
                '.tree-children { padding-left: 20px; overflow: hidden }'
            ],
            template: "\n    <ng-container *mobxAutorun>\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateExpand;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], TreeNodeChildrenComponent);
    return TreeNodeChildrenComponent;
}());
export { TreeNodeChildrenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1DNUQ7SUFJRSxtQ0FBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7a0NBQU8sUUFBUTsyREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOztnRUFBZ0I7SUFGYix5QkFBeUI7UUFqQ3JDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFO2dCQUNOLDZEQUE2RDtnQkFDN0QseURBQXlEO2FBQzFEO1lBQ0QsUUFBUSxFQUFFLDI0QkF3QlQ7U0FDRixDQUFDO3lDQUtnQyxVQUFVO09BSi9CLHlCQUF5QixDQU9yQztJQUFELGdDQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ2hpbGRyZW4sIHRyZWUtbm9kZS1jaGlsZHJlbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgICcudHJlZS1jaGlsZHJlbi50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmcgeyBwYWRkaW5nLWxlZnQ6IDAgfScsXHJcbiAgICAnLnRyZWUtY2hpbGRyZW4geyBwYWRkaW5nLWxlZnQ6IDIwcHg7IG92ZXJmbG93OiBoaWRkZW4gfSdcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj5cclxuICAgICAgPGRpdiBbY2xhc3MudHJlZS1jaGlsZHJlbl09XCJ0cnVlXCJcclxuICAgICAgICAgIFtjbGFzcy50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmddPVwibm9kZS5vcHRpb25zLmxldmVsUGFkZGluZ1wiXHJcbiAgICAgICAgICAqdHJlZUFuaW1hdGVPcGVuPVwiXHJcbiAgICAgICAgICAgIG5vZGUuaXNFeHBhbmRlZDtcclxuICAgICAgICAgICAgc3BlZWQ6bm9kZS5vcHRpb25zLmFuaW1hdGVFeHBhbmQ7XHJcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjpub2RlLm9wdGlvbnMuYW5pbWF0ZUFjY2VsZXJhdGlvbjtcclxuICAgICAgICAgICAgZW5hYmxlZDpub2RlLm9wdGlvbnMuYW5pbWF0ZUV4cGFuZFwiPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtY29sbGVjdGlvblxyXG4gICAgICAgICAgKm5nSWY9XCJub2RlLmNoaWxkcmVuXCJcclxuICAgICAgICAgIFtub2Rlc109XCJub2RlLmNoaWxkcmVuXCJcclxuICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCJcclxuICAgICAgICAgIFt0cmVlTW9kZWxdPVwibm9kZS50cmVlTW9kZWxcIj5cclxuICAgICAgICA8L3RyZWUtbm9kZS1jb2xsZWN0aW9uPlxyXG4gICAgICAgIDx0cmVlLWxvYWRpbmctY29tcG9uZW50XHJcbiAgICAgICAgICBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiXHJcbiAgICAgICAgICBjbGFzcz1cInRyZWUtbm9kZS1sb2FkaW5nXCJcclxuICAgICAgICAgICpuZ0lmPVwiIW5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy5sb2FkaW5nVGVtcGxhdGVcIlxyXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXHJcbiAgICAgICAgPjwvdHJlZS1sb2FkaW5nLWNvbXBvbmVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWVOb2RlQ2hpbGRyZW4nLCAndHJlZS1ub2RlLWNoaWxkcmVuJywgZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==