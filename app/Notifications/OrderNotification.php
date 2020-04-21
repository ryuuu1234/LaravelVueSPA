<?php

namespace App\Notifications;

// use App\User;
// use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class OrderNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */

     //DEFINSIKAN GLOBAL VARIABLE
    protected $order;
    protected $user;
    
    // public function __construct(Order $order, User $user)
    public function __construct($order, $user)
    {
        //ASSIGN DATA YANG DITERIMA KE DALAM GLOBAL VARIABLE
        $this->order = $order;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        // return ['mail']; ini default nya

        //JADI KITA MENGGUNAKAN DUA METHOD, SIMPAN KE DATABASE DAN BROADCAST KE PUSHER
        //PUSHER ADALAH PIHAK KETIGA YANG AKAN DIGUNAKAN UNTUK REALTIME NOTIFICATION
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */

    //FORM DATA YANG DISIMPAN KE DALAM DATABASE
    public function toDatabase($notifiable)
    {
        $status=$this->order->status_id;
        if($status==1){
            return [
            'sender_id' => $this->user->id,
            'sender_name' => $this->user->name,
            'sender_role' => $this->user->role,
            'order' => $this->order,
            'status' => $this->order->status->name,
            'read'  => false
        ];
        }else if($status==3){
            return [
            'sender_id' => $this->user->id,
            'sender_name' => $this->user->name,
            'sender_role' => $this->user->role,
            'order' => $this->order,
            'status' => $this->order->status->name,
            'packing' => $this->order->packing->status,
            'read'  => false
        ];
        }else if($status==4){
            return [
                'sender_id' => $this->user->id,
                'sender_name' => $this->user->name,
                'sender_role' => $this->user->role,
                'order' => $this->order,
                'status' => $this->order->status->name,
                'supplier' => $this->order->supplier->status,
                'read'  => false
            ];

        }else{
            return [
                'sender_id' => $this->user->id,
                'sender_name' => $this->user->name,
                'sender_role' => $this->user->role,
                'order' => $this->order,
                'status' => $this->order->status->name,
                'read'  => false
            ];
        }
    }

    //FORM DATA YANG AKAN DI BROADCAST
    public function toBroadcast($notifiable)
    {
        $status=$this->order->status_id;
        if($status==1){
            return new BroadcastMessage([
            'sender_id' => $this->user->id,
            'sender_name' => $this->user->name,
            'sender_role' => $this->user->role,
            'order' => $this->order,
            'status' => $this->order->status->name,
            'read'  => false
        ]);
        }else if($status==3){
            return new BroadcastMessage([
            'sender_id' => $this->user->id,
            'sender_name' => $this->user->name,
            'sender_role' => $this->user->role,
            'order' => $this->order,
            'status' => $this->order->status->name,
            'packing' => $this->order->packing->status,
            'read'  => false
        ]);
        }else if($status==4){
            return new BroadcastMessage([
                'sender_id' => $this->user->id,
                'sender_name' => $this->user->name,
                'sender_role' => $this->user->role,
                'order' => $this->order,
                'status' => $this->order->status->name,
                'supplier' => $this->order->supplier->status,
                'read'  => false
            ]);

        }else{
            return new BroadcastMessage([
                'sender_id' => $this->user->id,
                'sender_name' => $this->user->name,
                'sender_role' => $this->user->role,
                'order' => $this->order,
                'status' => $this->order->status->name,
                'read'  => false
            ]);
        }
        // return new BroadcastMessage([
        //     'sender_id' => $this->user->id,
        //     'sender_name' => $this->user->name,
        //     'sender_role' => $this->user->role,
        //     'order' => $this->order,
        //     'status' => $this->order->status->name,
        //     'packing' => $this->order->packing->status,
        //     'supplier' => $this->order->supplier->status,
        //     'read'  => false
        // ]);
    }

    //SEBENARNYA JIKA TIDAK ADA PERBEDAAN FORM DATA, KITA BISA LANGSUNG MENGGUNAKAN SATU METHOD SAJA YAKNI toArray()

    // public function toMail($notifiable)
    // {
    //     return (new MailMessage)
    //                 ->line('The introduction to the notification.')
    //                 ->action('Notification Action', url('/'))
    //                 ->line('Thank you for using our application!');
    // }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    // public function toArray($notifiable)
    // {
    //     return [
    //         //
    //     ];
    // }
}
