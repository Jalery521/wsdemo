<template>
  <div class="firend_item">
    <div @click="openState=!openState"
         class="firend_item_title">
      <i class="iconfont"
         :class="openState?opened:notOpen"></i>
      <span>我的设备1/2</span>
    </div>
    <ul v-show="openState"
        class="firend_item_list">
      <li class="list_item"
          @click="handleClick(1)">
        <a href="javascript:;">
          <img class="nologin"
               src="http://pic.ffpic.com/files/2018/0403/sl03023o34u.jpg"
               alt="头像">
        </a>
        <span class="item_equipment">我的Android手机</span>
        <span class="item_last">上次登录:2019-2-28</span>
      </li>
      <li class="list_item">
        <a href="javascript:;">
          <img class="nologin"
               src="http://pic.ffpic.com/files/2018/0403/sl03023o34u.jpg"
               alt="头像">
        </a>
        <span class="item_equipment">我的Android手机</span>
        <span class="item_last">上次登录:2019-2-29</span>
      </li>
      <li class="list_item">
        <a href="javascript:;">
          <img class="nologin"
               src="http://pic.ffpic.com/files/2018/0403/sl03023o34u.jpg"
               alt="头像">
        </a>
        <span class="item_equipment">我的Android手机</span>
        <span class="item_last">上次登录:2019-2-30</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FirendItem",
  data() {
    return {
      openState: false,
      notOpen: "icon-jiantou",
      opened: "icon-jiantou1"
    };
  },
  methods: {
    handleClick(id: number): void {
      this.$emit("clickItem", id);
    }
  }
});
</script>


<style lang="scss" scoped>
.firend_item {
  > .firend_item_title {
    height: 30px;
  }
  > .firend_item_list {
    > .list_item {
      height: 30px;
      display: flex;
      cursor: pointer;
      > a {
        width: 25px;
        height: 25px;
        position: relative;
        &::after {
          content: "";
          height: 8px;
          width: 6px;
          background: url();
        }
        > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          &.nologin {
            filter: Gray;
            -webkit-filter: grayscale(100%);
          }
        }
      }
    }
  }
}
</style>


