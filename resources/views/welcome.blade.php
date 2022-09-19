<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <title>ponkotsu</title>
    @react
    @client
    @tag('Index')
</head>
<div data-relative-input="true" id="scene" style="margin:auto">
    <div data-depth="0.4">苦しい</div>
</div>
<script>
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });
    parallaxInstance.friction(0.2, 0.2);
</script>
<div id="index"></div>
<div id="pome"></div>
</body>
</html>
