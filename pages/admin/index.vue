<template>
  <div>
    <div class="container-fluid text-center">
      <b-card title="موقع إقتباسات" class="type-card">
        <Logo width="90" height="90" />
        <b-card-text
          ><b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          لوحة التحكم
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon
        ></b-card-text>
      </b-card>
      <!--  -->
    </div>
    <hr />
    <div class="container text-right ">
      <b-card no-body class="admin-card" active data-aos="zoom-in" data-aos-duration="500">
        <b-tabs card pills align="center">
          <b-tab title="تعديل او حذف">
            <b-card-text>
              <!--  -->
              <b-card
                class="type-card"
                v-for="oneinfo in allDATA"
                :key="oneinfo.id"
              >
                <!--  -->
                <b-dropdown variant="primary" class="mb-3">
                  <template v-slot:button-content>
                    الاعدادات
                    <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                  </template>
                  <b-dropdown-item-button @click="editPost(oneinfo.id)">
                    تعديل
                    <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                  </b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button
                    variant="danger"
                    @click="deletePost(oneinfo.id)"
                  >
                    حذف
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                  </b-dropdown-item-button>
                </b-dropdown>

                <!--  -->
                <b-card-text>
                  <b-card :header="oneinfo.section" class="qq-card">
                    <blockquote class="blockquote mb-0">
                      <p class="text-center">
                        {{ oneinfo.text }}
                      </p>
                      <footer class="blockquote-footer text-right">
                        <cite title="Source Title"> {{ oneinfo.name }}</cite>
                      </footer>
                    </blockquote>
                  </b-card>
                </b-card-text>
              </b-card>

              <!--  -->
            </b-card-text>
          </b-tab>
          <b-tab title="إضافة جديد">
            <b-card-text>
              <p>النوع</p>
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
              <hr />
              <component :is="selected" @sendData="onSubmit"></component>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <!--  -->
  </div>
</template>

<script>
import Quotes from "@/components/admin/Quotes";
import poets from "@/components/admin/poets";
import storys from "@/components/admin/storys";

import axios from "axios";

export default {

  layout: "main",
  middleware: "auth",
  components: {
    Quotes,
    poets,
    storys
  },

  data() {
    return {
      selected: "Quotes",
      options: [
        { value: "Quotes", text: "اقتباس" },
        { value: "poets", text: "شعر" },
        { value: "storys", text: "قصة" }
      ],
      allDATA: []
    };
  },
  methods: {
    onSubmit(sendData) {
      this.$store
        .dispatch("addPost", sendData)
        .then(res => {
          this.$swal({
            title: "تم النشر بنجاح",
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          });
        })
        .catch(e => console.log(e));
    },
    editPost(link) {
      this.$router.push("/admin/" + link);
      // console.log(link)
    },
    deletePost(link) {
      this.$store
        .dispatch("delPost", link)
        .then(res => {
          this.$swal({
            title: "تم الحذف بنجاح",
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
    this.allDATA = this.$store.getters.loadedPosts;
  }
};
</script>
