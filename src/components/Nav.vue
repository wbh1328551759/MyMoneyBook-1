<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/))
  }catch (error){
    console.log(error);
  }

  export default {
    name: 'Nav',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    flex-direction: row;
    font-size: 12px;
    background:#ffffff ;
    > .item{
      padding: 3px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        height:32px;
        width:32px;
      }
    }
    > .item.selected{
      color:$color-highlight;
    }
  }
</style>