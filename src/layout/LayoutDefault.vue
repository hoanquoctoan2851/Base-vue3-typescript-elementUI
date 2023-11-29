<template>
    <div class="default-layout">
      <el-container>
        <el-aside class="default-layout___aside">
            
        </el-aside>
        <el-container class="default-layout___body-container">
          <el-header class="default-layout___header">Header</el-header>
          <el-main class="default-layout___content">
            <RouterView></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script lang="ts">
export default {
    setup() {

    }
}
</script>
<style lang="scss" scoped>
@import "@/design/variable.scss";
.default-layout {
    .default-layout___body-container {
        padding-left: $width-aside;
    }
    .default-layout___aside {
        width:  $width-aside;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        border-right: 1px solid var(--border-color-1);
        padding: 16px;
    }

    .default-layout___header {
        height: $height-header;
        position: sticky;
        top: 0;
    }

    .default-layout___content {
        min-height: calc(100vh - 70px);
        height: 30000px;
    }
}
</style>