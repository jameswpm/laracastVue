class Errors {
    constructor() {
      this.errors = { }
    }

    get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }

    record(error) {
      this.errors = error;
    }

    clear(field) {
      delete(this.errors[field]);
    }

    has(field) {
      return this.errors.hasOwnProperty(field);
    }

    any() {
      return Object.keys(this.errors).length > 0;
    }
}

new Vue({
  el: '#app',

  data: {
      name: '',
      description: '',
      errors: new Errors()
  },

  methods: {
    onSubmit() {
      axios.post('/projects', this.$data)
            .then(response => this.onSuccess
            .catch(error => {
              this.errors.record(error.response.data)}
            );
    },

    onSuccess() {

    }
  }
});
