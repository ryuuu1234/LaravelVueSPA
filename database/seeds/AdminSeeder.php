<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Hariyadi',
            'email'=>'pharyyady@gmail.com',
            'password'=>bcrypt('141312'),
            'role'=> 'Administrator'
        ]);
    }
}
