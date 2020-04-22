<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('App.Register.{id}', function () {
    return true;
});

// //channel order status
// Broadcast::channel('capcin-tracker', function () {
//     return true;
// });

Broadcast::channel('capcin-tracker.{id}', function ($user, $id) {
    return [$user->id==='App\Order'::find($id)->user_id];
});
