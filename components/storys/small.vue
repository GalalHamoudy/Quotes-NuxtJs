<template>
  <div>
    <div class="row d-flex justify-content-center" v-if="see">
      <div class="col-md-12 mb-2" v-for="oneinfo in showDATA" :key="oneinfo.id">
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
    </div>
    <div class="row" v-if="!see">
      <div class="col-md-12">
        <b-card header="عذرا" class="q-card" data-aos="fade-up" data-aos-duration="1000">
          <blockquote class="blockquote mb-0">
            <p class="text-center">
              لايوجد محتوي بعد
            </p>
          </blockquote>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      allDATA: [],
      showDATA: [],
      see: false,
    };
  },
  created() {
    this.allDATA = this.$store.getters.loadedPosts;
    for (const key in this.allDATA) {
      if (
        this.allDATA[key].section == "storys" &&
        this.allDATA[key].type == "small"
      ) {
        this.showDATA.push(this.allDATA[key])
        this.see = true;
      }
    }
  }
};
</script>
