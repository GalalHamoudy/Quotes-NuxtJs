<template>
  <div>
    <div class="container-fluid text-center">
      <b-card title="قسم الاقتباسات" class="type-card">
        <b-card-text data-aos="fade-right" data-aos-duration="1000">
          خير الكلام ما قل و دل , جمل الاقتباس هي جمل صغيرة قالها حكماء و تحمل
          الكثير من المعاني رغم صغرها و ستجد هنا اجمل الاقتباسات
        </b-card-text>
        <b-nav pills align="center" data-aos="zoom-in" data-aos-duration="1000">
          <b-nav-item
            :class="com == 'best' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'best'"
            >اقتباسات حكيمة</b-nav-item
          >
          <b-nav-item
            :class="com == 'sad' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'sad'"
            >اقتباسات حزينة</b-nav-item
          >
          <b-nav-item
            :class="com == 'love' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'love'"
            >اقتباسات رومانسية</b-nav-item
          >
          <b-nav-item
            :class="com == 'all' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'all'"
            >جميع الاقتباسات</b-nav-item
          >
        </b-nav>
      </b-card>
    </div>
    <hr />
    <div class="container">
      <div class="row d-flex justify-content-center" v-if="com == 'all'">
        <div
          class="col-md-4 mb-2"
          v-for="oneinfo in showDATA"
          :key="oneinfo.id"
        >
          <b-card
            header="إقتباس"
            class="q-card"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                {{ oneinfo.text }}
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title">{{ oneinfo.name }}</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-12" v-if="!see">
          <b-card header="عذرا" class="q-card" data-aos="fade-up" data-aos-duration="1000">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                لايوجد محتوي بعد
              </p>
            </blockquote>
          </b-card>
        </div>
      </div>
      <div v-else>
        <component :is="com"></component>
      </div>
    </div>
  </div>
</template>

<script>
import best from "../../components/Quotes/best";
import sad from "../../components/Quotes/sad";
import love from "../../components/Quotes/love";

export default {

  layout: "main",
  components: {
    best,
    sad,
    love
  },
  data() {
    return {
      com: "all",
      see: false,

      allDATA: [],
      showDATA: []
    };
  },
  created() {
    this.allDATA = this.$store.getters.loadedPosts;
    for (const key in this.allDATA) {
      if (
        this.allDATA[key].section == "quotes" && [
          this.allDATA[key].type == "best" ||
            this.allDATA[key].type == "sad" ||
            this.allDATA[key].type == "love"
        ]
      ) {
        this.showDATA.push(this.allDATA[key]);
        this.see = true;
      }
    }
  },
};
</script>
