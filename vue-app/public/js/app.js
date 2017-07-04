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
      if (field) {
       delete(this.errors[field]);
      }
      else {
        this.errors = {};
      }
    }

    has(field) {
      return this.errors.hasOwnProperty(field);
    }

    any() {
      return Object.keys(this.errors).length > 0;
    }
}

class Form {

  constructor(data) {

    this.originalData = data;

    for(let field in data) {
      this[field] = data[field];
    }
    this.errors =  new Errors();

  }

  reset() {
    for (let field in originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }

  data() {
    let data = Object.assign({}, this);

    delete data.originalData;
    delete data.errors;

    return data;
  }

  submit(requestType, url) {

    return new Promise((resolve, reject) => {
        axios[requestType](url, this.data())
            .then(response => {
              this.onSuccess(response.data);

              resolve(response.data);
             })
            .catch(error => {
              this.onFail(error.response.data);

              reject(error.response.data);
            });
    });

     
  }

  onSuccess(data) {

    alert (data.message);

    this.reset();

  }

  onFail(errors) {
     this.errors.record(errors);
  }
}

new Vue({
  el: '#app',

  data: {
     form: new Form({
      name: '',
      description: ''
     })
  },

  methods: {
    onSubmit() {
      this.form.submit('post', '/projects')
          .then(data => console.log(data))
          .catch(errors => console.log(errors));
    }
  }
});
