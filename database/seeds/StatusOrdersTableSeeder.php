<?php

use Illuminate\Database\Seeder;
use App\StatusOrder;
class StatusOrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('status_orders')->delete();

        $status = [
            ['name' => 'Order'],
            ['name' => 'Proses Produksi'],
            ['name' => 'Proses Packing'],
            ['name' => 'Dikirim'],
            ['name' => 'Terkirim'],
            ['name' => 'Selesai'],
        ];
    
        StatusOrder::insert($status);
    }
}
