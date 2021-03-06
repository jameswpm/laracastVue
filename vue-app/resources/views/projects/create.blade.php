<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css">

        <title>Projects</title>

    </head>
    <body>
        <div id="app">

            @include ('projects.list')

            <form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
              <div class="control">
                <label for="name">Project name:</label>
                <input type="text" name="name" class="input" v-model="form.name">
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

              </div>
              <div class="control">
                <label for="description">Project Description:</label>
                <input type="text" name="description" class="input" v-model="form.description">
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>

              </div>

              <div class="control">
                <button type="submit" class="button is-primary" :disabled="form.errors.any()">Create</button>

              </div>
            </form>

        </div>

        <script src="https://unpkg.com/vue@2.3.3"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
