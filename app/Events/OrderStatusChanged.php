<?php

namespace App\Events;

use App\User;
use App\Order;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class OrderStatusChanged implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $order;
    public $user;

    // /**
    //  * Create a new event instance.
    //  *
    //  * @return void
    //  */
    public function __construct(Order $order, User $user)
    {
        $this->order = $order;
        $this->user = $user->name;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        // return new Channel('capcin-tracker'); // ini yang lama untuk channel private
        // return new Channel('capcin-tracker'); // ini untuk pulic channel pusher
        return ['capcin-tracker'];
    }
}
