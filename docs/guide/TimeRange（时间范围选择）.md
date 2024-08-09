## TimeRange（时间范围选择）

## 使用案例

门店管理/门店排班/调整排班（src\views\business\mdmStore\schedulingForm.vue）

![](https://tcs-devops.aliyuncs.com/storage/112yd3920ddc3f2f02b4595b02c4e08bb0f6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTM1NiwiaWF0IjoxNzIzMTk2NTU2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnlkMzkyMGRkYzNmMmYwMmI0NTk1YjAyYzRlMDhiYjBmNiJ9.vi4CvV_jShCwl4bems2a1uP1K4btlIoOeq-ZCh6QaFM&download=image.png)

## 属性

| 属性       | 类型    | 默认值  | 描述           |
| ---------- | ------- | ------- | -------------- |
| timeFormat | String  | 'HH:mm' | 时间格式       |
| value      | String  | -       | 组件的值       |
| index      | Number  | -       | 组件的索引     |
| disabled   | Boolean | false   | 是否禁用该组件 |

## 事件

| 事件   | 参数          | 描述                     |
| ------ | ------------- | ------------------------ |
| change | value: String | 当组件的值发生变化时触发 |
| delete | index: Number | 点击删除事件             |

## 例子

以下是一个使用该组件的例子：

```javascript
<template>
  <div>
    <time-range
	  v-for="(item, index) in businessHoursList"
	  :key="index"
	  :value="item"
	  :index="index"
      @delete="delBusinessHours"
	  @change="changeBusinessHours"
	/>
  </div>
</template>

<script>
import TimeRange from './TimeRange.vue';

export default {
  components: {
    TimeRange,
  },
  data() {
    return {
      businessHoursList: ['12:00-14:00']
    };
  },
  methods: {
    changeBusinessHours(value, index) {
      this.businessHoursList[index] = value
    },
	delBusinessHours(index) {
      this.businessHoursList.splice(index, 1)
    }
  },
};
</script>

```

##
