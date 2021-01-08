<template>
  <div class="container text-right">
    <b-card :title="' تعديل ' + Utitle" class="type-card">
      <form @submit.prevent="updateData">
        <b-card-text>
          <p>اسم الكاتب</p>
          <b-form-input v-model="addPost.name"></b-form-input>
          <br />
          <p>النوع</p>
          <b-form-select
            v-model="addPost.type"
            :options="Uoptions"
          ></b-form-select>
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
            <b-button variant="outline-primary" type="submit">تعديل</b-button>
          </div>
        </b-card-text>
      </form>
    </b-card>
    <hr />
    <b-card title="الشكل النهائي" class="type-card">
      <b-card-text>
        <b-card :header="Utitle" class="qq-card">
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
import axios from "axios";

export default {
  layout: "main",
  middleware: "auth",
  data() {
    return {
      Utitle: "",
      Uoptions: [],
      addPost: {
        section: "",
        name: "",
        type: "",
        text: ""
      }
    };
  },
  methods: {
    updateData() {
      this.$store
        .dispatch("editPost", {
          section: this.addPost.section,
          name: this.addPost.name,
          type: this.addPost.type,
          text: this.addPost.text,
          id: this.$route.params.id
        })
        .then(() => {
          this.$swal({
            title: "تم التعديل بنجاح",
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          });
        })
        .catch(e => console.log(e));
    }
  },
  created() {
    const paramId = this.$route.params.id;
    const allArray = this.$store.getters.loadedPosts;
    for (const key in allArray) {
      if (allArray[key].id == paramId) {
        this.addPost = allArray[key];
      }
    }

    // ------------------------------------
    if (this.addPost.section == "poets") {
      this.Utitle = " شعر";
      this.Uoptions = [
        { value: "my", text: "شعر شخصي" },
        { value: "old", text: "شعر قديم" },
        { value: "new", text: "شعر حديث" }
      ];
    }
    if (this.addPost.section == "quotes") {
      this.Utitle = " إقتباس";
      this.Uoptions = [
        { value: "best", text: "إقتباس حكيمة" },
        { value: "sad", text: "إقتباس حزينة" },
        { value: "love", text: "إقتباس رومانسية" }
      ];
    }
    if (this.addPost.section == "storys") {
      this.Utitle = " قصة";
      this.Uoptions = [
        { value: "my", text: "قصة حياتية" },
        { value: "small", text: "قصة صغيرة" },
        { value: "long", text: "قصة طويلة" }
      ];
    }
  }
};
</script>
