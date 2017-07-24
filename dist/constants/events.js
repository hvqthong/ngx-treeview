export var TREE_EVENTS = {
    onToggleExpanded: 'onToggleExpanded',
    onActivate: 'onActivate',
    onDeactivate: 'onDeactivate',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onInitialized: 'onInitialized',
    onUpdateData: 'onUpdateData',
    onMoveNode: 'onMoveNode',
    onEvent: 'onEvent',
    onLoadChild: 'onLoadChild',
    onChangeFilter: 'onChangeFilter',
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    event: 'event',
    loadChild: 'loadChild',
    changeFilter: 'changeFilterr'
};
export function newName(name) {
    return name[2].toLowerCase() + name.slice(3);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHO0lBQ3pCLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixZQUFZLEVBQUUsY0FBYztJQUM1QixPQUFPLEVBQUUsU0FBUztJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixhQUFhLEVBQUUsZUFBZTtJQUM5QixZQUFZLEVBQUUsY0FBYztJQUM1QixVQUFVLEVBQUUsWUFBWTtJQUN4QixPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsYUFBYTtJQUMxQixjQUFjLEVBQUUsZ0JBQWdCO0lBRWhDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFdBQVc7SUFDdEIsWUFBWSxFQUFFLGVBQWU7Q0FDOUIsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLElBQUk7SUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVFJFRV9FVkVOVFMgPSB7XHJcbiAgb25Ub2dnbGVFeHBhbmRlZDogJ29uVG9nZ2xlRXhwYW5kZWQnLFxyXG4gIG9uQWN0aXZhdGU6ICdvbkFjdGl2YXRlJyxcclxuICBvbkRlYWN0aXZhdGU6ICdvbkRlYWN0aXZhdGUnLFxyXG4gIG9uRm9jdXM6ICdvbkZvY3VzJyxcclxuICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gIG9uSW5pdGlhbGl6ZWQ6ICdvbkluaXRpYWxpemVkJyxcclxuICBvblVwZGF0ZURhdGE6ICdvblVwZGF0ZURhdGEnLFxyXG4gIG9uTW92ZU5vZGU6ICdvbk1vdmVOb2RlJyxcclxuICBvbkV2ZW50OiAnb25FdmVudCcsXHJcbiAgb25Mb2FkQ2hpbGQ6ICdvbkxvYWRDaGlsZCcsXHJcbiAgb25DaGFuZ2VGaWx0ZXI6ICdvbkNoYW5nZUZpbHRlcicsXHJcblxyXG4gIHRvZ2dsZUV4cGFuZGVkOiAndG9nZ2xlRXhwYW5kZWQnLFxyXG4gIGFjdGl2YXRlOiAnYWN0aXZhdGUnLFxyXG4gIGRlYWN0aXZhdGU6ICdkZWFjdGl2YXRlJyxcclxuICBmb2N1czogJ2ZvY3VzJyxcclxuICBibHVyOiAnYmx1cicsXHJcbiAgaW5pdGlhbGl6ZWQ6ICdpbml0aWFsaXplZCcsXHJcbiAgdXBkYXRlRGF0YTogJ3VwZGF0ZURhdGEnLFxyXG4gIG1vdmVOb2RlOiAnbW92ZU5vZGUnLFxyXG4gIGV2ZW50OiAnZXZlbnQnLFxyXG4gIGxvYWRDaGlsZDogJ2xvYWRDaGlsZCcsXHJcbiAgY2hhbmdlRmlsdGVyOiAnY2hhbmdlRmlsdGVycidcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdOYW1lKG5hbWUpIHtcclxuICByZXR1cm4gbmFtZVsyXS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgzKTtcclxufVxyXG4iXX0=