<!--Created by 熊超超 on 2017/8/4.-->
<template>
  <div>
    <mu-card class="m-t-20" v-for="flight in list" :key="flight.id">
      <mu-card-text>
        <c-flight :flight="flight"></c-flight>
      </mu-card-text>
      <mu-card-actions flex="main:right">
        <mu-flat-button label="值机" class="m-l-16">
          <cc-icon name="check-in" size="36" />
        </mu-flat-button>
        <mu-flat-button label="改期" secondary class="m-l-16">
          <cc-icon name="change-date" size="36" />
        </mu-flat-button>
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '$g/mixin'
  import CFlight from '../../common/components/C-Flight'

  export default {
    components: {CFlight},
    mixins: [mixin.updateBar],
    data() {
      return {
        headerBar: {title: this.$t('飞行'), leftBtn: null},
        footerBar: {active: '/fly'},
        list: []
      }
    },
    computed: {
      ...mapState({})
    },
    created () {
      this.getFly()
    },
    methods: {
      async getFly () {
        const data = await this.$store.dispatch('getFly')
        if (data) {
          this.list = data.list
        }
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
