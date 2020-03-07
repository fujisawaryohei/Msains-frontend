<template>
    <div class="side-bar">
        <div class="userinfo-card">
            <div class="main-info">
                <img src="../assets/images/ikuta.jpg">
                <span>{{ $store.state.login_user.name }}</span>
            </div>
            <div class="follow-info">
                <span class="follow-count">{{ this.getFollowingCount() }}</span><span class="follow-str">フォロー</span>
                <span class="follow-count">{{ this.getFollowerCount() }}</span><span class="follow-str">フォロワー</span>
            </div>
        </div>
        <div class="thread-card">
            <input type="thread" class="thread-search-form form-control" id="exampleInputthread" aria-describedby="thread" placeholder="スレッドを検索">
            <v-icon style="margin-left:0.5rem;">fas fa-search</v-icon>
            <span style="text-align:center;">
                <v-btn class="ma-2" color="red" dark>
                    スレッドを作成する
                </v-btn>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getFollowingCount(){
            /* TODO: axiosで取得する */
            return 324;
        },
        getFollowerCount(){
            /* TODO: axiosで取得する */
            return 222;
        },
        getThreadList() {
            return [
                {
                    threadName: "学内掲示板",
                    threadId: 1,
                    threadInfo: [
                        {
                            userId: 1,
                            userName: "生田絵梨花",
                            comment: "ヤッター"
                        },
                        {
                            userId: 2,
                            userName: "test",
                            comment: "hoge"
                        }
                    ]
                },
                {
                    threadName: "test掲示板",
                    threadId: 2,
                    threadInfo: [
                        {
                            userId: 2,
                            userName: "test",
                            comment: "hoge",
                        },
                        {
                            userId: 1,
                            userName: "test",
                            comment: "hogehoge"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/utils/valiables.scss';

  .side-bar {
    margin-top: 3rem;
    width: 300px;
    background-color: white;
  }

  .userinfo-card {
    border-radius: $card_border_radius;
    margin-top: 1rem;
    height: 100px;

        .main-info {
          margin-left: 1rem;
            img {
                width: $mini_img_width;
                height: $mini_img_height;
                border-radius: $mini_img_border_radius;
            }
            span {
                margin-left: 2rem;
                font-size: $pc_font_size;
                font-weight: bold;
            }
        }

        .follow-info {
            text-align:center;
            .follow-count {
                font-size: 1.4rem;
                color: #20deff;
            }
            .follow-str {
                margin-left: 0.5rem;
                margin-right: 1rem;
                font-size: 0.5rem;
                font-weight: bold;
            }
        }
  }
  
  .thread-list {
      width: 300px;
      height: auto;
      background-color: white;
  }

  .thread-search-form {
      display: inline;
      margin-left: 1rem;
      width: 15rem;
  }
</style>