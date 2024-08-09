## SSelect（适用于数据量大的 select 组件）

## 属性

---

> 除去 `a-select` 自带属性外，还而外提供了一些额外属性属性

| 参数        | 说明                          | 类型   | 可选值 | 默认值 |
| ----------- | ----------------------------- | ------ | ------ | ------ |
| optionData  | 下拉数据源                    | Array  | -      | []     |
| optionName  | 选项显示字段（label）         | String | -      | ''     |
| optionValue | 选项值                        | String | -      | ''     |
| value       | 绑定值（v-model/v-decorator） | String | -      | ''     |

## 例子

```javascript

<template>
  <s-select
    show-search
    option-filter-prop="children"
    :filter-option="(input, option) => option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0"
    style="width: 100%"
    :optionData="openBank"
    optionName="name"
    optionValue="code"
    v-decorator="['openBankCode']"
    placeholder="请选择开户行"
    :allowClear="true">
  </s-select>
</template>

<script>
  import SSelect from '@/components'

  export default {
    components: {
      SSelect
    },
    data() {
      return {
        openBank: []
      }
    },
    created() {
      this.openBank = this.$options.filters['dictData']('open_bank')
    }
  }
</script>
```

## 使用案例

业务管理/返现管理/申请返现（src\views\business\brCashBack\addForm.vue）

![](https://tcs-devops.aliyuncs.com/storage/112ydb4a936bfcd2ead81937a7898cff3b69?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTMwOSwiaWF0IjoxNzIzMTk2NTA5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnlkYjRhOTM2YmZjZDJlYWQ4MTkzN2E3ODk4Y2ZmM2I2OSJ9.jnE0TV6k6cD_iT6m8BHznkyF32QZKORtcf32S2vfHsM&download=image.png)
