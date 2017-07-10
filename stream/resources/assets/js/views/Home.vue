<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ postedOn(status) }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body">

                    </div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    import moment from 'moment';
    import AddToStream from '../components/AddToStream.vue';

    export default {

        components: {
            AddToStream
        },

        data() {
          return {
              statuses : [],
          }
        },

        created() {
           axios.get('statuses')
                .then(({data}) => this.statuses = data);
        },

        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            },

            addStatus(status) {
                this.statuses.unshift(status);

                alert('Your status has been added');

                window.scrollTo(0,0);
            }
        }
    }
</script>
