<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper){
    get tagList(){
      return this.$store.state.tagList;
    }
//    tagList = store.fetchTags();
    selectedTags: string[] = [];

    created(){
      this.$store.commit('fetchTags')
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    background: white;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        background: #f5f5f5;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        padding: 0 20px;
        margin-right: 12px;
        margin-top: 10px;
        color: #9c9c9c;
        &.selected {
          background: #0ac675;
          color: white;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        border-bottom: 1px solid;
        color: #686c6f;
        padding: 0 4px;
      }
    }
  }
</style>