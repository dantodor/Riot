<myi-home>
    <div>
        <h2>
            Home
        </h2>
        <button onclick='{Get}'>Http Request (GET)</button>
        <button onclick='{Post}'>Http Request (POST)</button>
        <button onclick='{PostForm}'>Http Request FORM (POST)</button>
    </div>

    <script>
        var $scope = this;

        // Start listening before mounting tag
        $scope.on('before-mount', function() {
            EventService.subscribe('HELLO', $scope.helloHandler);
        });

        $scope.on('mount', function() {
            $scope.RequestService = new RequestService();
            EventService.emit('URL_CHANGED', { url: 'home' });
        });

        // Don't forgot to unsubscribe your subscription of event
        $scope.on('before-unmount', function() {
            EventService.unsubscribe('HELLO', $scope.helloHandler);
        });

        $scope.helloHandler = function(data) {
            console.log(data);
        };

        $scope.Get = function() {
            $scope.RequestService.Get(Urls.ApiGet, function(data) {
                console.log('get', data);
            });
        };

        $scope.PostForm = function() {
            var formData = new FormData();
            formData.append('name', 'Alexandre RUIZ');
            $scope.RequestService.Post(Urls.ApiPost, formData, function(data) {
                console.log('post form', data);
            });
        };

        $scope.Post = function() {
            $scope.RequestService.Post(Urls.ApiPost, {test: 'test'}, function(data) {
                console.log('post', data);
            });
        };
    </script>
</myi-home>