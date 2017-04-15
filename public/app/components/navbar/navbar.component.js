<myi-navbar>

    <a onclick='{navigateTo}' data-url='home'>Home</a>
    <a onclick='{navigateTo}' data-url='about'>About</a>

    <script>

        var $scope = this;    


        $scope.on('before-mount', function() {
            EventService.subscribe('URL_CHANGED', function(event) {
                console.log(event.data.url);
                if (event.data.url === 'home') {
                    EventService.emit('HELLO');
                }
            });
        });

        $scope.navigateTo = function (e) {
            RouterService.NavigateTo(e.target.dataset.url);
        };
    </script>

</myi-navbar>