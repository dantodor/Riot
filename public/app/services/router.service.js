var RouterService = function RouterService(viewer) {

    var $scope = this;
    $scope.currentViewer = null;
    $scope.viewer = viewer;

    route('home', function (id, action) {
        $scope.UpdateViewer('myi-home');
    });

    route('about', function (id, action) {
        $scope.UpdateViewer('myi-about');
    });

    route('', function (id, action) {
        RouterService.NavigateTo('home');
    });
};

RouterService.prototype.Run = function Run() {
    route.start(true);
};

RouterService.prototype.UpdateViewer = function UpdateViewer(tag, opts) {
    var $scope = this;
    $scope.currentViewer && $scope.currentViewer[0].unmount(true);
    $scope.currentViewer = riot.mount($scope.viewer, tag, opts);
};

/* Static method */
RouterService.NavigateTo = function NavigateTo(url, title, shouldBeReplaced) {
    route(url, title, shouldBeReplaced);
};