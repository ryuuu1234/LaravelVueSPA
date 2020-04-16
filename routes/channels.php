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

//channel order status
Broadcast::channel('capcin-tracker', function () {
    return true;
});

// Broadcast::channel('capcin-tracker.{id}', function () {
//     return true;
// });
