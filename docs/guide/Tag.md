## Tag(自定义颜色tag组件)

## 示例

（示例）

```javascript

<template>
  <span
    slot="statusscopedSlots"
    slot-scope="text">
    <Tag :color="getListByKeyValue(statusData, text, 'code', 'color')">
      tag文本
    </Tag>
  </span>
</template>

<script>
  import { Tag }  from '@/components'

  export default {
    components: {
      Tag
    },
    data() {
      return {
        statusData: []
      }
    },
    created() {
      this.statusData = this.$options.filters['dictData']('times_card_status')
    }
  }
</script>

```

### Props

| 参数    | 说明    | 类型     | 可选值 | 默认值 |
| ----- | ----- | ------ | --- | --- |
| color | tag颜色 | String | -   | ''  |

