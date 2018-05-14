@extends('base')

@section('content')
	<div class="container" ng-controller="IndexCtrl">
		<div class="row">
			<h2 class="text-center">Welcome to joke speaker about Chuck Norris</h2>
			<div class="col-md-offset-2 col-md-8">
				<img src="img/ChuckNorris.jpg" height="100%" width="100%" class="img-rounded">
			</div>
		</div>
		<div ng-show="data.jokeList.length == 0 && data.topList.length == 0">
			<div class="row">
				<div class="col-md-offset-2 col-md-8">
				<hr>
					<joke ng-show="data.joke != null" j=data.joke></joke>
					<div class="text-center" ng-hide="data.joke != null">
						<i class="fa fa-circle-o-notch fa-spin" style="font-size:10vw"></i>
						<h5>Loading..</h5>
					</div>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-md-offset-2 col-md-8">
				<hr>
				<div class="row"><!--
					--><div class="col-xs-6 vcenter">
						<a class="btn btn-lg btn-primary" ng-click="newJoke()">Get a new joke</a>
					</div><!--
					--><div class="col-xs-6 vcenter">
						<p>Or search jokes with an specific words</p>
						<search></search>
					</div><!--
				--></div>
			</div>
			<div class="row">
				<div class="col-md-offset-2 col-md-8">
				<hr>
					<h3>Try to get a new joke by categorie</h3>
					<category-list></category-list>
				</div>
			</div>
			<div class="row">
				<div class="col-md-offset-2 col-md-8">
				<hr>
					<h3>Access to joke TOP 10</h3>
					<a class="btn btn-lg btn-primary" ng-click="top(10)">Top 10</a>
				</div>
			</div>
		</div>
	</div>
	<div ng-show="data.jokeList.length != 0">
		<div class="row">
			<div class="col-md-offset-2 col-md-8">
				<h2><% data.jokeListTitle %></h2>
				<hr>
				<joke j=joke ng-repeat="joke in data.jokeList"></joke>
			</div>
		</div>
		<div class="row">
			<div class="col-md-offset-2 col-md-8 text-right">
				<hr>
				<a class="btn btn-lg btn-primary" ng-click="back()">Back</a>
			</div>
		</div>
	</div>
	<div ng-show="data.topList.length != 0">
		<div class="row">
			<div class="col-md-offset-2 col-md-8">
				<h2 class="text-center"><% data.jokeListTitle %></h2>
				<hr>
				<ul class="list-group">
					<li class="list-group-item" ng-repeat="top in data.topList"><% top.jokeId %> <span class="badge"><% top.rank %></span></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-offset-2 col-md-8 text-right">
				<hr>
				<a class="btn btn-lg btn-primary" ng-click="back()">Back</a>
			</div>
		</div>
	</div>
	<div class="row">
		<div id="blankFooter"></div>
	</div>
@endsection
