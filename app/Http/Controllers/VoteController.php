<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Repositories\VoteRepository;

class VoteController extends Controller {

	function __construct($foo = null) {
		\Debugbar::disable();
	}

	public function getRank(string $jokeId, VoteRepository $repo) {
		return $repo->count($jokeId);
	}

	public function getTop(int $number, VoteRepository $repo) {
		return $repo->top($number);
	}

	public function postVote(string $jokeId, VoteRepository $repo) {

		$ip = \Request::ip();
		$repo->save($jokeId, $ip);

		return "Vote saved for $ip";
	}

	public function deleteVote(string $jokeId, VoteRepository $repo) {
		$ip = \Request::ip();
		if ($repo->delete($jokeId, $ip)) {
			return "Vote deleted for $ip";
		}
		else {
			return "Vote already to 0 for $ip";
		}
	}

}
