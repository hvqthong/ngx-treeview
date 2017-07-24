var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, HostListener, Renderer, ElementRef } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
    }
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        var _this = this;
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        setTimeout(function () {
            _this.treeDraggedElement.set(_this.draggedElement);
            if (_this.draggedElement.mouseAction) {
                _this.draggedElement.mouseAction('dragStart', ev);
            }
        }, 30);
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    __decorate([
        Input('treeDrag'),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "draggedElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "treeDragEnabled", void 0);
    __decorate([
        HostListener('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragStart", null);
    __decorate([
        HostListener('dragend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragEnd", null);
    TreeDragDirective = __decorate([
        Directive({
            selector: '[treeDrag]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer, TreeDraggedElement])
    ], TreeDragDirective);
    return TreeDragDirective;
}());
export { TreeDragDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUUsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7QUFLM0M7SUFJRSwyQkFBb0IsRUFBYyxFQUFVLFFBQWtCLEVBQVUsa0JBQXNDO1FBQTFGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5RyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFc0MsdUNBQVcsR0FBWCxVQUFZLEVBQUU7UUFBckQsaUJBVUM7UUFUQywwQ0FBMEM7UUFDMUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFd0IscUNBQVMsR0FBVDtRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTNCa0I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7NkRBQWdCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzs4REFBaUI7SUFTYztRQUF0QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7d0RBVXJDO0lBRXdCO1FBQXhCLFlBQVksQ0FBQyxTQUFTLENBQUM7Ozs7c0RBS3ZCO0lBNUJVLGlCQUFpQjtRQUg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO3lDQUt3QixVQUFVLEVBQW9CLFFBQVEsRUFBOEIsa0JBQWtCO09BSm5HLGlCQUFpQixDQTZCN0I7SUFBRCx3QkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIsIEVsZW1lbnRSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcclxuXHJcbmNvbnN0IERSQUdfT1ZFUl9DTEFTUyA9ICdpcy1kcmFnZ2luZy1vdmVyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3RyZWVEcmFnXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVEcmFnRGlyZWN0aXZlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgQElucHV0KCd0cmVlRHJhZycpIGRyYWdnZWRFbGVtZW50O1xyXG4gIEBJbnB1dCgpIHRyZWVEcmFnRW5hYmxlZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQpIHtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnZ2FibGUnLCB0aGlzLnRyZWVEcmFnRW5hYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgb25EcmFnU3RhcnQoZXYpIHtcclxuICAgIC8vIHNldHRpbmcgdGhlIGRhdGEgaXMgcmVxdWlyZWQgYnkgZmlyZWZveFxyXG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldi50YXJnZXQuaWQpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5zZXQodGhpcy5kcmFnZ2VkRWxlbWVudCk7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ1N0YXJ0JywgZXYpO1xyXG4gICAgICB9XHJcbiAgICB9LCAzMCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJykgb25EcmFnRW5kKCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcclxuICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ0VuZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=