<template>
  <div class="numberPad">
    <div class="output">￥{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">
        <Icon class="icon" name="goback"/>
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">C</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if (this.output.length === 16) {return;}
      if (this.output === '0' && '0123456789'.indexOf(input) >= 0) {
        this.output = input;
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {
        return;
      }
      this.output += input;
    }

    remove() {
      if (this.output.length > 1) {
        this.output = this.output.slice(0, -1);
      } else {
        this.output = '0';
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      this.$emit('update:value', parseFloat(this.output));
      this.$emit('submit', parseFloat(this.output));
      this.output = '0';
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: "Segoe UI" , monospace;
      padding: 9px 16px;
      text-align: right;
      color:#38cbee;
      background: #f9f9f9;
    }

    .buttons {
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        border: none;
        background: transparent;
        font-size: 20px;
        box-shadow: 0 0 2px #d3d3d3;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #f9f9f9;

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          background: $bg;
        }


        &:nth-child(5), &:nth-child(6), &:nth-child(7) {
          background: $bg;
        }

        &:nth-child(9), &:nth-child(10), &:nth-child(11) {
          background: $bg;
        }

        &:nth-child(13), &:nth-child(14) {
          background: $bg;
        }

        &:nth-child(14) {
          font-weight: bolder;
        }

        &:nth-child(4), &:nth-child(8) {
          background: #f3f3f3;
          font-family: "Segoe UI" , monospace;
          font-size: 25px;
        }

        &:nth-child(12) {
          color: white;
          background: #46c9e7;
        }
      }
    }
  }

</style>