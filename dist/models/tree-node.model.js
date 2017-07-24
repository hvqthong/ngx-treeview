var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, computed, action } from 'mobx';
import { TREE_EVENTS } from '../constants/events';
import * as _ from 'lodash';
var first = _.first, last = _.last;
var TreeNode = (function () {
    function TreeNode(data, parent, treeModel, index) {
        var _this = this;
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = function (element, $event) {
            return _this.options.allowDrop(element, { parent: _this, index: 0 }, $event);
        };
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
    }
    Object.defineProperty(TreeNode.prototype, "isHidden", {
        get: function () { return this.treeModel.isHidden(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this.treeModel.isExpanded(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this.treeModel.isActive(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.isNodeFocused(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "level", {
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "path", {
        get: function () {
            return this.parent ? this.parent.path.concat([this.id]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "elementRef", {
        get: function () {
            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "originalNode", {
        get: function () { return this._originalNode; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "hasChildren", {
        // helper get functions:
        get: function () {
            return !!(this.data.hasChildren || (this.children && this.children.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isCollapsed", {
        get: function () { return !this.isExpanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isLeaf", {
        get: function () { return !this.hasChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () { return this.parent.data.virtual; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "realParent", {
        get: function () { return this.isRoot ? null : this.parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "options", {
        // proxy functions:
        get: function () { return this.treeModel.options; },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.fireEvent = function (event) { this.treeModel.fireEvent(event); };
    Object.defineProperty(TreeNode.prototype, "displayField", {
        // field accessors:
        get: function () {
            return this.getField('display');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "id", {
        get: function () {
            return this.getField('id');
        },
        set: function (value) {
            this.setField('id', value);
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getField = function (key) {
        return this.data[this.options[key + "Field"]];
    };
    TreeNode.prototype.setField = function (key, value) {
        this.data[this.options[key + "Field"]] = value;
    };
    // traversing:
    TreeNode.prototype._findAdjacentSibling = function (steps, skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden)[this.index + steps];
    };
    TreeNode.prototype.findNextSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(+1, skipHidden);
    };
    TreeNode.prototype.findPreviousSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(-1, skipHidden);
    };
    TreeNode.prototype.getVisibleChildren = function () {
        return this.visibleChildren;
    };
    Object.defineProperty(TreeNode.prototype, "visibleChildren", {
        get: function () {
            return (this.children || []).filter(function (node) { return !node.isHidden; });
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getFirstChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return first(children || []);
    };
    TreeNode.prototype.getLastChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return last(children || []);
    };
    TreeNode.prototype.findNextNode = function (goInside, skipHidden) {
        if (goInside === void 0) { goInside = true; }
        if (skipHidden === void 0) { skipHidden = false; }
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    };
    TreeNode.prototype.findPreviousNode = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getLastOpenDescendant = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getParentsChildren = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    };
    TreeNode.prototype.getIndexInParent = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden).indexOf(this);
    };
    TreeNode.prototype.isDescendantOf = function (node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    };
    TreeNode.prototype.getNodePadding = function () {
        return this.options.levelPadding * (this.level - 1) + 'px';
    };
    TreeNode.prototype.getClass = function () {
        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(' ');
    };
    TreeNode.prototype.onDrop = function ($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    };
    TreeNode.prototype.allowDrag = function () {
        return this.options.allowDrag(this);
    };
    // helper methods:
    TreeNode.prototype.loadChild = function () {
        var _this = this;
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then(function (children) {
            if (children) {
                _this.setField('children', children);
                _this._initChildren();
                _this.children.forEach(function (child) {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                });
            }
        }).then(function () {
            _this.fireEvent({
                eventName: TREE_EVENTS.onLoadChild,
                node: _this
            });
        });
    };
    TreeNode.prototype.expand = function () {
        if (!this.isExpanded) {
            return this.toggleExpanded();
        }
        return Promise.resolve();
    };
    TreeNode.prototype.collapse = function () {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.doForAll = function (fn) {
        var _this = this;
        Promise.resolve(fn(this)).then(function () {
            if (_this.children) {
                _this.children.forEach(function (child) { return child.doForAll(fn); });
            }
        });
    };
    TreeNode.prototype.expandAll = function () {
        this.doForAll(function (node) { return node.expand(); });
    };
    TreeNode.prototype.collapseAll = function () {
        this.doForAll(function (node) { return node.collapse(); });
    };
    TreeNode.prototype.ensureVisible = function () {
        if (this.realParent) {
            this.realParent.expand();
            this.realParent.ensureVisible();
        }
        return this;
    };
    TreeNode.prototype.toggleExpanded = function () {
        return this.setIsExpanded(!this.isExpanded);
    };
    TreeNode.prototype.setIsExpanded = function (value) {
        if (this.hasChildren) {
            this.treeModel.setExpandedNode(this, value);
            if (!this.children && this.hasChildren && value) {
                return this.loadChild();
            }
        }
        return Promise.resolve();
    };
    ;
    TreeNode.prototype.setIsActive = function (value, multi) {
        if (multi === void 0) { multi = false; }
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.focus(this.options.scrollOnSelect);
        }
        return this;
    };
    TreeNode.prototype.toggleActivated = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(!this.isActive, multi);
        return this;
    };
    TreeNode.prototype.setActiveAndVisible = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(true, multi)
            .ensureVisible();
        setTimeout(this.scrollIntoView.bind(this));
        return this;
    };
    TreeNode.prototype.scrollIntoView = function (force) {
        if (force === void 0) { force = false; }
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    };
    TreeNode.prototype.focus = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        if (scroll) {
            this.scrollIntoView();
        }
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.onBlur, node: previousNode });
        }
        this.fireEvent({ eventName: TREE_EVENTS.onFocus, node: this });
        return this;
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.onBlur, node: this });
        }
        return this;
    };
    TreeNode.prototype.setIsHidden = function (value) {
        this.treeModel.setIsHidden(this, value);
    };
    TreeNode.prototype.hide = function () {
        this.setIsHidden(true);
    };
    TreeNode.prototype.show = function () {
        this.setIsHidden(false);
    };
    TreeNode.prototype.mouseAction = function (actionName, $event, data) {
        if (data === void 0) { data = null; }
        this.treeModel.setFocus(true);
        var actionMapping = this.options.actionMapping.mouse;
        var action = actionMapping[actionName];
        if (action) {
            action(this.treeModel, this, $event, data);
        }
    };
    TreeNode.prototype.getSelfHeight = function () {
        return this.options.nodeHeight(this);
    };
    TreeNode.prototype._initChildren = function () {
        var _this = this;
        this.children = this.getField('children')
            .map(function (c, index) { return new TreeNode(c, _this, _this.treeModel, index); });
    };
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isHidden", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isExpanded", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isActive", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "isFocused", null);
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], TreeNode.prototype, "children", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], TreeNode.prototype, "index", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeNode.prototype, "position", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], TreeNode.prototype, "height", void 0);
    __decorate([
        computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "level", null);
    __decorate([
        computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "path", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeNode.prototype, "visibleChildren", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeNode.prototype, "_initChildren", null);
    return TreeNode;
}());
export { TreeNode };
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy90cmVlLW5vZGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVcsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUNwQixJQUFBLGVBQUssRUFBRSxhQUFJLENBQU87QUFFMUI7SUF5QkUsa0JBQW1CLElBQVMsRUFBUyxNQUFnQixFQUFTLFNBQW9CLEVBQUUsS0FBYTtRQUFqRyxpQkFTQztRQVRrQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFqQnRFLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFtSnpCLGNBQVMsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFPO1lBQzNCLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUE7UUFuSUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLHVHQUF1RztRQUN6RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFD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OENBQTZEO0lBQzVEO1FBQVQsUUFBUTs7OzRDQUF5RDtJQUN4RDtRQUFULFFBQVE7Ozs2Q0FBK0Q7SUFFNUQ7UUFBWCxVQUFVOzs4Q0FBc0I7SUFDckI7UUFBWCxVQUFVOzsyQ0FBZTtJQUNkO1FBQVgsVUFBVTs7OENBQWM7SUFDYjtRQUFYLFVBQVU7OzRDQUFnQjtJQUNqQjtRQUFULFFBQVE7Ozt5Q0FFUjtJQUNTO1FBQVQsUUFBUTs7O3dDQUVSO0lBd0VTO1FBQVQsUUFBUTs7O21EQUVSO0lBME9PO1FBQVAsTUFBTTs7OztpREFHTjtJQUNILGVBQUM7Q0FBQSxBQXZVRCxJQXVVQztTQXZVWSxRQUFRO0FBeVVyQjtJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGF1dG9ydW4sIGFjdGlvbiB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4vdHJlZS1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgSVRyZWVOb2RlIH0gZnJvbSAnLi4vZGVmcy9hcGknO1xyXG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBfO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIGltcGxlbWVudHMgSVRyZWVOb2RlIHtcclxuICBAY29tcHV0ZWQgZ2V0IGlzSGlkZGVuKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNIaWRkZW4odGhpcyk7IH07XHJcbiAgQGNvbXB1dGVkIGdldCBpc0V4cGFuZGVkKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNFeHBhbmRlZCh0aGlzKTsgfTtcclxuICBAY29tcHV0ZWQgZ2V0IGlzQWN0aXZlKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNBY3RpdmUodGhpcyk7IH07XHJcbiAgQGNvbXB1dGVkIGdldCBpc0ZvY3VzZWQoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc05vZGVGb2N1c2VkKHRoaXMpOyB9O1xyXG5cclxuICBAb2JzZXJ2YWJsZSBjaGlsZHJlbjogVHJlZU5vZGVbXTtcclxuICBAb2JzZXJ2YWJsZSBpbmRleDogbnVtYmVyO1xyXG4gIEBvYnNlcnZhYmxlIHBvc2l0aW9uID0gMDtcclxuICBAb2JzZXJ2YWJsZSBoZWlnaHQ6IG51bWJlcjtcclxuICBAY29tcHV0ZWQgZ2V0IGxldmVsKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5sZXZlbCArIDEgOiAwO1xyXG4gIH1cclxuICBAY29tcHV0ZWQgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMuaWRdIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbWVudFJlZigpOiBhbnkge1xyXG4gICAgdGhyb3cgYEVsZW1lbnQgUmVmIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgc2luY2UgaW50cm9kdWNpbmcgdmlydHVhbCBzY3JvbGxcXG5cclxuICAgICAgWW91IG1heSB1c2UgYSB0ZW1wbGF0ZSB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnRgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb3JpZ2luYWxOb2RlOiBhbnk7XHJcbiAgZ2V0IG9yaWdpbmFsTm9kZSgpIHsgcmV0dXJuIHRoaXMuX29yaWdpbmFsTm9kZTsgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IGFueSwgcHVibGljIHBhcmVudDogVHJlZU5vZGUsIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaWQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmlkID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB1dWlkKCk7XHJcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGVyZSdzIGEgdW5pcXVlIGlkIHdpdGhvdXQgb3ZlcnJpZGluZyBleGlzdGluZyBpZHMgdG8gd29yayB3aXRoIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZXNcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRGaWVsZCgnY2hpbGRyZW4nKSkge1xyXG4gICAgICB0aGlzLl9pbml0Q2hpbGRyZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGhlbHBlciBnZXQgZnVuY3Rpb25zOlxyXG4gIGdldCBoYXNDaGlsZHJlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLmRhdGEuaGFzQ2hpbGRyZW4gfHwgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSk7XHJcbiAgfVxyXG4gIGdldCBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmlzRXhwYW5kZWQ7IH1cclxuICBnZXQgaXNMZWFmKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuaGFzQ2hpbGRyZW47IH1cclxuICBnZXQgaXNSb290KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YS52aXJ0dWFsOyB9XHJcbiAgZ2V0IHJlYWxQYXJlbnQoKTogVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogdGhpcy5wYXJlbnQ7IH1cclxuXHJcbiAgLy8gcHJveHkgZnVuY3Rpb25zOlxyXG4gIGdldCBvcHRpb25zKCk6IFRyZWVPcHRpb25zIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLm9wdGlvbnM7IH1cclxuICBmaXJlRXZlbnQoZXZlbnQpIHsgdGhpcy50cmVlTW9kZWwuZmlyZUV2ZW50KGV2ZW50KTsgfVxyXG5cclxuICAvLyBmaWVsZCBhY2Nlc3NvcnM6XHJcbiAgZ2V0IGRpc3BsYXlGaWVsZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEZpZWxkKCdkaXNwbGF5Jyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRGaWVsZCgnaWQnKTtcclxuICB9XHJcblxyXG4gIHNldCBpZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5zZXRGaWVsZCgnaWQnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZChrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5vcHRpb25zW2Ake2tleX1GaWVsZGBdXTtcclxuICB9XHJcblxyXG4gIHNldEZpZWxkKGtleSwgdmFsdWUpIHtcclxuICAgIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyB0cmF2ZXJzaW5nOlxyXG4gIF9maW5kQWRqYWNlbnRTaWJsaW5nKHN0ZXBzLCBza2lwSGlkZGVuID0gZmFsc2UpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oc2tpcEhpZGRlbilbdGhpcy5pbmRleCArIHN0ZXBzXTtcclxuICB9XHJcblxyXG4gIGZpbmROZXh0U2libGluZyhza2lwSGlkZGVuID0gZmFsc2UpIHtcclxuICAgIHJldHVybiB0aGlzLl9maW5kQWRqYWNlbnRTaWJsaW5nKCsxLCBza2lwSGlkZGVuKTtcclxuICB9XHJcblxyXG4gIGZpbmRQcmV2aW91c1NpYmxpbmcoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmluZEFkamFjZW50U2libGluZygtMSwgc2tpcEhpZGRlbik7XHJcbiAgfVxyXG5cclxuICBnZXRWaXNpYmxlQ2hpbGRyZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlQ2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IHZpc2libGVDaGlsZHJlbigpIHtcclxuICAgIHJldHVybiAodGhpcy5jaGlsZHJlbiB8fCBbXSkuZmlsdGVyKChub2RlKSA9PiAhbm9kZS5pc0hpZGRlbik7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdENoaWxkKHNraXBIaWRkZW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gc2tpcEhpZGRlbiA/IHRoaXMudmlzaWJsZUNoaWxkcmVuIDogdGhpcy5jaGlsZHJlbjtcclxuXHJcbiAgICByZXR1cm4gZmlyc3QoY2hpbGRyZW4gfHwgW10pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdENoaWxkKHNraXBIaWRkZW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gc2tpcEhpZGRlbiA/IHRoaXMudmlzaWJsZUNoaWxkcmVuIDogdGhpcy5jaGlsZHJlbjtcclxuXHJcbiAgICByZXR1cm4gbGFzdChjaGlsZHJlbiB8fCBbXSk7XHJcbiAgfVxyXG5cclxuICBmaW5kTmV4dE5vZGUoZ29JbnNpZGUgPSB0cnVlLCBza2lwSGlkZGVuID0gZmFsc2UpIHtcclxuICAgIHJldHVybiBnb0luc2lkZSAmJiB0aGlzLmlzRXhwYW5kZWQgJiYgdGhpcy5nZXRGaXJzdENoaWxkKHNraXBIaWRkZW4pIHx8XHJcbiAgICAgICAgICAgdGhpcy5maW5kTmV4dFNpYmxpbmcoc2tpcEhpZGRlbikgfHxcclxuICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5maW5kTmV4dE5vZGUoZmFsc2UsIHNraXBIaWRkZW4pO1xyXG4gIH1cclxuXHJcbiAgZmluZFByZXZpb3VzTm9kZShza2lwSGlkZGVuID0gZmFsc2UpIHtcclxuICAgIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0aGlzLmZpbmRQcmV2aW91c1NpYmxpbmcoc2tpcEhpZGRlbik7XHJcbiAgICBpZiAoIXByZXZpb3VzU2libGluZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWFsUGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2libGluZy5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KHNraXBIaWRkZW4pO1xyXG4gIH1cclxuXHJcbiAgX2dldExhc3RPcGVuRGVzY2VuZGFudChza2lwSGlkZGVuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMuZ2V0TGFzdENoaWxkKHNraXBIaWRkZW4pO1xyXG4gICAgcmV0dXJuICh0aGlzLmlzQ29sbGFwc2VkIHx8ICFsYXN0Q2hpbGQpXHJcbiAgICAgID8gdGhpc1xyXG4gICAgICA6IGxhc3RDaGlsZC5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KHNraXBIaWRkZW4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFyZW50c0NoaWxkcmVuKHNraXBIaWRkZW4gPSBmYWxzZSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wYXJlbnQgJiZcclxuICAgICAgKHNraXBIaWRkZW4gPyB0aGlzLnBhcmVudC5nZXRWaXNpYmxlQ2hpbGRyZW4oKSA6IHRoaXMucGFyZW50LmNoaWxkcmVuKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRyZW4gfHwgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEluZGV4SW5QYXJlbnQoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGFyZW50c0NoaWxkcmVuKHNraXBIaWRkZW4pLmluZGV4T2YodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2NlbmRhbnRPZihub2RlOiBUcmVlTm9kZSkge1xyXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZSByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaXNEZXNjZW5kYW50T2Yobm9kZSk7XHJcbiAgfVxyXG5cclxuICBnZXROb2RlUGFkZGluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sZXZlbFBhZGRpbmcgKiAodGhpcy5sZXZlbCAtIDEpICsgJ3B4JztcclxuICB9XHJcblxyXG4gIGdldENsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gW3RoaXMub3B0aW9ucy5ub2RlQ2xhc3ModGhpcyksIGB0cmVlLW5vZGUtbGV2ZWwtJHsgdGhpcy5sZXZlbCB9YF0uam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgb25Ecm9wKCRldmVudCkge1xyXG4gICAgdGhpcy5tb3VzZUFjdGlvbignZHJvcCcsICRldmVudC5ldmVudCwge1xyXG4gICAgICBmcm9tOiAkZXZlbnQuZWxlbWVudCxcclxuICAgICAgdG86IHsgcGFyZW50OiB0aGlzLCBpbmRleDogMCwgZHJvcE9uTm9kZTogdHJ1ZSB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFsbG93RHJvcCA9IChlbGVtZW50LCAkZXZlbnQ/KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93RHJvcChlbGVtZW50LCB7IHBhcmVudDogdGhpcywgaW5kZXg6IDAgfSwgJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGFsbG93RHJhZygpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcmFnKHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIGhlbHBlciBtZXRob2RzOlxyXG4gIGxvYWRDaGlsZCgpIHtcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmdldENoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgLy8gTm90IGdldENoaWxkcmVuIG1ldGhvZCAtIGZvciB1c2luZyByZWR1eFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRyZW4odGhpcykpXHJcbiAgICAgIC50aGVuKChjaGlsZHJlbikgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRGaWVsZCgnY2hpbGRyZW4nLCBjaGlsZHJlbik7XHJcbiAgICAgICAgICB0aGlzLl9pbml0Q2hpbGRyZW4oKTtcclxuICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmdldEZpZWxkKCdpc0V4cGFuZGVkJykgJiYgY2hpbGQuaGFzQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBjaGlsZC5leHBhbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH19KS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCh7XHJcbiAgICAgICAgICBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uTG9hZENoaWxkLFxyXG4gICAgICAgICAgbm9kZTogdGhpc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cGFuZCgpIHtcclxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2UoKSB7XHJcbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRvRm9yQWxsKGZuOiAobm9kZTogSVRyZWVOb2RlKSA9PiBhbnkpIHtcclxuICAgIFByb21pc2UucmVzb2x2ZShmbih0aGlzKSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuZG9Gb3JBbGwoZm4pKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleHBhbmRBbGwoKSB7XHJcbiAgICB0aGlzLmRvRm9yQWxsKChub2RlKSA9PiBub2RlLmV4cGFuZCgpKTtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlQWxsKCkge1xyXG4gICAgdGhpcy5kb0ZvckFsbCgobm9kZSkgPT4gbm9kZS5jb2xsYXBzZSgpKTtcclxuICB9XHJcblxyXG4gIGVuc3VyZVZpc2libGUoKSB7XHJcbiAgICBpZiAodGhpcy5yZWFsUGFyZW50KSB7XHJcbiAgICAgIHRoaXMucmVhbFBhcmVudC5leHBhbmQoKTtcclxuICAgICAgdGhpcy5yZWFsUGFyZW50LmVuc3VyZVZpc2libGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUV4cGFuZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0SXNFeHBhbmRlZCghdGhpcy5pc0V4cGFuZGVkKTtcclxuICB9XHJcblxyXG4gIHNldElzRXhwYW5kZWQodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmhhc0NoaWxkcmVuKSB7XHJcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEV4cGFuZGVkTm9kZSh0aGlzLCB2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuY2hpbGRyZW4gJiYgdGhpcy5oYXNDaGlsZHJlbiAmJiB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRDaGlsZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH07XHJcblxyXG4gIHNldElzQWN0aXZlKHZhbHVlLCBtdWx0aSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRBY3RpdmVOb2RlKHRoaXMsIHZhbHVlLCBtdWx0aSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5mb2N1cyh0aGlzLm9wdGlvbnMuc2Nyb2xsT25TZWxlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQWN0aXZhdGVkKG11bHRpID0gZmFsc2UpIHtcclxuICAgIHRoaXMuc2V0SXNBY3RpdmUoIXRoaXMuaXNBY3RpdmUsIG11bHRpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZUFuZFZpc2libGUobXVsdGkgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5zZXRJc0FjdGl2ZSh0cnVlLCBtdWx0aSlcclxuICAgICAgLmVuc3VyZVZpc2libGUoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc2Nyb2xsSW50b1ZpZXcuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxJbnRvVmlldyhmb3JjZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsU2Nyb2xsLnNjcm9sbEludG9WaWV3KHRoaXMsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKHNjcm9sbCA9IHRydWUpIHtcclxuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xyXG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXNlZE5vZGUodGhpcyk7XHJcbiAgICBpZiAoc2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxuICAgIGlmIChwcmV2aW91c05vZGUpIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uQmx1ciwgbm9kZTogcHJldmlvdXNOb2RlIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uRm9jdXMsIG5vZGU6IHRoaXMgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBibHVyKCkge1xyXG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMudHJlZU1vZGVsLmdldEZvY3VzZWROb2RlKCk7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1c2VkTm9kZShudWxsKTtcclxuICAgIGlmIChwcmV2aW91c05vZGUpIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uQmx1ciwgbm9kZTogdGhpcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldElzSGlkZGVuKHZhbHVlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRJc0hpZGRlbih0aGlzLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5zZXRJc0hpZGRlbih0cnVlKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLnNldElzSGlkZGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG1vdXNlQWN0aW9uKGFjdGlvbk5hbWU6IHN0cmluZywgJGV2ZW50LCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25NYXBwaW5nID0gdGhpcy5vcHRpb25zLmFjdGlvbk1hcHBpbmcubW91c2U7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBwaW5nW2FjdGlvbk5hbWVdO1xyXG5cclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgYWN0aW9uKHRoaXMudHJlZU1vZGVsLCB0aGlzLCAkZXZlbnQsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZkhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubm9kZUhlaWdodCh0aGlzKTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gX2luaXRDaGlsZHJlbigpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmdldEZpZWxkKCdjaGlsZHJlbicpXHJcbiAgICAgIC5tYXAoKGMsIGluZGV4KSA9PiBuZXcgVHJlZU5vZGUoYywgdGhpcywgdGhpcy50cmVlTW9kZWwsIGluZGV4KSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1dWlkKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwMCk7XHJcbn1cclxuIl19