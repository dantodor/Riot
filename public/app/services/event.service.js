var EventService = function EventService() {};

EventService.emit = function emit(event_name, data) {
    var event = document.createEvent('Event');
    event.initEvent(event_name, true, true);
    event.data = data;
    document.dispatchEvent(event);
};

EventService.subscribe = function on(event_name, handler) {
    document.addEventListener(event_name, handler);
};

EventService.unsubscribe = function(event_name, handler) {
    document.removeEventListener(event_name, handler);
};