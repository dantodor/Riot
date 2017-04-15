# Riot
Riot starter with Request and Urls, Events, Router modules

# Components

### App
* Navbar definition
* Viewer definition
* RouterService initialization

### Navbar
* RouterService.NavigateTo usage
* Url definition on a attribute
* Simple template
* EventService usage (listening event of viewer)
* EventService usage (communication with home component)

### Home
* RequestService usage (GET, POST, POST (form)
* EventService usage (communication with navbar)

### About
* EventService usage (communication with navbar)

___

# Services
### EventService 
```javascript
  EventService.emit(EVENT_NAME, CUSTOM_DATA);
  
  /* Handler need to be not anonymous method */
  EventService.subscribe(EVENT_NAME, HANDLER_FUNCTION);
  EventService.unsubscribe(EVENT_NAME, HANDLER_FUNCTION);
```
### RequestService
```javascript
  RequestService.prototype.HandleResponse = function (xhr, callback) { /* Call HandlerError if error */ }
  RequestService.prototype.HandleError = function (xhr) { /* TODO */ }
  
  // Basic usage
  RequestService.Get(URL, CALLBACK);
  RequestService.Post(URL, DATA, CALLBACK);
```

### RouterService
```javascript
  /* Viewer is your container for tag injection */
  RouterService = function RouterService(viewer) { /* Define your logic route here */ }
  RouterService.UpdateViewer(TAG, OPTIONS); // All magic of RouterService
  
  // Basic usage
  var $scope = this;
  $scope.RouterService = new RouterService(MY_VIEWER);
  $scope.RouterService.Run(); // To run route logic
  
  $scope.RouterService.NavigateTo(URL, PAGE_TITLE, SHOULD_BE_REPLACED);
```
### UrlService
```javascript
  var Urls = { /* all your urls */ }
```
