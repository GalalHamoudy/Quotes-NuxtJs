<template>
  <div class="container-fluid">
    <div class="second-footer">
      <marquee direction="right">
        <span v-for="oneinfo in showDATA" :key="oneinfo.id">
          <Logo width="30" height="30" />
          {{ oneinfo.text }}
        </span>
      </marquee>
      <div class="row">
        <div class="col-md-4">
          <div class="section-footer">
            <p class="footer-header mb-4">
              مصمم الموقع
              <b-icon icon="person-bounding-box"></b-icon>
            </p>
            <b-button v-b-toggle.sidebar-right
              ><b-avatar text="?" size="10rem"></b-avatar
            ></b-button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="section-footer">
            <p class="footer-header">
              تواصل معانا <b-icon icon="chat-quote"></b-icon>
            </p>
            <!--  -->
            <b-form class="footer-form des-footer">
              <b-form-group id="input-group-2">
                <b-form-input
                  required
                  placeholder="ادخل اسمك"
                  style="text-align: right;"
                ></b-form-input>
              </b-form-group>

              <b-form-textarea
                id="textarea"
                placeholder="ادخل رسالتك"
                rows="3"
                max-rows="6"
                style="text-align: right;"
              ></b-form-textarea>
              <hr />
              <b-button @click="sweet"
                >ارسال <b-icon icon="capslock"></b-icon
              ></b-button>
            </b-form>
          </div>
        </div>
        <div class="col-md-4">
          <div class="section-footer">
            <Logo width="120" height="120" />
            <p class="Q">إقتباسات</p>
            <hr />
            <p class="des-footer">
              تم تصميم الموقع من قبل تيم ديث كود و يتم حاليا تطويره و نشره ليشمل
              جميع دول العالم والهدف الرئيسي منه هو تجميع اكبر قدر من الجمل و
              العبارات الهادفة
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="third-footer">
      <Logo width="50" height="50" />تم تصميم الموقع و برمجته بواسطة محمد جلال
      هاشم
      <Logo width="50" height="50" />
    </div>

    <!--  -->
    <div>
      <b-sidebar id="sidebar-right" title="مصمم الموقع" right shadow>
        <div class="px-3 py-2 text-center">
          <b-img src="../../assets/me/3.jpg" fluid thumbnail></b-img>
          <p>
            محمد جلال هاشم
            <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
          </p>
          <p>
            مواليد عام 2000
            <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
          </p>
          <p>
            طالب بكلية الهندسة
            <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
          </p>
          <p class="text-right">
            : المهارات
            <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
          </p>
          <ul style="list-style: none;">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>Sass</li>
            <li>Pug</li>
            <li>GulpJs</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>VueJs</li>
            <li>Vue Native</li>
            <li>NuxtJs</li>
            <li>Php</li>
            <li>MySQL</li>
            <li>Laravel</li>
          </ul>
          <p class="text-right">
            : معرفة صغيرة
            <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
          </p>
          <ul style="list-style: none;">
            <li>Wordpress</li>
            <li>ReactJS</li>
          </ul>
        </div>
      </b-sidebar>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      allDATA: [],
      showDATA: []
    };
  },
  methods: {
    sweet() {
          this.$swal({
            title: "هذه الخاصية غير متاحة حاليا",
            confirmButtonText: "حسنا",
            showClass: {
              popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp"
            }
          })


    },
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
  }
};
</script>
