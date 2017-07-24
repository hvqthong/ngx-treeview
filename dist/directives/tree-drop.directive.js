var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, Input, EventEmitter, HostListener, Renderer, ElementRef } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
var DRAG_OVER_CLASS = 'is-dragging-over';
var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
var TreeDropDirective = (function () {
    function TreeDropDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.onDropCallback = new EventEmitter();
        this.onDragOverCallback = new EventEmitter();
        this.onDragLeaveCallback = new EventEmitter();
        this.onDragEnterCallback = new EventEmitter();
        this._allowDrop = function (element, $event) { return true; };
    }
    Object.defineProperty(TreeDropDirective.prototype, "treeAllowDrop", {
        set: function (allowDrop) {
            if (allowDrop instanceof Function) {
                this._allowDrop = allowDrop;
            }
            else
                this._allowDrop = function (element, $event) { return allowDrop; };
        },
        enumerable: true,
        configurable: true
    });
    TreeDropDirective.prototype.allowDrop = function ($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    };
    TreeDropDirective.prototype.onDragOver = function ($event) {
        if (!this.allowDrop($event))
            return this.addDisabledClass();
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        this.addClass();
    };
    TreeDropDirective.prototype.onDragEnter = function ($event) {
        if (!this.allowDrop($event))
            return;
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    };
    TreeDropDirective.prototype.onDragLeave = function ($event) {
        if (!this.allowDrop($event))
            return this.removeDisabledClass();
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        this.removeClass();
    };
    TreeDropDirective.prototype.onDrop = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        this.removeClass();
        this.treeDraggedElement.set(null);
    };
    TreeDropDirective.prototype.addClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_OVER_CLASS, true);
    };
    TreeDropDirective.prototype.removeClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_OVER_CLASS, false);
    };
    TreeDropDirective.prototype.addDisabledClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_DISABLED_CLASS, true);
    };
    TreeDropDirective.prototype.removeDisabledClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_DISABLED_CLASS, false);
    };
    __decorate([
        Output('treeDrop'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDropCallback", void 0);
    __decorate([
        Output('treeDropDragOver'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragOverCallback", void 0);
    __decorate([
        Output('treeDropDragLeave'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragLeaveCallback", void 0);
    __decorate([
        Output('treeDropDragEnter'),
        __metadata("design:type", Object)
    ], TreeDropDirective.prototype, "onDragEnterCallback", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TreeDropDirective.prototype, "treeAllowDrop", null);
    __decorate([
        HostListener('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDragOver", null);
    __decorate([
        HostListener('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDragEnter", null);
    __decorate([
        HostListener('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDragLeave", null);
    __decorate([
        HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDrop", null);
    TreeDropDirective = __decorate([
        Directive({
            selector: '[treeDrop]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer, TreeDraggedElement])
    ], TreeDropDirective);
    return TreeDropDirective;
}());
export { TreeDropDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3RpdmVzL3RyZWUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRSxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUMzQyxJQUFNLG1CQUFtQixHQUFHLDJCQUEyQixDQUFDO0FBS3hEO0lBaUJFLDJCQUFvQixFQUFjLEVBQVUsUUFBa0IsRUFBVSxrQkFBc0M7UUFBMUYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBaEIxRixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsZUFBVSxHQUFHLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7SUFZL0MsQ0FBQztJQVhRLHNCQUFJLDRDQUFhO2FBQWpCLFVBQWtCLFNBQVM7WUFDbEMsRUFBRSxDQUFDLENBQUMsU0FBUyxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzlCLENBQUM7WUFDRCxJQUFJO2dCQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBQyxPQUFP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QUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFqRW1CO1FBQW5CLE1BQU0sQ0FBQyxVQUFVLENBQUM7OzZEQUFxQztJQUM1QjtRQUEzQixNQUFNLENBQUMsa0JBQWtCLENBQUM7O2lFQUF5QztJQUN2QztRQUE1QixNQUFNLENBQUMsbUJBQW1CLENBQUM7O2tFQUEwQztJQUN6QztRQUE1QixNQUFNLENBQUMsbUJBQW1CLENBQUM7O2tFQUEwQztJQUc3RDtRQUFSLEtBQUssRUFBRTs7OzBEQUtQO0lBUXFDO1FBQXJDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt1REFPcEM7SUFFc0M7UUFBdEMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3dEQUlyQztJQUVzQztRQUF0QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7d0RBTXJDO0lBRWlDO1FBQWpDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzttREFPaEM7SUFsRFUsaUJBQWlCO1FBSDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7eUNBa0J3QixVQUFVLEVBQW9CLFFBQVEsRUFBOEIsa0JBQWtCO09BakJuRyxpQkFBaUIsQ0FtRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwnO1xyXG5cclxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xyXG5jb25zdCBEUkFHX0RJU0FCTEVEX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXItZGlzYWJsZWQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdHJlZURyb3BdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZURyb3BEaXJlY3RpdmUge1xyXG4gIEBPdXRwdXQoJ3RyZWVEcm9wJykgb25Ecm9wQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgndHJlZURyb3BEcmFnT3ZlcicpIG9uRHJhZ092ZXJDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCd0cmVlRHJvcERyYWdMZWF2ZScpIG9uRHJhZ0xlYXZlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgndHJlZURyb3BEcmFnRW50ZXInKSBvbkRyYWdFbnRlckNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIF9hbGxvd0Ryb3AgPSAoZWxlbWVudCwgJGV2ZW50KSA9PiB0cnVlO1xyXG4gIEBJbnB1dCgpIHNldCB0cmVlQWxsb3dEcm9wKGFsbG93RHJvcCkge1xyXG4gICAgaWYgKGFsbG93RHJvcCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2FsbG93RHJvcCA9IGFsbG93RHJvcDtcclxuICAgIH1cclxuICAgIGVsc2UgdGhpcy5fYWxsb3dEcm9wID0gKGVsZW1lbnQsICRldmVudCkgPT4gYWxsb3dEcm9wO1xyXG4gIH1cclxuICBhbGxvd0Ryb3AoJGV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dEcm9wKHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpLCAkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQpIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgb25EcmFnT3ZlcigkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkgcmV0dXJuIHRoaXMuYWRkRGlzYWJsZWRDbGFzcygpO1xyXG5cclxuICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XHJcblxyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmFkZENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKSBvbkRyYWdFbnRlcigkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMub25EcmFnRW50ZXJDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgb25EcmFnTGVhdmUoJGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHJldHVybiB0aGlzLnJlbW92ZURpc2FibGVkQ2xhc3MoKTtcclxuXHJcbiAgICB0aGlzLm9uRHJhZ0xlYXZlQ2FsbGJhY2suZW1pdCh7ZXZlbnQ6ICRldmVudCwgZWxlbWVudDogdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuZ2V0KCl9KTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgb25Ecm9wKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RHJvcCgkZXZlbnQpKSByZXR1cm47XHJcblxyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uRHJvcENhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XHJcbiAgICB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5zZXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZENsYXNzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBEUkFHX09WRVJfQ0xBU1MsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVDbGFzcygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19PVkVSX0NMQVNTLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZERpc2FibGVkQ2xhc3MoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfRElTQUJMRURfQ0xBU1MsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVEaXNhYmxlZENsYXNzKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBEUkFHX0RJU0FCTEVEX0NMQVNTLCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==