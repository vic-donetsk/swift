<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Swift Callback</title>
    <link href="/fonts.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
<div>
    <div style="position:absolute;visibility: hidden;
        opacity: 0;display: none">
        @include('sprite')
    </div>
    <div id="app">
        {{--<header>Шапка</header>--}}
        {{--<nav>Боковое меню</nav>--}}

        {{--        <header-component></header-component>--}}

        <main>
            <router-view></router-view>
        </main>
    </div>
</div>

<script>
    window.translations = {!! $translations !!};
</script>

<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
