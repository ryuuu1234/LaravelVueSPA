<?php

use Illuminate\Database\Seeder;

class Register_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Register::create([
            'name'=>'Nafisa',
            'email'=>'nafisa@yahoo.com',
            'password'=>bcrypt('12345'),
            'role'=> 'Produksi'
        ]);
      
    }
}
