var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, Renderer, ElementRef, ViewEncapsulation, ContentChild, TemplateRef, HostListener, ViewChild } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import { TreeOptions } from '../models/tree-options.model';
import { TreeViewportComponent } from './tree-viewport.component';
import { deprecatedSelector } from '../deprecated-selector';
import * as _ from 'lodash';
var includes = _.includes, pick = _.pick;
var TreeComponent = (function () {
    function TreeComponent(treeModel, treeDraggedElement, renderer, elementRef) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        this.renderer = renderer;
        this.elementRef = elementRef;
        deprecatedSelector('Tree', 'tree-root', elementRef);
        treeModel.eventNames.forEach(function (name) { return _this[name] = new EventEmitter(); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        var insideClick = this.renderer.invokeElementMethod($event.target, 'closest', ['Tree']);
        if (!insideClick) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        this.treeModel.setData({
            options: changes.options && changes.options.currentValue,
            nodes: changes.nodes && changes.nodes.currentValue,
            events: pick(this, this.treeModel.eventNames)
        });
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    __decorate([
        ContentChild('loadingTemplate'),
        __metadata("design:type", TemplateRef)
    ], TreeComponent.prototype, "loadingTemplate", void 0);
    __decorate([
        ContentChild('treeNodeTemplate'),
        __metadata("design:type", TemplateRef)
    ], TreeComponent.prototype, "treeNodeTemplate", void 0);
    __decorate([
        ContentChild('treeNodeWrapperTemplate'),
        __metadata("design:type", TemplateRef)
    ], TreeComponent.prototype, "treeNodeWrapperTemplate", void 0);
    __decorate([
        ContentChild('treeNodeFullTemplate'),
        __metadata("design:type", TemplateRef)
    ], TreeComponent.prototype, "treeNodeFullTemplate", void 0);
    __decorate([
        ViewChild('viewport'),
        __metadata("design:type", TreeViewportComponent)
    ], TreeComponent.prototype, "viewportComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TreeComponent.prototype, "nodes", null);
    __decorate([
        Input(),
        __metadata("design:type", TreeOptions),
        __metadata("design:paramtypes", [TreeOptions])
    ], TreeComponent.prototype, "options", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TreeComponent.prototype, "focused", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onToggleExpanded", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onActivate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onDeactivate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onFocus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onBlur", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onUpdateData", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onInitialized", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onMoveNode", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onLoadChild", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onChangeFilter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "toggleExpanded", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "activate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "deactivate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "focus", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "blur", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "updateData", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "initialized", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "moveNode", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "loadChild", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "changeFilter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "event", void 0);
    __decorate([
        HostListener('body: keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onKeydown", null);
    __decorate([
        HostListener('body: mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeComponent.prototype, "onMousedown", null);
    TreeComponent = __decorate([
        Component({
            selector: 'Tree, tree-root',
            encapsulation: ViewEncapsulation.None,
            providers: [TreeModel],
            styles: [
                '.tree-children { padding-left: 20px }',
                '.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }',
                ".tree {\n      width: 100%;\n      position:relative;\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none;   /* Chrome/Safari/Opera */\n      -khtml-user-select: none;    /* Konqueror */\n      -moz-user-select: none;      /* Firefox */\n      -ms-user-select: none;       /* IE/Edge */\n      user-select: none;           /* non-prefixed version, currently not supported by any browser */\n    }"
            ],
            template: "\n    <tree-viewport #viewport>\n      <div\n        class=\"tree\"\n        [class.node-dragging]=\"treeDraggedElement.isDragging()\">\n        <tree-node-collection\n          *ngIf=\"treeModel.roots\"\n          [nodes]=\"treeModel.roots\"\n          [treeModel]=\"treeModel\"\n          [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n        </tree-node-collection>\n        <tree-node-drop-slot\n          class=\"empty-tree-drop-slot\"\n          *ngIf=\"treeModel.isEmptyTree()\"\n          [dropIndex]=\"0\"\n          [node]=\"treeModel.virtualRoot\">\n        </tree-node-drop-slot>\n      </div>\n    </tree-viewport>\n  "
        }),
        __metadata("design:paramtypes", [TreeModel,
            TreeDraggedElement,
            Renderer,
            ElementRef])
    ], TreeComponent);
    return TreeComponent;
}());
export { TreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQ3ZFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUVwQixJQUFBLHFCQUFRLEVBQUUsYUFBSSxDQUFRO0FBZ0Q5QjtJQTJDRSx1QkFDUyxTQUFvQixFQUNwQixrQkFBc0MsRUFDckMsUUFBa0IsRUFDbEIsVUFBc0I7UUFKaEMsaUJBUUM7UUFQUSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTVCLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZ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IEV2ZW50RW1pdHRlciwgUmVuZGVyZXIsIEVsZW1lbnRSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZVZpZXdwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgeyBpbmNsdWRlcywgcGljayB9ICA9IF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1RyZWUsIHRyZWUtcm9vdCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtUcmVlTW9kZWxdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4IH0nLFxyXG4gICAgJy5lbXB0eS10cmVlLWRyb3Atc2xvdCAubm9kZS1kcm9wLXNsb3QgeyBoZWlnaHQ6IDIwcHg7IG1pbi13aWR0aDogMTAwcHggfScsXHJcbiAgICBgLnRyZWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAvKiBDaHJvbWUvU2FmYXJpL09wZXJhICovXHJcbiAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogS29ucXVlcm9yICovXHJcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIC8qIElFL0VkZ2UgKi9cclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgICAvKiBub24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cclxuICAgIH1gXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRyZWUtdmlld3BvcnQgI3ZpZXdwb3J0PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJ0cmVlXCJcclxuICAgICAgICBbY2xhc3Mubm9kZS1kcmFnZ2luZ109XCJ0cmVlRHJhZ2dlZEVsZW1lbnQuaXNEcmFnZ2luZygpXCI+XHJcbiAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXHJcbiAgICAgICAgICAqbmdJZj1cInRyZWVNb2RlbC5yb290c1wiXHJcbiAgICAgICAgICBbbm9kZXNdPVwidHJlZU1vZGVsLnJvb3RzXCJcclxuICAgICAgICAgIFt0cmVlTW9kZWxdPVwidHJlZU1vZGVsXCJcclxuICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwie1xyXG4gICAgICAgICAgICBsb2FkaW5nVGVtcGxhdGU6IGxvYWRpbmdUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVUZW1wbGF0ZTogdHJlZU5vZGVUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVXcmFwcGVyVGVtcGxhdGU6IHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0cmVlTm9kZUZ1bGxUZW1wbGF0ZTogdHJlZU5vZGVGdWxsVGVtcGxhdGVcclxuICAgICAgICAgIH1cIj5cclxuICAgICAgICA8L3RyZWUtbm9kZS1jb2xsZWN0aW9uPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90XHJcbiAgICAgICAgICBjbGFzcz1cImVtcHR5LXRyZWUtZHJvcC1zbG90XCJcclxuICAgICAgICAgICpuZ0lmPVwidHJlZU1vZGVsLmlzRW1wdHlUcmVlKClcIlxyXG4gICAgICAgICAgW2Ryb3BJbmRleF09XCIwXCJcclxuICAgICAgICAgIFtub2RlXT1cInRyZWVNb2RlbC52aXJ0dWFsUm9vdFwiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RyZWUtdmlld3BvcnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgX25vZGVzOiBhbnlbXTtcclxuICBfb3B0aW9uczogVHJlZU9wdGlvbnM7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2xvYWRpbmdUZW1wbGF0ZScpIGxvYWRpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZVRlbXBsYXRlJykgdHJlZU5vZGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZScpIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJykgdHJlZU5vZGVGdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdwb3J0Jykgdmlld3BvcnRDb21wb25lbnQ6IFRyZWVWaWV3cG9ydENvbXBvbmVudDtcclxuXHJcbiAgLy8gV2lsbCBiZSBoYW5kbGVkIGluIG5nT25DaGFuZ2VzXHJcbiAgQElucHV0KCkgc2V0IG5vZGVzKG5vZGVzOiBhbnlbXSkgeyB9O1xyXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdGlvbnM6IFRyZWVPcHRpb25zKSB7IH07XHJcblxyXG4gIEBJbnB1dCgpIHNldCBmb2N1c2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgb25Ub2dnbGVFeHBhbmRlZDtcclxuICBAT3V0cHV0KCkgb25BY3RpdmF0ZTtcclxuICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBvbkZvY3VzO1xyXG4gIEBPdXRwdXQoKSBvbkJsdXI7XHJcbiAgQE91dHB1dCgpIG9uVXBkYXRlRGF0YTtcclxuICBAT3V0cHV0KCkgb25Jbml0aWFsaXplZDtcclxuICBAT3V0cHV0KCkgb25Nb3ZlTm9kZTtcclxuICBAT3V0cHV0KCkgb25Mb2FkQ2hpbGQ7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlRmlsdGVyO1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50O1xyXG5cclxuICBAT3V0cHV0KCkgdG9nZ2xlRXhwYW5kZWQ7XHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBmb2N1cztcclxuICBAT3V0cHV0KCkgYmx1cjtcclxuICBAT3V0cHV0KCkgdXBkYXRlRGF0YTtcclxuICBAT3V0cHV0KCkgaW5pdGlhbGl6ZWQ7XHJcbiAgQE91dHB1dCgpIG1vdmVOb2RlO1xyXG4gIEBPdXRwdXQoKSBsb2FkQ2hpbGQ7XHJcbiAgQE91dHB1dCgpIGNoYW5nZUZpbHRlcjtcclxuICBAT3V0cHV0KCkgZXZlbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsLFxyXG4gICAgcHVibGljIHRyZWVEcmFnZ2VkRWxlbWVudDogVHJlZURyYWdnZWRFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHJcbiAgICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZScsICd0cmVlLXJvb3QnLCBlbGVtZW50UmVmKTtcclxuICAgICAgdHJlZU1vZGVsLmV2ZW50TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gdGhpc1tuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdib2R5OiBrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleWRvd24oJGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudHJlZU1vZGVsLmlzRm9jdXNlZCkgcmV0dXJuO1xyXG4gICAgaWYgKGluY2x1ZGVzKFsnaW5wdXQnLCAndGV4dGFyZWEnXSxcclxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb2N1c2VkTm9kZSA9IHRoaXMudHJlZU1vZGVsLmdldEZvY3VzZWROb2RlKCk7XHJcblxyXG4gICAgdGhpcy50cmVlTW9kZWwucGVyZm9ybUtleUFjdGlvbihmb2N1c2VkTm9kZSwgJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JvZHk6IG1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZWRvd24oJGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnNpZGVDbGljayA9IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCgkZXZlbnQudGFyZ2V0LCAnY2xvc2VzdCcsIFsnVHJlZSddKTtcclxuXHJcbiAgICBpZiAoIWluc2lkZUNsaWNrKSB7XHJcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJlZU1vZGVsLnNldERhdGEoe1xyXG4gICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgbm9kZXM6IGNoYW5nZXMubm9kZXMgJiYgY2hhbmdlcy5ub2Rlcy5jdXJyZW50VmFsdWUsXHJcbiAgICAgIGV2ZW50czogcGljayh0aGlzLCB0aGlzLnRyZWVNb2RlbC5ldmVudE5hbWVzKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaXplQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMudmlld3BvcnRDb21wb25lbnQuc2V0Vmlld3BvcnQoKTtcclxuICB9XHJcbn1cclxuIl19