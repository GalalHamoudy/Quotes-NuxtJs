import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token:null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      setToken(state,token){
        state.token = token
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },
      delPost(state,link){
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === link
        );
        state.loadedPosts.splice(postIndex, 1)
      }
    },
    actions:{
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://quotes-f2d93.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.unshift({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },
      // -------------------------------------------------------------------------------
      addPost(vuexContext, sendData) {
        return axios
        .post("https://quotes-f2d93.firebaseio.com/posts.json?auth=" + this.state.token, sendData)
        .then(res => {
          vuexContext.commit('addPost',{ ...sendData, id: res.data.name})
        })
        .catch(e => console.log(e));
      },
      // ----------------------------------------------------------------------------------
      editPost(vuexContext, editedPost) {
        return axios
        .put("https://quotes-f2d93.firebaseio.com/posts/" + editedPost.id + ".json?auth=" + this.state.token ,{
          'section':editedPost.section ,
          'name':editedPost.name ,
          'type':editedPost.type,
          'text':editedPost.text,
        })
        .then(() => {
          vuexContext.commit("editPost", editedPost);
        })
        .catch(e => console.log(e));
      },
      // -------------------------------------------------------------------------------
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      // -------------------------------------------------------------------------------
      delPost(vuexContext,link){
        return axios
        .delete(
          "https://quotes-f2d93.firebaseio.com/posts/" +
            link +
            ".json?auth=" +
            this.state.token
        )
        .then(() => {
          vuexContext.commit("delPost", link);
        })
        .catch(e => console.log(e));
      },
      // -------------------------------------------------------------------------------
      authLog(vuexContext,authdata){
        return axios({
          method: "post",
          url:
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjzUNLgatImqjszkFXK6B4HRe_NlziO8Q",
          data: {
            email: authdata.email,
            password: authdata.password,
            returnSecureToken: true
          }
        })
          .then(res => {
            vuexContext.commit('setToken',res.data.idToken)
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuth(state){
        return state.token != null
      },
      token(state){
        return state.token;
      }
    }
  });
};
export default createStore;
