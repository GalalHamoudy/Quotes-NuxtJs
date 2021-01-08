<template>
  <div>
    <b-card title="اضافة قصة" class="type-card">
      <form @submit.prevent="sendData">
      <b-card-text>
        <p>اسم الكاتب</p>
        <b-form-input v-model="addPost.name"></b-form-input>
        <br />
        <p>النوع</p>
        <b-form-select v-model="addPost.type" :options="options"></b-form-select>
        <br />
        <br />
        <p>المحتوي (النص)</p>
        <b-form-textarea
          id="textarea"
          v-model="addPost.text"
          rows="3"
          max-rows="3"
        ></b-form-textarea>
        <br />
        <div class="text-center">
          <b-button variant="outline-primary" type="submit">إضافة</b-button>
        </div>
      </b-card-text>
      </form>
    </b-card>
    <hr />
    <b-card title="الشكل النهائي" class="type-card">
      <b-card-text>
        <b-card header="قصة" class="qq-card">
          <blockquote class="blockquote mb-0">
            <p class="text-center">
              {{ addPost.text }}
            </p>
            <footer class="blockquote-footer text-right">
              <cite title="Source Title"> {{ addPost.name }} </cite>
            </footer>
          </blockquote>
        </b-card>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'my', text: "قصة حياتية" },
        { value: "small", text: "قصة صغيرة" },
        { value: "long", text: "قصة طويلة" },
      ],
      addPost:{
        section:'storys',
        name:'',
        type:'long',
        text:'',
      }
    };
  },
  methods:{
    sendData(){
      this.$emit('sendData',this.addPost)
    }
  },

};
</script>
