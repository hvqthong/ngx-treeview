var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostListener } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { deprecatedSelector } from '../deprecated-selector';
import { TREE_EVENTS } from '../constants/events';
var TreeViewportComponent = (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        deprecatedSelector('TreeNode', 'tree-node', elementRef);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.onInitialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.onScroll = function (e) {
        this._onWheel(e);
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype._onWheel = function (e) {
        this.setViewport();
    };
    TreeViewportComponent.prototype.setViewport = function () {
        this.virtualScroll.setViewport(this.elementRef.nativeElement);
    };
    __decorate([
        HostListener('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeViewportComponent.prototype, "onScroll", null);
    TreeViewportComponent = __decorate([
        Component({
            selector: 'TreeViewport, tree-viewport',
            styles: [
                ":host {\n      height: 100%;\n      overflow: auto;\n      display: block;\n    }"
            ],
            providers: [TreeVirtualScroll],
            template: "\n    <ng-container *mobxAutorun>\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef,
            TreeVirtualScroll])
    ], TreeViewportComponent);
    return TreeViewportComponent;
}());
export { TreeViewportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBcUIsWUFBWSxFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFvQmxEO0lBQ0UsK0JBQ1UsVUFBc0IsRUFDdkIsYUFBZ0M7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFFdkMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFBQSxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBR0Qsd0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFkRDtRQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt5REFHbEM7SUExQlUscUJBQXFCO1FBbEJqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLE1BQU0sRUFBRTtnQkFDTixtRkFJRTthQUNIO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsUUFBUSxFQUFFLDhKQU1UO1NBQ0YsQ0FBQzt5Q0FHc0IsVUFBVTtZQUNSLGlCQUFpQjtPQUg5QixxQkFBcUIsQ0F1Q2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUcmVlVmlld3BvcnQsIHRyZWUtdmlld3BvcnQnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYDpob3N0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9YFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbVHJlZVZpcnR1YWxTY3JvbGxdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj5cclxuICAgICAgPGRpdiBbc3R5bGUuaGVpZ2h0XT1cImdldFRvdGFsSGVpZ2h0KClcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsKSB7XHJcblxyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZScsICd0cmVlLW5vZGUnLCBlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFZpZXdwb3J0KCk7XHJcbiAgICAgIHRoaXMudmlydHVhbFNjcm9sbC5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uSW5pdGlhbGl6ZWQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIG9uU2Nyb2xsKGUpIHtcclxuICAgIHRoaXMuX29uV2hlZWwoZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGwuaXNFbmFibGVkKCkgJiYgdGhpcy52aXJ0dWFsU2Nyb2xsLnRvdGFsSGVpZ2h0ICsgJ3B4JyB8fCAnYXV0byc7XHJcbiAgfVxyXG5cclxuICBfb25XaGVlbChlKSB7XHJcbiAgICB0aGlzLnNldFZpZXdwb3J0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRWaWV3cG9ydCgpIHtcclxuICAgIHRoaXMudmlydHVhbFNjcm9sbC5zZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==