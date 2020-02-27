<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::tokensCan([
            'Root' => 'Root token scope',
            'Admin' => 'Admin token scope',
            'Produksi' => 'Produksi token scope',
            'Packing' => 'Packing token scope',
            'Supplier' => 'Supplier token scope',
            'Mitra' => 'Mitra token scope',
        ]);
    }
}
