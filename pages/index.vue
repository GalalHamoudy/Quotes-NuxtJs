<template>
  <div>
    <!-- ------------------------------------------------------- -->
    <div class="container-fluid text-center">
      <b-card title="موقع إقتباسات" class="type-card">
        <Logo width="90" height="90" />
        <b-card-text data-aos="slide-right" data-aos-duration="1000"
          ><b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          موقع إقتباسات هو موقع بسيط تم تصميمه لغرض التدريب فقط و سيتم اتاحة
          السورس كود قريبا
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon
        ></b-card-text>
        <b-card-text data-aos="slide-left" data-aos-duration="1000"
          ><b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          (Nuxt.js) تم تصميم الموقع باستخدام
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon
        ></b-card-text>
        <b-card-text data-aos="slide-right" data-aos-duration="1000"
          ><b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          يمكنك انشاء حساب ببساطة و بعدها سيكون لك صلاحيات النشر في الموقع
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon
        ></b-card-text>
        <b-card-text data-aos="slide-left" data-aos-duration="1000"
          ><b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          تم التصميم بواسطة محمد جلال هاشم
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon
        ></b-card-text>

      </b-card>

      <div class="first-footer">
        <p class="footer-header">
          <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
          خصائص الموقع
          <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
        </p>
        <div class="row">
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
                <b-card-text>يمكن تغير خطوط الموقع عن طريق خيار (شكل الموقع)</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >يمكن تغير الوان خطوط الموقع عن طريق خيار (شكل
                الموقع)</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >يمكن تغير الوان الموقع عن طريق خيار (شكل الموقع)</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >ييتم تطوير و تحديث الموقع بشكل دائم ومستمر</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >بامكانك الاستمتاع بمميزات الموقع عن طريق تسجيل
                الدخول</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >تم تصميم الموقع بواسطة ادوات حديثة و متقدمة</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text
                >يحتوي علي العديد من الكثير من الاقتباسات الرائعة</b-card-text
              >
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text >يناسب جميع الشاشات بمختلف الاحجام</b-card-text>
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
          <div class="col-md-4 wow animate__animated animate__fadeInLeft">
            <b-card data-aos="flip-down" data-aos-duration="1000"
              header-tag="header"
              footer-tag="footer"
              class="q-card"
              style="min-height:50px"
            >
              <template v-slot:header>
                <Logo width="60" height="60" />
              </template>
              <b-card-text>يدعم جميع المتصقحات القديمة والجديدة</b-card-text>
              <template v-slot:footer>
                <em>إقتباسات</em>
              </template>
            </b-card>
          </div>
        </div>
      </div>

    </div>

    <!-- ------------------------------------------------------- -->

  </div>
</template>



<script>

import logo from "../components/main/logo";
import axios from "axios";

export default {
  layout: "main",
  components: {
    logo
  },

};
</script>
