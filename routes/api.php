<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/time', @function () {
    return date("Y-m-d H:i:s");
});

Route::get('/rank/{jokeId}', 'VoteController@getRank');
Route::get('/top/{number}', 'VoteController@getTop');
Route::post('/vote/{jokeId}', 'VoteController@postVote');
Route::delete('/vote/{jokeId}', 'VoteController@deleteVote');
