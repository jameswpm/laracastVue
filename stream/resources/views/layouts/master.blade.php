<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>My SPA</title>

        <!-- Fonts -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css" rel="stylesheet" type="text/css">
        <link href="/css/app.css" rel="stylesheet" type="text/css">

    </head>
    <body>
    <div id="app">

        @include('layouts.header')

        <section>
            <div class="container">
                <router-view></router-view>
            </div>
        </section>


    </div>

    <script src="/js/app.js"></script>
    </body>
</html>
