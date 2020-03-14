<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel Vue SPA</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{asset('css/custom.css')}}" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/accounting.js/0.4.1/accounting.min.js"></script>

        <!-- ubahan/add 2 -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />
    </head>
    <body class="sb-nav-fixed">

        <div id="app"></div>        
        <!-- ubahan/add 1 -->
        <script src="{{ asset('js/app.js') }}"></script>
        <script>
            
        </script>
    </body>
</html>
