<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [

        // ini data aslinya
        // Registered::class => [
        //     SendEmailVerificationNotification::class,
        // ],

        // ini di ubah sesuai tutor pada madarang
        'App\Events\OrderStatusChanged' => [
            'App\Listeners\OrderStatusChangedListener',
        ],
        'App\Events\RegisterEvent' => [
            'App\Listeners\RegisterListener',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
