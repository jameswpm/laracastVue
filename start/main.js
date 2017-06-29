Vue.component('message', {

  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
    <div id="root" class="container" v-show="isVisible">
      <article class="message">
        <div class="message-header">
          <p>{{ title }}</p>
          <button class="delete" @click="hideModal">X</button>
        </div>
        <div class="message-body">
          {{ body }}
        </div>
      </article>
    </div>
  `,

  methods: {
    hideModal() {
        this.isVisible = false;
    }
  }
});

Vue.component('modal',{
  template:`
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <button class="modal-close" @click="$emit('close')"></button>
    </div>
  `
});

new Vue({
  el: '#root',
  data: {
    showModal: false
  }
})
