var RequestService = function RequestService() {
    var $scope = this;
};

RequestService.prototype.HandleResponse = function HandleResponse(xhr, callback) {
    var $scope = this;
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        callback(data);
    }
    else
        $scope.HandleError(xhr);
};

RequestService.prototype.HandleError = function HandleError(xhr) {
    console.error(xhr);
};

RequestService.prototype.Get = function Get(url, callback) {
    var $scope = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4)
            $scope.HandleResponse(xhr, callback);
    };
    xhr.open('GET', url, true);
    xhr.send();
};

RequestService.prototype.Post = function Post(url, data, callback) {

    var dataObject = data;
    if (data instanceof Object && !(data instanceof FormData))
        dataObject = JSON.stringify(data);

    var $scope = this;
    var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4)
            $scope.HandleResponse(xhr, callback);
    };
    xhr.open('POST', url, true);
    xhr.send(dataObject);
};