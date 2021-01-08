<template>
  <section
    class="main-layout"
    :style="selectedColor + selectedFont + optionsFontColor"
  >
    <Navbar
      @selectedColora="selectedColor = $event"
      @selectedFonta="selectedFont = $event"
      @optionsFontColora="optionsFontColor = $event"
    />
    <!--------------------------------------------------------------------------->
    <Nuxt />
    <!--------------------------------------------------------------------------->
    <Footer />
  </section>
</template>


<script>
import logo from "../components/main/Logo";
import Footer from "../components/main/footer";
import Navbar from "../components/main/navbar";
export default {
  components: {
    logo,
    Footer,
    Navbar
  },
  data() {
    return {
      css1: `
--color1 : #222831;
--color2 : #393e46;
--color3 : #00adb5;
--color4 : #eeeeee;
    `,
      css2: `
--color1 : #a8d8ea;
--color2 : #aa96da;
--color3 : #fcbad3;
--color4 : #ffffd2;
    `,
      css3: `
--color1 : #e4f9f5;
--color2 : #30e3ca;
--color3 : #11999e;
--color4 : #40514e;
    `,
      css4: `
--color1 : #08d9d6;
--color2 : #252a34;
--color3 : #ff2e63;
--color4 : #eaeaea;
    `,
      font1: `--font: 'El Messiri', sans-serif;`,
      font2: `--font: 'Almarai', sans-serif;`,
      font3: `--font: 'Kufam', cursive;`,
      font4: `--font: 'Cairo', sans-serif;`,
      fontcolor1: `--fontcolor:#fff;`,
      fontcolor2: `--fontcolor:#000;`,
      fontcolor3: `--fontcolor:yellow;`,
      fontcolor4: `--fontcolor:blue;`,

      selectedColor: `
--color1 : #222831;
--color2 : #393e46;
--color3 : #00adb5;
--color4 : #eeeeee;
    `,
      selectedFont: `--font:'El Messiri', sans-serif;`,
      optionsFontColor: `--fontcolor:#fff;`
    };
  },
  watch: {
    selectedColor: function() {
      if (this.selectedColor == "a") {
        this.selectedColor = this.css1;
      }
      if (this.selectedColor == "b") {
        this.selectedColor = this.css2;
      }
      if (this.selectedColor == "c") {
        this.selectedColor = this.css3;
      }
      if (this.selectedColor == "d") {
        this.selectedColor = this.css4;
      }
      // console.log(this.selectedColor);
    },
    selectedFont: function() {
      if (this.selectedFont == "a") {
        this.selectedFont = this.font1;
      }
      if (this.selectedFont == "b") {
        this.selectedFont = this.font2;
      }
      if (this.selectedFont == "c") {
        this.selectedFont = this.font3;
      }
      if (this.selectedFont == "d") {
        this.selectedFont = this.font4;
      }
      // console.log(this.selectedFont);
    },
    optionsFontColor: function() {
      if (this.optionsFontColor == "a") {
        this.optionsFontColor = this.fontcolor1;
      }
      if (this.optionsFontColor == "b") {
        this.optionsFontColor = this.fontcolor2;
      }
      if (this.optionsFontColor == "c") {
        this.optionsFontColor = this.fontcolor3;
      }
      if (this.optionsFontColor == "d") {
        this.optionsFontColor = this.fontcolor4;
      }
      console.log(
        this.selectedColor + this.selectedFont + this.optionsFontColor
      );
    },
    webstyle() {
      // console.log( this.selectedColor + this.selectedColor + this.selectedColor);
    }
  },
  methods: {}
};
</script>
<style></style>
