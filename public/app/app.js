<myi-app>

    <div>
        <myi-navbar></myi-navbar>
        <div ref='viewer'></div>
    </div>

    <script>
        var $scope = this;

        $scope.on('mount', function() {
            $scope.RouterService = new RouterService($scope.refs.viewer);
            $scope.RouterService.Run();
        });

    </script>

</myi-app>