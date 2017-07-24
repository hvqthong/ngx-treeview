var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';
import { TREE_ACTIONS } from './models/tree-options.model';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { TreeDraggedElement } from './models/tree-dragged-element.model';
import { TreeVirtualScroll } from './models/tree-virtual-scroll.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import { TreeNodeExpanderComponent } from './components/tree-node-expander.component';
import { TreeNodeChildrenComponent } from './components/tree-node-children.component';
import { TreeNodeCollectionComponent } from './components/tree-node-collection.component';
import { TreeNodeWrapperComponent } from './components/tree-node-wrapper.component';
import { TreeViewportComponent } from './components/tree-viewport.component';
import { TreeDropDirective } from './directives/tree-drop.directive';
import { TreeDragDirective } from './directives/tree-drag.directive';
import { TreeAnimateOpenDirective } from './directives/tree-animate-open.directive';
import './polyfills';
export { TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, TREE_ACTIONS, KEYS, LoadingComponent, TreeComponent, TreeNodeComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent };
var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        NgModule({
            declarations: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeAnimateOpenDirective
            ],
            exports: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeAnimateOpenDirective
            ],
            imports: [
                CommonModule,
                MobxAngularModule
            ],
            providers: [
                TreeDraggedElement
            ]
        })
    ], TreeModule);
    return TreeModule;
}());
export { TreeModule };
export default TreeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmd1bGFyLXRyZWUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBVyxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFrQyxNQUFNLDZCQUE2QixDQUFDO0FBRTNGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsT0FBTyxhQUFhLENBQUM7QUFFckIsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUVqQixZQUFZLEVBQ1osSUFBSSxFQUtKLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDdEIsQ0FBQztBQXlDRjtJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBdkN0QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsMkJBQTJCO2dCQUMzQixxQkFBcUI7Z0JBQ3JCLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLHlCQUF5QjtnQkFDekIseUJBQXlCO2dCQUN6QixnQkFBZ0I7Z0JBQ2hCLDJCQUEyQjtnQkFDM0IscUJBQXFCO2dCQUNyQix3QkFBd0I7Z0JBQ3hCLHdCQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxrQkFBa0I7YUFDbkI7U0FDRixDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtTQUFiLFVBQVU7QUFFdkIsZUFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vYnhBbmd1bGFyTW9kdWxlIH0gZnJvbSAnbW9ieC1hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFRSRUVfQUNUSU9OUywgSUFjdGlvbk1hcHBpbmcsIElBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgSVRyZWVPcHRpb25zLCBJQWxsb3dEcm9wRm4sIElBbGxvd0RyYWdGbiB9IGZyb20gJy4vZGVmcy9hcGknO1xyXG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi9jb25zdGFudHMva2V5cyc7XHJcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuL21vZGVscy90cmVlLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlRHJvcFNsb3QgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1leHBhbmRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtZHJvcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyYWcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtYW5pbWF0ZS1vcGVuLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgJy4vcG9seWZpbGxzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgVHJlZU1vZGVsLFxyXG4gIFRyZWVOb2RlLFxyXG4gIFRyZWVEcmFnZ2VkRWxlbWVudCxcclxuICBUcmVlVmlydHVhbFNjcm9sbCxcclxuICBJVHJlZU9wdGlvbnMsXHJcbiAgVFJFRV9BQ1RJT05TLFxyXG4gIEtFWVMsXHJcbiAgSUFjdGlvbk1hcHBpbmcsXHJcbiAgSUFjdGlvbkhhbmRsZXIsXHJcbiAgSUFsbG93RHJvcEZuLFxyXG4gIElBbGxvd0RyYWdGbixcclxuICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gIFRyZWVDb21wb25lbnQsXHJcbiAgVHJlZU5vZGVDb21wb25lbnQsXHJcbiAgVHJlZU5vZGVDb250ZW50LFxyXG4gIFRyZWVEcm9wRGlyZWN0aXZlLFxyXG4gIFRyZWVEcmFnRGlyZWN0aXZlLFxyXG4gIFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQsXHJcbiAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcclxuICBUcmVlTm9kZURyb3BTbG90LFxyXG4gIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCxcclxuICBUcmVlVmlld3BvcnRDb21wb25lbnRcclxufTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUcmVlQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNvbnRlbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgVHJlZURyb3BEaXJlY3RpdmUsXHJcbiAgICBUcmVlRHJhZ0RpcmVjdGl2ZSxcclxuICAgIFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVEcm9wU2xvdCxcclxuICAgIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCxcclxuICAgIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVHJlZUNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDb250ZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIFRyZWVEcm9wRGlyZWN0aXZlLFxyXG4gICAgVHJlZURyYWdEaXJlY3RpdmUsXHJcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlRHJvcFNsb3QsXHJcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgICBUcmVlVmlld3BvcnRDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1vYnhBbmd1bGFyTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFRyZWVEcmFnZ2VkRWxlbWVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWVNb2R1bGU7XHJcbiJdfQ==