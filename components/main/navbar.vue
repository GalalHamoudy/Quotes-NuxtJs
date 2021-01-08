<template>
  <!--  -->
  <div>
    <b-navbar toggleable="lg" class="navbar mb-3">
      <b-navbar-nav class="mr-auto">
        <b-nav-item-dropdown left class="text-right">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <b-avatar variant="dark" size="2rem"></b-avatar>
          </template>
          <b-dropdown-item @click="love">
            المفضلة <b-icon icon="heart-half" class="ricon"></b-icon
          ></b-dropdown-item>
          <b-dropdown-item v-b-toggle.sidebar-1>
            شكل الموقع <b-icon icon="tools" class="ricon"></b-icon
          ></b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="login"
            >تسجيل دخول <b-icon icon="person-fill" class="ricon"></b-icon
          ></b-dropdown-item>
          <b-dropdown-item @click="signin"
            >إنشاء حساب <b-icon icon="person-plus-fill" class="ricon"></b-icon
          ></b-dropdown-item>
          <b-dropdown-item @click="admin">
            لوحة التحكم <b-icon icon="person-lines-fill" class="ricon"></b-icon
          ></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-toggle
          target="nav-collapse"
          class="nav-col"
        ></b-navbar-toggle>
      </b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav class="text-center bad-col">
        <!-- Right aligned nav items -->

        <b-navbar-nav class="m-auto">
          <b-nav-item class="nav-a">
            <nuxt-link to="/type/poets" prefetch
              ><b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon>
              الشعر
              <b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon
            ></nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-a">
            <nuxt-link to="/type/storys" prefetch
              ><b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon>
              القصص
              <b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon
            ></nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-a">
            <nuxt-link to="/type/Quotes" prefetch
              ><b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon>
              الاقتباسات
              <b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon
            ></nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-a">
            <nuxt-link to="/" exact
              ><b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon>
              الرئيسية
              <b-icon
                icon="three-dots-vertical"
                animation="cylon-vertical"
                font-scale="1"
              ></b-icon
            ></nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-brand class="ml-auto">
        <span class="Q">إقتباسات</span>
        <Logo width="50" height="50" />
      </b-navbar-brand>
    </b-navbar>

    <b-sidebar
      id="sidebar-1"
      title="تغيير شكل الموقع"
      shadow
      class="text-right"
    >
      <div class="px-3 py-2">
        <p>: الوان الموقع <b-icon icon="brush-fill" class="ricon"></b-icon></p>
        <b-form-select
          v-model="selectedColor"
          :options="optionsColor"
        ></b-form-select>
        <hr />
        <p>: خط الموقع <b-icon icon="pen" class="ricon"></b-icon></p>
        <b-form-select
          v-model="selectedFont"
          :options="optionsFont"
        ></b-form-select>
        <hr />
        <p>: لون خطوط الموقع <b-icon icon="brush" class="ricon"></b-icon></p>
        <b-form-select
          v-model="selectedFontColor"
          :options="optionsFontColor"
        ></b-form-select>
      </div>
      <hr />
      <b-button class="d-flex m-auto" variant="outline-primary" @click="Newstyle"
        >تطبيق <b-icon icon="arrow-up"></b-icon
      ></b-button>
    </b-sidebar>
  </div>

  <!--  -->
</template>

<script>
import logo from "./logo";
export default {
  components: {
    logo
  },
  data() {
    return {
      selectedColor: "a",
      optionsColor: [
        { value: "a", text: "مجموعة 1" },
        { value: "b", text: "مجموعة 2" },
        { value: "c", text: "مجموعة 3" },
        { value: "d", text: "مجموعة 4" }
      ],
      selectedFont: "a",
      optionsFont: [
        { value: "a", text: "خط 1" },
        { value: "b", text: "خط 2" },
        { value: "c", text: "خط 3" },
        { value: "d", text: "خط 4" }
      ],
      selectedFontColor: "a",
      optionsFontColor: [
        { value: "a", text: "اللون الابيض" },
        { value: "b", text: "اللون الاسود" },
        { value: "c", text: "اللون الاصفر" },
        { value: "d", text: "اللون الازرق" }
      ]
    };
  },
  methods: {
    Newstyle() {
      this.$emit("selectedColora", this.selectedColor);
      this.$emit("selectedFonta", this.selectedFont);
      this.$emit("optionsFontColora", this.selectedFontColor);
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'تم تحديث الشكل'
      })

    },
    love() {
      this.$router.push("/love");
    },
    login() {
      this.$router.push("/admin/login");
    },
    signin() {
      this.$router.push("/admin/signin");
    },
    admin() {
      this.$router.push("/admin/");
    }
  }
};
</script>
