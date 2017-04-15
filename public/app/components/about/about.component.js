<myi-about>

    <h2>About</h2>

    <script>
        var $scope = this;
        $scope.on('mount', function() {
            EventService.emit('URL_CHANGED', { url: 'about' });
        });
    </script>  

</myi-about>