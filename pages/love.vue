<template>
  <div>
    <div class="container-fluid text-center">
      <b-card title=" المفضلة" class="type-card">
      <Logo width="80" height="80" />
        <b-card-text>
ستجد هنا جميع ما قمت بتسجيل اعجابك به
        </b-card-text>
        <b-nav pills align="center">
          <b-nav-item :class="com == 'poets' ? 'nav-link active_mg':'nav-link'" @click="com ='poets'"> الشعر</b-nav-item>
          <b-nav-item :class="com == 'storys' ? 'nav-link active_mg':'nav-link'" @click="com ='storys'"> القصص</b-nav-item>
          <b-nav-item :class="com == 'quotes' ? 'nav-link active_mg':'nav-link'" @click="com ='quotes'">الاقتباسات</b-nav-item>
        </b-nav>
      </b-card>
    </div>
    <hr />
    <div class="container">
      <!-- <div class="row">
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card header="إقتباس" class="q-card">
            <blockquote class="blockquote mb-0">
              <p class="text-center">
                إن استطعت ان تحسن حياة انسان واحد او تخفف الما واحدا او ترشد
                طائرا واحدا الي عشه ما ذهب عمرك سدي
              </p>
              <footer class="blockquote-footer text-right">
                <cite title="Source Title"> للكاتبة : ايميلي ديكنسون</cite>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </div> -->
    <component :is="com"></component>
    </div>
  </div>
</template>

<script>
import logo from "../components/main/logo";
import quotes from "../components/love/quotes";
import storys from "../components/love/storys";
import poets from "../components/love/poets";
export default {
  layout: "main",
  components: {
    logo,
    quotes,
    storys,
    poets,
  },
    data() {
    return {
      com: "quotes"
    };
  }
};
</script>
