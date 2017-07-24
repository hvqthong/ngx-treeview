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
var TreeNodeComponent = (function () {
    function TreeNodeComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNode', 'tree-node', elementRef);
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeComponent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeComponent.prototype, "templates", void 0);
    TreeNodeComponent = __decorate([
        Component({
            selector: 'TreeNode, tree-node',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun>\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n        >\n\n        <tree-node-drop-slot *ngIf=\"index === 0\" [dropIndex]=\"node.index\" [node]=\"node.parent\"></tree-node-drop-slot>\n\n        <tree-node-wrapper [node]=\"node\" [index]=\"index\" [templates]=\"templates\"></tree-node-wrapper>\n\n        <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        <tree-node-drop-slot [dropIndex]=\"node.index + 1\" [node]=\"node.parent\"></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n    </ng-container>"
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());
export { TreeNodeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQWUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWlDNUQ7SUFLRSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFOUTtRQUFSLEtBQUssRUFBRTtrQ0FBTyxRQUFRO21EQUFDO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O29EQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3dEQUFnQjtJQUhiLGlCQUFpQjtRQS9CN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxvcENBd0JRO1NBQ25CLENBQUM7eUNBT2dDLFVBQVU7T0FML0IsaUJBQWlCLENBUzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1RyZWVOb2RlLCB0cmVlLW5vZGUnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cIiF0ZW1wbGF0ZXMudHJlZU5vZGVGdWxsVGVtcGxhdGVcIlxyXG4gICAgICAgIFtjbGFzc109XCJub2RlLmdldENsYXNzKClcIlxyXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1leHBhbmRlZF09XCJub2RlLmlzRXhwYW5kZWQgJiYgbm9kZS5oYXNDaGlsZHJlblwiXHJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1jb2xsYXBzZWRdPVwibm9kZS5pc0NvbGxhcHNlZCAmJiBub2RlLmhhc0NoaWxkcmVuXCJcclxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlLWxlYWZdPVwibm9kZS5pc0xlYWZcIlxyXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtYWN0aXZlXT1cIm5vZGUuaXNBY3RpdmVcIlxyXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtZm9jdXNlZF09XCJub2RlLmlzRm9jdXNlZFwiXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICA8dHJlZS1ub2RlLWRyb3Atc2xvdCAqbmdJZj1cImluZGV4ID09PSAwXCIgW2Ryb3BJbmRleF09XCJub2RlLmluZGV4XCIgW25vZGVdPVwibm9kZS5wYXJlbnRcIj48L3RyZWUtbm9kZS1kcm9wLXNsb3Q+XHJcblxyXG4gICAgICAgIDx0cmVlLW5vZGUtd3JhcHBlciBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIj48L3RyZWUtbm9kZS13cmFwcGVyPlxyXG5cclxuICAgICAgICA8dHJlZS1ub2RlLWNoaWxkcmVuIFtub2RlXT1cIm5vZGVcIiBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPjwvdHJlZS1ub2RlLWNoaWxkcmVuPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90IFtkcm9wSW5kZXhdPVwibm9kZS5pbmRleCArIDFcIiBbbm9kZV09XCJub2RlLnBhcmVudFwiPjwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVGdWxsVGVtcGxhdGVcIlxyXG4gICAgICAgIFtuZ091dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUsIG5vZGU6IG5vZGUsIGluZGV4OiBpbmRleCwgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMgfVwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWVOb2RlJywgJ3RyZWUtbm9kZScsIGVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19