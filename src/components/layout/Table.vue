<!-- 공용 컴포넌트 (data-table.vue) 템플릿 -->
<template>
  <div class="table-scrollable">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr class="heading">
          <slot name="header" /> 
        </tr>
      </thead>
      <tbody>
      <template v-for="(row, index) in list" :key="index">
        <tr>
          <slot v-bind:row="row" /> 
        </tr>
      </template>
      <tr v-if="list.length === 0">
        <td colspan="30" class="text-center">검색 결과가 없습니다.</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: ['list']
}
</script>
