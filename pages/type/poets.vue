<template>
  <div>
    <div class="container-fluid text-center">
      <b-card title="قسم الشعر" class="type-card">
        <b-card-text data-aos="fade-right" data-aos-duration="1000">
          الشّعر هو كلامٌ يعتمدُ على استخدامِ موسيقا خاصّةٍ به يُطلقُ عليها
          مُسمّى الموسيقا الشعريّة. كما يُعرفُ الشّعرُ بأنّه نوعٌ من أنواع
          الكلام يعتمدُ على وزنٍ دقيقٍ، ويُقصدُ فيه فكرةٌ عامّة لوصفِ وتوضيح
          الفكرة الرّئيسة الخاصّة بالقصيدة. ومن التّعريفات الأُخرى للشّعر هو
          الكلماتُ التي تحملُ معانٍ لغويّة تؤثّرُ على الإنسان عند قراءته، أو
          سماعه، وأيُّ كلامٍ لا يحتوي على وزنٍ شعريّ لا يُصنّفُ ضمن الشّعر.
        </b-card-text>
        <b-nav pills align="center" data-aos="zoom-in" data-aos-duration="1000">
          <b-nav-item
            :class="com == 'my' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'my'"
            >شعر شخصي</b-nav-item
          >
          <b-nav-item
            :class="com == 'old' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'old'"
            >شعر قديم</b-nav-item
          >
          <b-nav-item
            :class="com == 'neww' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'neww'"
            >شعر حديث</b-nav-item
          >
          <b-nav-item
            :class="com == 'all' ? 'nav-link active_mg' : 'nav-link'"
            @click="com = 'all'"
            >جميع الاشعار</b-nav-item
          >
        </b-nav>
      </b-card>
    </div>
    <hr />
    <div class="container">
      <div class="row d-flex justify-content-center" v-if="com == 'all'">
        <div
          class="col-md-6 mb-2"
          v-for="oneinfo in showDATA"
          :key="oneinfo.id"
        >
          <b-card header="شعر" class="q-card" data-aos="zoom-in-up" data-aos-duration="1000">
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
import my from "../../components/poets/my";
import old from "../../components/poets/old";
import neww from "../../components/poets/new";

export default {

  layout: "main",
  components: {
    my,
    old,
    neww
  },
  data() {
    return {
      com: "all",
      see:false,
      allDATA: [],
      showDATA: [],
    };
  },
  created() {
    this.allDATA = this.$store.getters.loadedPosts;
    for (const key in this.allDATA) {
      if (
        this.allDATA[key].section == "poets" && [
          this.allDATA[key].type == "my" ||
            this.allDATA[key].type == "old" ||
            this.allDATA[key].type == "neww"
        ]) {
        this.showDATA.push(this.allDATA[key])
        this.see = true;

      }
    }
  },
  methods: {},
  watch: {},
};
</script>
