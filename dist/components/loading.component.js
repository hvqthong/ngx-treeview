var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var LoadingComponent = (function () {
    function LoadingComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('LoadingComponent', 'tree-loading-component', elementRef);
    }
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], LoadingComponent.prototype, "template", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], LoadingComponent.prototype, "node", void 0);
    LoadingComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'LoadingComponent, tree-loading-component',
            template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  ",
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], LoadingComponent);
    return LoadingComponent;
}());
export { LoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWE1RDtJQUlFLDBCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFMUTtRQUFSLEtBQUssRUFBRTtrQ0FBVyxXQUFXO3NEQUFNO0lBQzNCO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7a0RBQUM7SUFGYixnQkFBZ0I7UUFYNUIsU0FBUyxDQUFDO1lBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLDBDQUEwQztZQUNwRCxRQUFRLEVBQUUsd0xBTVQ7U0FDRixDQUFDO3lDQUtnQyxVQUFVO09BSi9CLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ0xvYWRpbmdDb21wb25lbnQsIHRyZWUtbG9hZGluZy1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPmxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCJcclxuICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdMb2FkaW5nQ29tcG9uZW50JywgJ3RyZWUtbG9hZGluZy1jb21wb25lbnQnLCBlbGVtZW50UmVmKTtcclxuICB9XHJcbn1cclxuIl19