<?php

use Illuminate\Database\Seeder;

use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->delete();

        $roles = [
            ['name' => 'Root'],
            ['name' => 'Admin'],
            ['name' => 'Produksi'],
            ['name' => 'Packing'],
            ['name' => 'Supplier'],
            ['name' => 'Mitra'],
        ];
    
        Role::insert($roles);
    }
}
