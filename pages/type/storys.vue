<template>
  <div>
    <div class="container-fluid text-center">
      <b-card title="قسم القصص" class="type-card">
        <b-card-text data-aos="fade-right" data-aos-duration="1000">
          القصة هي أحدى أنواع النصوص الأدبية، وهو فن من الفنون التي ظهرت قديمًا،
          وتقوم فكرتها الأساسية على سرد مجموعة من الأحداث، يُمثلها مجموعة من
          الأشخاص، والتي تهدف في النهاية إلى توصيل فكرة مُعينة، وتنقسم القصص إلى
          قصص قصيرة، وأخرى طويلة.
        </b-card-text>
        <b-nav pills align="center" data-aos="zoom-in" data-aos-duration="1000">
          <b-nav-item
            :class="com == 'my' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'my'"
            >قصص حياتية</b-nav-item
          >
          <b-nav-item
            :class="com == 'smalll' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'smalll'"
            >قصص صغيرة</b-nav-item
          >
          <b-nav-item
            :class="com == 'long' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'long'"
            >قصص طويلة</b-nav-item
          >
          <b-nav-item
            :class="com == 'all' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'all'"
            >جميع القصص</b-nav-item
          >
        </b-nav>
      </b-card>
    </div>
    <hr />
    <div class="container">
      <div class="row d-flex justify-content-center" v-if="com == 'all'">
        <div
          class="col-md-12 mb-2"
          v-for="oneinfo in showDATA"
          :key="oneinfo.id"
        >
          <b-card
            header="قصة"
            class="q-card"
            data-aos="zoom-in-up" data-aos-duration="1000"
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
import long from "@/components/storys/long";
import my from "@/components/storys/my";
import smalll from "@/components/storys/small";

export default {

  layout: "main",
  components: {
    long,
    my,
    smalll
  },
  data() {
    return {
      com: "all",
      see: false,
      allDATA: [],
      showDATA: [],
    };
  },
  created() {
    this.allDATA = this.$store.getters.loadedPosts;
    for (const key in this.allDATA) {
      if (
        this.allDATA[key].section == "storys" && [
          this.allDATA[key].type == "my" ||
            this.allDATA[key].type == "long" ||
            this.allDATA[key].type == "smalll"
        ]
      ) {
        this.showDATA.push(this.allDATA[key])
        this.see = true;
      }
    }
  }
};
</script>
