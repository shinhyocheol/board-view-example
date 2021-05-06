<!-- 공용 컴포넌트 (data-table.vue) 템플릿 -->
<template>
  <div class="table-scrollable white-backgroud">
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
  <pagination 
    v-model="page" 
    :records="count" 
    :per-page="10" 
    @paginate="pagingHandle"
  />
</template>
<script>
import Pagination from 'v-pagination-3'
export default {
  components: {Pagination},
  name: "Table",
  props: ['list', 'cnt', 'getData'],
  data () {
    return {
      page: 1,
      count: 0
    }
  },
  watch: {
    list() {
      this.count = this.cnt
      console.log(this.count)
    }
  },
  methods: {
    pagingHandle (page) {
      const params = new URLSearchParams()
      params.append("page", page)
      this.getData(params)
    }
  }
}
</script>
