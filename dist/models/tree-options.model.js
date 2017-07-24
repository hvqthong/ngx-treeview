import { KEYS } from '../constants/keys';
import * as _ from 'lodash';
export var TREE_ACTIONS = {
    TOGGLE_SELECTED: function (tree, node, $event) { return node && node.toggleActivated(); },
    TOGGLE_SELECTED_MULTI: function (tree, node, $event) { return node && node.toggleActivated(true); },
    SELECT: function (tree, node, $event) { return node.setIsActive(true); },
    DESELECT: function (tree, node, $event) { return node.setIsActive(false); },
    FOCUS: function (tree, node, $event) { return node.focus(); },
    TOGGLE_EXPANDED: function (tree, node, $event) { return node.hasChildren && node.toggleExpanded(); },
    EXPAND: function (tree, node, $event) { return node.expand(); },
    COLLAPSE: function (tree, node, $event) { return node.collapse(); },
    DRILL_DOWN: function (tree, node, $event) { return tree.focusDrillDown(); },
    DRILL_UP: function (tree, node, $event) { return tree.focusDrillUp(); },
    NEXT_NODE: function (tree, node, $event) { return tree.focusNextNode(); },
    PREVIOUS_NODE: function (tree, node, $event) { return tree.focusPreviousNode(); },
    MOVE_NODE: function (tree, node, $event, _a) {
        var from = _a.from, to = _a.to;
        // default action assumes from = node, to = {parent, index}
        tree.moveNode(from, to);
    }
};
var defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_SELECTED,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: (_a = {},
        _a[KEYS.RIGHT] = TREE_ACTIONS.DRILL_DOWN,
        _a[KEYS.LEFT] = TREE_ACTIONS.DRILL_UP,
        _a[KEYS.DOWN] = TREE_ACTIONS.NEXT_NODE,
        _a[KEYS.UP] = TREE_ACTIONS.PREVIOUS_NODE,
        _a[KEYS.SPACE] = TREE_ACTIONS.TOGGLE_SELECTED,
        _a[KEYS.ENTER] = TREE_ACTIONS.TOGGLE_SELECTED,
        _a)
};
var TreeOptions = (function () {
    function TreeOptions(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.actionMapping = _.defaultsDeep({}, this.options.actionMapping, defaultActionMapping);
    }
    Object.defineProperty(TreeOptions.prototype, "childrenField", {
        get: function () { return this.options.childrenField || 'children'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "displayField", {
        get: function () { return this.options.displayField || 'name'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "idField", {
        get: function () { return this.options.idField || 'id'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "isExpandedField", {
        get: function () { return this.options.isExpandedField || 'isExpanded'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "isHiddenField", {
        get: function () { return this.options.isHiddenField || 'isHidden'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "getChildren", {
        get: function () { return this.options.getChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "levelPadding", {
        get: function () { return this.options.levelPadding || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useVirtualScroll", {
        get: function () { return this.options.useVirtualScroll; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateExpand", {
        get: function () { return this.options.animateExpand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateSpeed", {
        get: function () { return this.options.animateSpeed || 30; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateAcceleration", {
        get: function () { return this.options.animateAcceleration || 1.2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollOnSelect", {
        get: function () { return this.options.scrollOnSelect === undefined ? true : this.options.scrollOnSelect; },
        enumerable: true,
        configurable: true
    });
    TreeOptions.prototype.allowDrop = function (element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    };
    TreeOptions.prototype.allowDrag = function (node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    };
    TreeOptions.prototype.nodeClass = function (node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    };
    TreeOptions.prototype.nodeHeight = function (node) {
        if (node.data.virtual) {
            return 0;
        }
        var nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    };
    Object.defineProperty(TreeOptions.prototype, "dropSlotHeight", {
        get: function () {
            return this.options.dropSlotHeight || 2;
        },
        enumerable: true,
        configurable: true
    });
    return TreeOptions;
}());
export { TreeOptions };
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1vcHRpb25zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3pDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBTTVCLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRztJQUMxQixlQUFlLEVBQUUsVUFBQyxJQUFlLEVBQUUsSUFBYyxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCO0lBQ2pHLHFCQUFxQixFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBbEMsQ0FBa0M7SUFDM0csTUFBTSxFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQjtJQUNoRixRQUFRLEVBQUUsVUFBQyxJQUFlLEVBQUUsSUFBYyxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCO0lBQ25GLEtBQUssRUFBRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVk7SUFDckUsZUFBZSxFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBekMsQ0FBeUM7SUFDNUcsTUFBTSxFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJ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R0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQkFBSSx1Q0FBYzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFDSCxrQkFBQztBQUFELENBQUMsQUExREQsSUEwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi90cmVlLm1vZGVsJztcclxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9rZXlzJztcclxuaW1wb3J0IHsgSVRyZWVPcHRpb25zIH0gZnJvbSAnLi4vZGVmcy9hcGknO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSGFuZGxlciB7XHJcbiAgKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55LCAuLi5yZXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRSRUVfQUNUSU9OUyA9IHtcclxuICBUT0dHTEVfU0VMRUNURUQ6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZSAmJiBub2RlLnRvZ2dsZUFjdGl2YXRlZCgpLFxyXG4gIFRPR0dMRV9TRUxFQ1RFRF9NVUxUSTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlICYmIG5vZGUudG9nZ2xlQWN0aXZhdGVkKHRydWUpLFxyXG4gIFNFTEVDVDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLnNldElzQWN0aXZlKHRydWUpLFxyXG4gIERFU0VMRUNUOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUuc2V0SXNBY3RpdmUoZmFsc2UpLFxyXG4gIEZPQ1VTOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUuZm9jdXMoKSxcclxuICBUT0dHTEVfRVhQQU5ERUQ6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5oYXNDaGlsZHJlbiAmJiBub2RlLnRvZ2dsZUV4cGFuZGVkKCksXHJcbiAgRVhQQU5EOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUuZXhwYW5kKCksXHJcbiAgQ09MTEFQU0U6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5jb2xsYXBzZSgpLFxyXG4gIERSSUxMX0RPV046ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gdHJlZS5mb2N1c0RyaWxsRG93bigpLFxyXG4gIERSSUxMX1VQOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IHRyZWUuZm9jdXNEcmlsbFVwKCksXHJcbiAgTkVYVF9OT0RFOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+ICB0cmVlLmZvY3VzTmV4dE5vZGUoKSxcclxuICBQUkVWSU9VU19OT0RFOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+ICB0cmVlLmZvY3VzUHJldmlvdXNOb2RlKCksXHJcbiAgTU9WRV9OT0RFOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnksIHtmcm9tICwgdG99OiB7ZnJvbTogYW55LCB0bzogYW55fSkgPT4ge1xyXG4gICAgLy8gZGVmYXVsdCBhY3Rpb24gYXNzdW1lcyBmcm9tID0gbm9kZSwgdG8gPSB7cGFyZW50LCBpbmRleH1cclxuICAgIHRyZWUubW92ZU5vZGUoZnJvbSwgdG8pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25NYXBwaW5nOiBJQWN0aW9uTWFwcGluZyA9IHtcclxuICBtb3VzZToge1xyXG4gICAgY2xpY2s6IFRSRUVfQUNUSU9OUy5UT0dHTEVfU0VMRUNURUQsXHJcbiAgICBkYmxDbGljazogbnVsbCxcclxuICAgIGNvbnRleHRNZW51OiBudWxsLFxyXG4gICAgZXhwYW5kZXJDbGljazogVFJFRV9BQ1RJT05TLlRPR0dMRV9FWFBBTkRFRCxcclxuICAgIGRyb3A6IFRSRUVfQUNUSU9OUy5NT1ZFX05PREVcclxuICB9LFxyXG4gIGtleXM6IHtcclxuICAgIFtLRVlTLlJJR0hUXTogVFJFRV9BQ1RJT05TLkRSSUxMX0RPV04sXHJcbiAgICBbS0VZUy5MRUZUXTogVFJFRV9BQ1RJT05TLkRSSUxMX1VQLFxyXG4gICAgW0tFWVMuRE9XTl06IFRSRUVfQUNUSU9OUy5ORVhUX05PREUsXHJcbiAgICBbS0VZUy5VUF06IFRSRUVfQUNUSU9OUy5QUkVWSU9VU19OT0RFLFxyXG4gICAgW0tFWVMuU1BBQ0VdOiBUUkVFX0FDVElPTlMuVE9HR0xFX1NFTEVDVEVELFxyXG4gICAgW0tFWVMuRU5URVJdOiBUUkVFX0FDVElPTlMuVE9HR0xFX1NFTEVDVEVEXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uTWFwcGluZyB7XHJcbiAgbW91c2U/OiB7XHJcbiAgICBjbGljaz86IElBY3Rpb25IYW5kbGVyLFxyXG4gICAgZGJsQ2xpY2s/OiBJQWN0aW9uSGFuZGxlcixcclxuICAgIGNvbnRleHRNZW51PzogSUFjdGlvbkhhbmRsZXIsXHJcbiAgICBleHBhbmRlckNsaWNrPzogSUFjdGlvbkhhbmRsZXIsXHJcbiAgICBkcmFnU3RhcnQ/OiBJQWN0aW9uSGFuZGxlcixcclxuICAgIGRyYWc/OiBJQWN0aW9uSGFuZGxlcixcclxuICAgIGRyYWdFbmQ/OiBJQWN0aW9uSGFuZGxlcixcclxuICAgIGRyYWdPdmVyPzogSUFjdGlvbkhhbmRsZXIsXHJcbiAgICBkcmFnTGVhdmU/OiBJQWN0aW9uSGFuZGxlcixcclxuICAgIGRyYWdFbnRlcj86IElBY3Rpb25IYW5kbGVyLFxyXG4gICAgZHJvcD86IElBY3Rpb25IYW5kbGVyXHJcbiAgfTtcclxuICBrZXlzPzoge1xyXG4gICAgW2tleTogbnVtYmVyXTogSUFjdGlvbkhhbmRsZXJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU9wdGlvbnMge1xyXG4gIGdldCBjaGlsZHJlbkZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nOyB9XHJcbiAgZ2V0IGRpc3BsYXlGaWVsZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vcHRpb25zLmRpc3BsYXlGaWVsZCB8fCAnbmFtZSc7IH1cclxuICBnZXQgaWRGaWVsZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vcHRpb25zLmlkRmllbGQgfHwgJ2lkJzsgfVxyXG4gIGdldCBpc0V4cGFuZGVkRmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0V4cGFuZGVkRmllbGQgfHwgJ2lzRXhwYW5kZWQnOyB9XHJcbiAgZ2V0IGlzSGlkZGVuRmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0hpZGRlbkZpZWxkIHx8ICdpc0hpZGRlbic7IH1cclxuICBnZXQgZ2V0Q2hpbGRyZW4oKTogYW55IHsgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXRDaGlsZHJlbjsgfVxyXG4gIGdldCBsZXZlbFBhZGRpbmcoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5sZXZlbFBhZGRpbmcgfHwgMDsgfVxyXG4gIGdldCB1c2VWaXJ0dWFsU2Nyb2xsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vcHRpb25zLnVzZVZpcnR1YWxTY3JvbGw7IH1cclxuICBnZXQgYW5pbWF0ZUV4cGFuZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5hbmltYXRlRXhwYW5kOyB9XHJcbiAgZ2V0IGFuaW1hdGVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVTcGVlZCB8fCAzMDsgfVxyXG4gIGdldCBhbmltYXRlQWNjZWxlcmF0aW9uKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm9wdGlvbnMuYW5pbWF0ZUFjY2VsZXJhdGlvbiB8fCAxLjI7IH1cclxuICBnZXQgc2Nyb2xsT25TZWxlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsT25TZWxlY3QgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsT25TZWxlY3Q7IH1cclxuICBhY3Rpb25NYXBwaW5nOiBJQWN0aW9uTWFwcGluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBJVHJlZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXBwaW5nID0gXy5kZWZhdWx0c0RlZXAoe30sIHRoaXMub3B0aW9ucy5hY3Rpb25NYXBwaW5nLCBkZWZhdWx0QWN0aW9uTWFwcGluZyk7XHJcbiAgfVxyXG5cclxuICBhbGxvd0Ryb3AoZWxlbWVudCwgdG8sICRldmVudD8pOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYWxsb3dEcm9wIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0Ryb3AoZWxlbWVudCwgdG8sICRldmVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0Ryb3AgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLm9wdGlvbnMuYWxsb3dEcm9wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsb3dEcmFnKG5vZGU6IFRyZWVOb2RlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93RHJhZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcmFnKG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0RyYWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub2RlQ2xhc3Mobm9kZTogVHJlZU5vZGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ub2RlQ2xhc3MgPyB0aGlzLm9wdGlvbnMubm9kZUNsYXNzKG5vZGUpIDogJyc7XHJcbiAgfVxyXG5cclxuICBub2RlSGVpZ2h0KG5vZGU6IFRyZWVOb2RlKTogbnVtYmVyIHtcclxuICAgIGlmIChub2RlLmRhdGEudmlydHVhbCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm9kZUhlaWdodCA9IHRoaXMub3B0aW9ucy5ub2RlSGVpZ2h0IHx8IDIyO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygbm9kZUhlaWdodCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBub2RlSGVpZ2h0ID0gbm9kZUhlaWdodChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY2NvdW50IGZvciBkcm9wIHNsb3RzOlxyXG4gICAgcmV0dXJuIG5vZGVIZWlnaHQgKyAobm9kZS5pbmRleCA9PT0gMCA/ICAyIDogMSkgKiB0aGlzLmRyb3BTbG90SGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyb3BTbG90SGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyb3BTbG90SGVpZ2h0IHx8IDI7XHJcbiAgfVxyXG59XHJcbiJdfQ==