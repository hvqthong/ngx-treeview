var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { observable, computed, action, autorun, reaction } from 'mobx';
import { TreeModel } from './tree.model';
import { TREE_EVENTS } from '../constants/events';
var Y_OFFSET = 300; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 50; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [autorun(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            reaction(function () { return _this.treeModel.roots; }, fn),
            reaction(function () { return _this.treeModel.expandedNodeIds; }, fn),
            reaction(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(TREE_EVENTS.onLoadChild, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) {
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect().height
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (force ||
            node.position < this.y ||
            node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
            this.viewport.scrollTop = scrollToMiddle ?
                node.position - this.viewportHeight / 2 :
                node.position; // scroll to start
            this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "yBlocks", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "x", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "viewportHeight", void 0);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "y", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "totalHeight", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "_setYBlocks", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "recalcPositions", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "setViewport", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "scrollIntoView", null);
    TreeVirtualScroll = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [TreeModel])
    ], TreeVirtualScroll);
    return TreeVirtualScroll;
}());
export { TreeVirtualScroll };
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLDJFQUEyRTtBQUNqRyxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxrRUFBa0U7QUFHeEY7SUFnQkUsMkJBQW9CLFNBQW9CO1FBQXhDLGlCQUdDO1FBSG1CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFiNUIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBV2QsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBWFMsc0JBQUksZ0NBQUM7YUFBTDtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVTLHNCQUFJLDBDQUFXO2FBQWY7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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LFFBQVEsQ0FBQztnQkFBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3hDLElBQUk7Z0JBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uLCBhdXRvcnVuLCByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xyXG5cclxuY29uc3QgWV9PRkZTRVQgPSAzMDA7IC8vIEV4dHJhIHBpeGVscyBvdXRzaWRlIHRoZSB2aWV3cG9ydCwgaW4gZWFjaCBkaXJlY3Rpb24sIHRvIHJlbmRlciBub2RlcyBpblxyXG5jb25zdCBZX0VQU0lMT04gPSA1MDsgLy8gTWluaW11bSBwaXhlbCBjaGFuZ2UgcmVxdWlyZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJlbmRlcmVkIG5vZGVzXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmVlVmlydHVhbFNjcm9sbCB7XHJcbiAgcHJpdmF0ZSBfZGlzcG9zZTogYW55O1xyXG5cclxuICBAb2JzZXJ2YWJsZSB5QmxvY2tzID0gMDtcclxuICBAb2JzZXJ2YWJsZSB4ID0gMDtcclxuICBAb2JzZXJ2YWJsZSB2aWV3cG9ydEhlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnQgPSBudWxsO1xyXG5cclxuICBAY29tcHV0ZWQgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy55QmxvY2tzICogWV9FUFNJTE9OO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCB0b3RhbEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdCA/IHRoaXMudHJlZU1vZGVsLnZpcnR1YWxSb290LmhlaWdodCA6IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVNb2RlbDogVHJlZU1vZGVsKSB7XHJcbiAgICB0cmVlTW9kZWwudmlydHVhbFNjcm9sbCA9IHRoaXM7XHJcbiAgICB0aGlzLl9kaXNwb3NlID0gW2F1dG9ydW4oKCkgPT4gdGhpcy5maXhTY3JvbGwoKSldO1xyXG4gIH1cclxuXHJcbiAgZmlyZUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5maXJlRXZlbnQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IGZuID0gdGhpcy5yZWNhbGNQb3NpdGlvbnMuYmluZCh0aGlzKTtcclxuXHJcbiAgICBmbigpO1xyXG4gICAgdGhpcy5fZGlzcG9zZSA9IFtcclxuICAgICAgLi4udGhpcy5fZGlzcG9zZSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwucm9vdHMsIGZuKSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwuZXhwYW5kZWROb2RlSWRzLCBmbiksXHJcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLmhpZGRlbk5vZGVJZHMsIGZuKVxyXG4gICAgXTtcclxuICAgIHRoaXMudHJlZU1vZGVsLnN1YnNjcmliZShUUkVFX0VWRU5UUy5vbkxvYWRDaGlsZCwgZm4pO1xyXG4gIH1cclxuXHJcbiAgaXNFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLm9wdGlvbnMudXNlVmlydHVhbFNjcm9sbDtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gcHJpdmF0ZSBfc2V0WUJsb2Nrcyh2YWx1ZSkge1xyXG4gICAgdGhpcy55QmxvY2tzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAYWN0aW9uIHJlY2FsY1Bvc2l0aW9ucygpIHtcclxuICAgIHRoaXMudHJlZU1vZGVsLnZpcnR1YWxSb290LmhlaWdodCA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXIodGhpcy50cmVlTW9kZWwuZ2V0VmlzaWJsZVJvb3RzKCksIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25BZnRlcihub2Rlcywgc3RhcnRQb3MpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IHN0YXJ0UG9zO1xyXG5cclxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXJOb2RlKG5vZGUsIHBvc2l0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25BZnRlck5vZGUobm9kZSwgc3RhcnRQb3MpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IG5vZGUuZ2V0U2VsZkhlaWdodCgpICsgc3RhcnRQb3M7XHJcblxyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5pc0V4cGFuZGVkKSB7IC8vIFRCRDogY29uc2lkZXIgbG9hZGluZyBjb21wb25lbnQgYXMgd2VsbFxyXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXIobm9kZS52aXNpYmxlQ2hpbGRyZW4sIHBvc2l0aW9uKTtcclxuICAgIH1cclxuICAgIG5vZGUuaGVpZ2h0ID0gcG9zaXRpb24gLSBzdGFydFBvcztcclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2Rpc3Bvc2UuZm9yRWFjaCgoZCkgPT4gZCgpKTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gc2V0Vmlld3BvcnQodmlld3BvcnQpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICB2aWV3cG9ydCxcclxuICAgICAgeDogdmlld3BvcnQuc2Nyb2xsTGVmdCxcclxuICAgICAgeUJsb2NrczogTWF0aC5yb3VuZCh2aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pLFxyXG4gICAgICB2aWV3cG9ydEhlaWdodDogdmlld3BvcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZSwgZm9yY2UsIHNjcm9sbFRvTWlkZGxlID0gdHJ1ZSkge1xyXG4gICAgaWYgKGZvcmNlIHx8IC8vIGZvcmNlIHNjcm9sbCB0byBub2RlXHJcbiAgICAgIG5vZGUucG9zaXRpb24gPCB0aGlzLnkgfHwgLy8gbm9kZSBpcyBhYm92ZSB2aWV3cG9ydFxyXG4gICAgICBub2RlLnBvc2l0aW9uICsgbm9kZS5nZXRTZWxmSGVpZ2h0KCkgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0KSB7IC8vIG5vZGUgaXMgYmVsb3cgdmlld3BvcnRcclxuICAgICAgdGhpcy52aWV3cG9ydC5zY3JvbGxUb3AgPSBzY3JvbGxUb01pZGRsZSA/XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiAtIHRoaXMudmlld3BvcnRIZWlnaHQgLyAyIDogLy8gc2Nyb2xsIHRvIG1pZGRsZVxyXG4gICAgICAgIG5vZGUucG9zaXRpb247IC8vIHNjcm9sbCB0byBzdGFydFxyXG5cclxuICAgICAgdGhpcy5fc2V0WUJsb2NrcyhNYXRoLmZsb29yKHRoaXMudmlld3BvcnQuc2Nyb2xsVG9wIC8gWV9FUFNJTE9OKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3cG9ydE5vZGVzKG5vZGVzKSB7XHJcbiAgICBpZiAoIW5vZGVzKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgdmlzaWJsZU5vZGVzID0gbm9kZXMuZmlsdGVyKChub2RlKSA9PiAhbm9kZS5pc0hpZGRlbik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSByZXR1cm4gdmlzaWJsZU5vZGVzO1xyXG5cclxuICAgIGlmICghdGhpcy52aWV3cG9ydEhlaWdodCB8fCAhdmlzaWJsZU5vZGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIFNlYXJjaCBmb3IgZmlyc3Qgbm9kZSBpbiB0aGUgdmlld3BvcnQgdXNpbmcgYmluYXJ5IHNlYXJjaFxyXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXHJcbiAgICAvLyBPciB0aGF0IGVuZHMgYWZ0ZXIgdGhlIGJlZ2lubmluZyBvZiB0aGUgdmlld3BvcnRcclxuICAgIGNvbnN0IGZpcnN0SW5kZXggPSBiaW5hcnlTZWFyY2godmlzaWJsZU5vZGVzLCAobm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKG5vZGUucG9zaXRpb24gKyBZX09GRlNFVCA+IHRoaXMueSkgfHxcclxuICAgICAgICAgICAgIChub2RlLnBvc2l0aW9uICsgbm9kZS5oZWlnaHQgPiB0aGlzLnkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2VhcmNoIGZvciBsYXN0IG5vZGUgaW4gdGhlIHZpZXdwb3J0IHVzaW5nIGJpbmFyeSBzZWFyY2hcclxuICAgIC8vIExvb2sgZm9yIGZpcnN0IG5vZGUgdGhhdCBzdGFydHMgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgdmlld3BvcnQgKHdpdGggYnVmZmVyKVxyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gYmluYXJ5U2VhcmNoKHZpc2libGVOb2RlcywgKG5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIG5vZGUucG9zaXRpb24gLSBZX09GRlNFVCA+IHRoaXMueSArIHRoaXMudmlld3BvcnRIZWlnaHQ7XHJcbiAgICB9LCBmaXJzdEluZGV4KTtcclxuXHJcbiAgICBjb25zdCB2aWV3cG9ydE5vZGVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xyXG4gICAgICB2aWV3cG9ydE5vZGVzLnB1c2godmlzaWJsZU5vZGVzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlld3BvcnROb2RlcztcclxuICB9XHJcblxyXG4gIGZpeFNjcm9sbCgpIHtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLm1heCgwLCB0aGlzLnRvdGFsSGVpZ2h0IC0gdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IDApIHRoaXMuX3NldFlCbG9ja3MoMCk7XHJcbiAgICBpZiAodGhpcy55ID4gbWF4WSkgdGhpcy5fc2V0WUJsb2NrcyhtYXhZIC8gWV9FUFNJTE9OKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaChub2RlcywgY29uZGl0aW9uLCBmaXJzdEluZGV4ID0gMCkge1xyXG4gIGxldCBpbmRleCA9IGZpcnN0SW5kZXg7XHJcbiAgbGV0IHRvSW5kZXggPSBub2Rlcy5sZW5ndGggLSAxO1xyXG5cclxuICB3aGlsZSAoaW5kZXggIT09IHRvSW5kZXgpIHtcclxuICAgIGxldCBtaWRJbmRleCA9IE1hdGguZmxvb3IoKGluZGV4ICsgdG9JbmRleCkgLyAyKTtcclxuXHJcbiAgICBpZiAoY29uZGl0aW9uKG5vZGVzW21pZEluZGV4XSkpIHtcclxuICAgICAgdG9JbmRleCA9IG1pZEluZGV4O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gbWlkSW5kZXgpIGluZGV4ID0gdG9JbmRleDtcclxuICAgICAgZWxzZSBpbmRleCA9IG1pZEluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5kZXg7XHJcbn1cclxuIl19