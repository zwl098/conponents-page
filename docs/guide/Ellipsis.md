## Ellipsis (省略提示组件)

## 用法

`Ellipsis` 组件用于在文本过长时自动截断并显示省略号。它支持在鼠标悬停时显示完整文本的提示框。

### 属性

| 属性名     | 类型             | 默认值           | 描述                                                              |
| ------- | -------------- | ------------- | --------------------------------------------------------------- |
| length  | Number         | -             | 要显示的文本长度（英文字符长度 1，中文字符长度 2）                                     |
| tooltip | Boolean/Object | false         | 是否在文本被截断时显示提示框。如果为 true，则默认提示框内容为完整文本。如果为对象，则属性将传递给 Tooltip 组件。 |


### 示例

```javascript
<template>
  <div>
    <h3>示例 1：基本用法</h3>
      
      ...
      
        <span slot="name" slot-scope="text">
          <ellipsis :length="10" tooltip>{{ text }}</ellipsis>
        </span>
        <span slot="url" slot-scope="text">
          <ellipsis :length="10" tooltip>{{ text }}</ellipsis>
        </span>
        <span slot="opTime" slot-scope="text">
          <ellipsis :length="10" tooltip>{{ text }}</ellipsis>
        </span>
  </div>
</template>
​
<script>
import {  Ellipsis } from '@/components'
​
export default {
  components: {
    Ellipsis
  }
}
</script>
```
