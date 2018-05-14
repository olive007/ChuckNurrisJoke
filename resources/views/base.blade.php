<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Chuck Norris Joke - UI SECRET Olivier</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css">
        <link href="css/app.css" rel="stylesheet" type="text/css">

        <!-- AngularJS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.9/angular.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.9/angular-resource.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.9/angular-animate.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.9/angular-touch.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js"></script>
        <script src="angular.js"></script>
    </head>
    <body ng-app="cnApp">
    	@yield("content")
    </body>
</html>
