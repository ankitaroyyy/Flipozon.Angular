 var module = angular.module("sampleApp", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'Templates/login.template.html',
                    controller: 'loginController'
                }).
                when('/Electronics', {
                    templateUrl: 'Templates/Electronics.template.html',
                    controller: 'JSONController'
                }).
                when('/Books', {
                    templateUrl: 'Templates/Books.template.html',
                    controller: 'JSONController'
                }).
                when('/Clothes', {
                    templateUrl: 'Templates/Clothes.template.html',
                    controller: 'JSONController'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);


<<<<<<< HEAD
module.controller( 'loginController', function($scope,$rootScope,$location) {
=======
module.controller( 'loginController', function($scope,$rootScope) {
>>>>>>> c9a822fa35956a3ce960f75e945de7eae8eba8e3
  
  
    $rootScope.logpage = 1;
  


	
	
   $scope.validate = function(form)
{
  var obj = JSON.parse(users);
 
cond = 0;

for(i=0;i<obj.length;i++){
  




if(form.userid == obj[i].username)
{
cond = 1;
if(form.pswrd == obj[i].password)
{

<<<<<<< HEAD
$location.path("/Books");
=======
$location.path("/Electronics");
>>>>>>> c9a822fa35956a3ce960f75e945de7eae8eba8e3
break;

}

else
{
alert("Incorrect Password");
break;

}


}




}

if(cond == 0){
alert("Incorrect Credentials");
}      

}
   
       

});

module.controller('JSONController',function($scope,$rootScope){
  
  $rootScope.logpage = 0;
  
  $scope.Electronics = JSON.parse(Electronics);
   $scope.Books = JSON.parse(Books);
   $scope.Clothes = JSON.parse(Clothes);
<<<<<<< HEAD

  
  
});

module.controller('MainController', function($scope){



$scope.added=[];


$scope.AddItem = function(name,price){

 var cart = {

name: name,
price: price


};

$scope.added.push(cart);
console.log($scope.added);
alert("Item added");


};
  


=======
  
  
  
  
  
>>>>>>> c9a822fa35956a3ce960f75e945de7eae8eba8e3
});
