<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

use App\Vote;

class VoteRepository {

    protected $entity;

	public function __construct(Vote $entity)
	{
		$this->entity = $entity;
	}

	public function save($jokeId, $ip) {
        $this->entity->jokeId = $jokeId;
        $this->entity->ip = $ip;
        $this->entity->save();
	}

	public function count($jokeId) {
		return $this->entity->where('jokeId', $jokeId)->count();
	}

	public function delete($jokeId, $ip) {
		return $this->entity->where([
				['jokeId', $jokeId],
				['ip', $ip]
			])->limit(1)->delete();
	}

	public function top($limit) {
		return DB::table('vote')->select(DB::raw('jokeId, count(*) as rank'))->groupBy('jokeId')->limit($limit)->orderBy('rank', 'desc')->get();
	}

}
