<template>
  <div class="container text-right" data-aos="zoom-in" data-aos-duration="500">
    <b-card class="type-card">
      <b-form @submit.prevent="onSubmit">
        <h2 class="text-center">تسجيل الدخول</h2>
        <b-form-group
          id="input-group-1"
          label="البريد الالكتروني"
          label-for="input-1"
          description="لن نشارك بريدك الإلكتروني مع أي شخص آخر"
        >
          <b-form-input
            id="input-1"
            type="email"
            required
            v-model="email"
          ></b-form-input>
        </b-form-group>
        <label for="text-password">كلمة المرور</label>
        <b-input
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          v-model="password"
        ></b-input>
        <b-form-text id="password-help-block">
          يجب أن تتكون كلمة مرورك من 8 إلى 20 حرفًا ، وأن تحتوي على أحرف وأرقام
          ، ويجب ألا تحتوي على مسافات أو أحرف خاصة أو رموز تعبيرية
        </b-form-text>
        <hr />
        <b-button type="submit">تسجيل</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "main",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authLog", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$swal({
            title: "تم التسجيل بنجاح",
            confirmButtonText: "الدخول اللي لوحة التحكم",
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          }).then(result => {
            if (result.isConfirmed) {
              this.$router.push("../admin");
            }
          });
        })
        .catch(() => {
          this.$swal({
            title: "حدث خطأ يرجي المحاولة لاحقا",
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          });
        });
    }
  }
};
</script>
