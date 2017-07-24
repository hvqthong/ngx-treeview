var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var TreeDraggedElement = (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    TreeDraggedElement = __decorate([
        Injectable()
    ], TreeDraggedElement);
    return TreeDraggedElement;
}());
export { TreeDraggedElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFEQTtRQUVFLG9CQUFlLEdBQVEsSUFBSSxDQUFDO0lBYTlCLENBQUM7SUFYQyxnQ0FBRyxHQUFILFVBQUksY0FBbUI7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELGdDQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFiVSxrQkFBa0I7UUFEOUIsVUFBVSxFQUFFO09BQ0Esa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ2dlZEVsZW1lbnQge1xyXG4gIF9kcmFnZ2VkRWxlbWVudDogYW55ID0gbnVsbDtcclxuXHJcbiAgc2V0KGRyYWdnZWRFbGVtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX2RyYWdnZWRFbGVtZW50ID0gZHJhZ2dlZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnZ2VkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGlzRHJhZ2dpbmcoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmdldCgpO1xyXG4gIH1cclxufVxyXG4iXX0=