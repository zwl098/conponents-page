## StableV2 表格组件

| 参数        | 说明                                                                | 类型    | 可选值 | 默认值                   |
| ----------- | ------------------------------------------------------------------- | ------- | ------ | ------------------------ |
| dataSource  | 表格将要渲染的数据源                                                | Array   | -      | []                       |
| rowHeight   | 表格行高                                                            | Number  | -      | 60px                     |
| columns     | 表格列的配置描述                                                    | Array   | -      | []                       |
| summary     | 表格头部合计的列的配置描述                                          | Array   | -      | {}                       |
| sorter      | 列排序，哪个字段要缓存排序，order 可选值 false, 'ascend', 'descend' | Object  | -      | {field: '',order: false} |
| showTools   | 是否要展示表格上方的工具栏                                          | Boolean | -      | true                     |
| cache       | 列展示的缓存，是否要在本地缓存列展示的数据                          | Boolean | -      | false                    |
| loadSize    | 要加载的行数                                                        | Number  | -      | 1                        |
| preLoadSize | 预加载的行数，随着滚动预先加载                                      | Number  | -      | 20                       |

> 参数的参考例子：

dataSource：

![](https://tcs-devops.aliyuncs.com/storage/112zf54dbf785cddf2473a4e32136d2b6244?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTIxOCwiaWF0IjoxNzIzMTk2NDE4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnpmNTRkYmY3ODVjZGRmMjQ3M2E0ZTMyMTM2ZDJiNjI0NCJ9.hkR5FMTzKnVZfncXzqgBjoCAxoGWVVkXvtSGooFfvww&download=3d493bc402bc4083ab9e0b631b6e0de1~tplv-k3u1fbpfcp-watermark.png)

---

Columns Options:

| 参数       | 说明                                                                                                | 类型     | 可选值 | 默认值 |
| ---------- | --------------------------------------------------------------------------------------------------- | -------- | ------ | ------ | --- |
| type       | 展示类型                                                                                            | string   | text   | badge  |
| dict       | 字典名称 type 为 text、badge、link、tag 时生效                                                      | string   | -      | -      |
| onClick    | 点击事件回调方法，使用箭头函数,回调参数为 text,record                                               | function | -      | -      |
| ellipsis   | type 为 text、link 时，内容长度超过，则隐藏                                                         | number   | -      | -      |
| colors     | type 为 tag、badge 时的颜色配置                                                                     | object   | array  | -      |
| format     | type 为 date、dateTime 时的 moment 格式化配置                                                       | object   | array  | -      |
| buttons    | 操作按钮配置 见 Buttons Options                                                                     | array    | -      | -      |
| showNumber | 操作按钮显示个数,超过数量折叠显示                                                                   | number   | -      | 2      |
| permission | 按钮显示权限。传数组时，只要拥有其中一个权限就显示,以感叹号开头代表无该项权限!brDeposit:getALlPhone | string   | array  | -      |     |

---

Buttons Options:

| 参数       | 说明                                               | 类型             | 可选值 | 默认值 |
| ---------- | -------------------------------------------------- | ---------------- | ------ | ------ |
| name       | 名称                                               | string           | -      | -      |
| onClick    | 点击事件回调，使用箭头函数                         | fn               | -      | -      |
| permission | 按钮显示权限。传数组时，只要拥有其中一个权限就显示 | string           | array  | -      |
| visible    | 按钮是否显示判断方法                               | boolean function | -      | -      |

```line
{
        title: '操作',
        width: '100px',
        align:'center',
        fixed:'right',
        dataIndex: 'action',
        type: 'button',
        buttons: [
          {
            name: '详情',
            
            permission: 'brDeposit:detail'
          },
          {
            name: '退定',
            onClick: (text, record) => {
              this.$refs.detailForm.detail(record)
            },
            visible: (text, record) => {
              return this.hasPerm('brDeposit:unsubscribe') & (record.status === 2 || record.status === 3 )
            }
          },
        ]
      }

```

> 按钮判断条件复杂时建议使用插槽方式:

```line
<template #action="{text, record}">
          <a v-if="(hasPerm('brDeposit:edit') & record.status === 2) && (userInfo.orgId==record.orgId || userInfo.orgId=='0' || userInfo.userType!=1 || !departmentSYGJFlag)" @click="$refs.checkForm.check(record, formData)">核验</a>
          <a @click="$refs.detailForm.detail(record)" v-if="hasPerm('brDeposit:detail')">详情</a>
          <a @click="$refs.unsubscribeForm.unsubscribe(record,formData)" v-if="hasPerm('brDeposit:unsubscribe') & (record.status === 2 || record.status === 3 ) ">退定</a>
          <a @click="$refs.examineForm.examine(record)" v-if="hasPerm('brDeposit:examine') & record.status === 4">审核</a>
          <a @click="$refs.editForm.edit(record, formData)" v-if="hasPerm('brDeposit:editInfo') && record.orderNum === record.useNum && record.appointmentStatus == 0">>编辑</a>
          <a @click="$refs.resetAssociation.init(record)" v-if="hasPerm('brDeposit:resetAssociation') && record.status != 1 && record.status != 2 && record.status != 6">重新关联</a>
        </template>

```

```line
{
        title: '操作',
        width: '100px',
        align:'center',
        fixed:'right',
        dataIndex: 'action',
        type: 'button',
        scopedSlots: {customRender: 'action'}
      }

```

字典:

| 字典值      | 说明   | 获取方法                                                                                            |
| ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| department  | 事业部 | this.$store.dispatch('dict/getDepartments').then(res => { this.departments = res })                 |
| store       | 门店   | this.$store.dispatch('dict/getStores', {params: {}}).then(res => { this.stores = res })             |
| brand       | 品牌   | this.$store.dispatch('dict/getBrands', {params: {}}).then(res => { this.brands = res })             |
| channel     | 渠道   | this.$store.dispatch('dict/getChannels', {params: {}}).then(res => { this.channels = res })         |
| bookingItem | 项目   | this.$store.dispatch('dict/getBookingItems', {params: {}}).then(res => { this.bookingItems = res }) |
| tag         | 标签   | this.$store.dispatch('dict/getTags', {params: {}}).then(res => { this.tags = res })                 |
| post        | 职位   | this.$store.dispatch('dict/getPostMap', {}).then(res => { this.postMap = res })                     |

---

summary：

![](https://tcs-devops.aliyuncs.com/storage/112zf9282c51e049841b81061e6066867bf2?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTIxOCwiaWF0IjoxNzIzMTk2NDE4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnpmOTI4MmM1MWUwNDk4NDFiODEwNjFlNjA2Njg2N2JmMiJ9.4w5BEmjB4T-uYBwp4kxYHOAAgWIxpSc1dQVtFpTfYAQ&download=cc68ea8eecbf451cb6de84472e9bcc8f~tplv-k3u1fbpfcp-watermark.png)

---

sorter：

在首次进入页面时一般没有缓存任何排序，把 sorter 属性设置成下面例子那样就好了。

![](https://tcs-devops.aliyuncs.com/storage/112zbca06eee5069781dac62a9aa2514c5ef?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTIxOCwiaWF0IjoxNzIzMTk2NDE4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnpiY2EwNmVlZTUwNjk3ODFkYWM2MmE5YWEyNTE0YzVlZiJ9.PmtVGEiCpOO5IhD1nQaNcc2TDvofpKaAkJEIdPP2mR4&download=6f0d4fd58b974886b314c5c23cf11ccf~tplv-k3u1fbpfcp-watermark.png)

---

使用例子：运营系统-->报表管理

![](https://tcs-devops.aliyuncs.com/storage/112za523339fcd08d53d346beed3121650f5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTIxOCwiaWF0IjoxNzIzMTk2NDE4LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnphNTIzMzM5ZmNkMDhkNTNkMzQ2YmVlZDMxMjE2NTBmNSJ9.JbJTgvs0KPNBvbSP2kRlO_8IqBgW9LygSoKmaaJkQDE&download=e19f9e977faf4274afee66eb3033ff12~tplv-k3u1fbpfcp-watermark.png)

```line
<s-table-v2
ref="table"
:columns="hasPerm('returnField:reportManage')?columns:columnEctype"
:dataSource="dataList"
rowKey="index"
:summary="summaryData[0]"
:sorter="sorter"
:cache="true"
@change="onChange"
@reload="loadData"
>
</s-table-v2>
  
import { STableV2 } from '@/components'
export default {
components: {
 STableV2    
},
data (){
    return {
    sorter: { field: '', order: '' }
    }
 }
}

```

---
