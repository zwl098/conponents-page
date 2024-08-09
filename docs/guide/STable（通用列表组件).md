## STable（通用列表组件）

## 例子 1

（基础使用）

```javascript
​
<template>
  <s-table
    ref="table"
    :rowKey="(record) => record.data.id"
    :columns="columns"
    :data="loadData"
    :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
  >
  </s-table>
</template>
​
<script>
  import STable from '@/components'
​
  export default {
    components: {
      STable
    },
    data() {
      return {
        columns: [
          {
            title: '规则编号',
            dataIndex: 'no'
          },
          {
            title: '服务调用次数',
            dataIndex: 'callNo',
            sorter: true,
            needTotal: true,
            customRender: (text) => text + ' 次'
          },
          {
            title: '状态',
            dataIndex: 'status',
            needTotal: true,
            dict: 'dictName'
          },
          {
            title: '链接',
            dataIndex: 'link',
            onClick: (text, record) => { ... }
          },
          {
            title: '更新时间',
            dataIndex: 'updatedAt',
            sorter: true,
            type: 'dateTime'
          }
        ],
        // 查询条件参数
        queryParam: {},
        // 加载数据方法 必须为 Promise 对象
        loadData: parameter => {
          return this.$http.get('/service', {
            params: Object.assign(parameter, this.queryParam)
          }).then(res => {
            return res.result
          })
        },
        selectedRowKeys: [],
        selectedRows: []
      }
    },
    methods: {
      onSelectChange (selectedRowKeys, selectedRows) {
         this.selectedRowKeys = selectedRowKeys
         this.selectedRows = selectedRows
       }
    }
  }
</script>
​
```

## 例子 2

（简单的表格，最后一列是各种操作）

```text
<template>
  <s-table
    ref="table"
    :columns="columns"
    :data="loadData"
  >
    <span slot="action" slot-scope="text, record">
      <a>编辑</a>
      <a>button2</a>
      <a>button3</a>
      <a>button4</a>
    </span>
  </s-table>
</template>
​
<script>
  import STable from '@/components/table/'
​
  export default {
    components: {
      STable
    },
    data() {
      return {
        columns: [
          {
            title: '规则编号',
            dataIndex: 'no'
          },
          {
            title: '状态',
            dataIndex: 'status',
            dict: 'dictName'
          },
          {
            title: '更新时间',
            dataIndex: 'updatedAt',
            type: 'dateTime'
          },
          {
            table: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
          }
        ],
        // 查询条件参数
        queryParam: {},
        // 加载数据方法 必须为 Promise 对象
        loadData: parameter => {
          return this.$http.get('/service', {
            params: Object.assign(parameter, this.queryParam)
          }).then(res => {
            return res.result
          })
        },
      }
    },
    methods: {
      edit(row) {
        // axios 发送数据到后端 修改数据成功后
        // 调用 refresh() 重新加载列表数据
        // 这里 setTimeout 模拟发起请求的网络延迟..
        setTimeout(() => {
          this.$refs.table.refresh() // refresh() 不传参默认值 false 不刷新到分页第一页
        }, 1500)
​
      }
    }
  }
</script>
```

### Methods

---

> 通过 `this.$refs.table` 调用

1、`this.$refs.table.refresh(true)` 刷新列表 (用户新增/修改数据后，重载列表数据)

> 注意：要调用 `refresh(bool)` 需要给表格组件设定 `ref` 值`refresh()` 方法可以传一个 `bool` 值，当有传值 或值为 `true` 时，则刷新时会强制刷新到第一页（常用户页面 搜索 按钮进行搜索时，结果从第一页开始分页）

2、`this.$refs.table.clearRefreshSelected(true)` 刷新并清空已选

> `clearRefreshSelected` 方法可以传一个 `bool` 值，当有传值 或值为 `true` 时，则刷新时会强制刷新到第一页（常用户页面 搜索 按钮进行搜索时，结果从第一页开始分页）

3、`this.$refs.table.clearSelected()` 清空已选项

4、 this.$refs.table.updateSelect(this.selectedRowKeys, this.selectedRows) 更新选中项

### Props

---

> 除去 `a-table` 自带属性外，还而外提供了一些额外属性属性

| 参数            | 说明                                                                                                                  | 类型               | 可选值 | 默认值  |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------- | ------ |
| alert           | 设置是否显示表格上方选中信息栏（需配合 rowSelection 使用）                                                            | [object, boolean]  | -      | null    |
| data            | 加载数据方法 必须为 Promise 对象（和 a-table 的 dataSource 属性二选一，一个属获取数据的接口方法，一个是处理好的数组） | Promise            | -      | -       |
| columns         | 表格列的配置描述，具体项见下表                                                                                        | array              | -      | -       |
| sorter          | 初始化排序对象                                                                                                        | Object             | -      | -       |
| cache           | 是否缓存自定义列勾选                                                                                                  | Boolean            | -      | -       |
| autoLoad        | 初始化时是否自动加载列表                                                                                              | Boolean            | -      | -       |
| rowKey          | 列表数据的唯一标识，不可重复                                                                                          | [String, Function] | -      | key     |
| pageNum         | 当前页数                                                                                                              | Number             | -      | 1       |
| pageSize        | 每页条数                                                                                                              | Number             | -      | 10      |
| showSizeChanger | 是否可以改变 pageSize                                                                                                 | Boolean            | -      | true    |
| size            | 当为「small」时，是小尺寸分页                                                                                         | String             | -      | small   |
| showTools       | 是否展示表格右上方工具栏                                                                                              | Boolean            | -      | true    |
| rowSelection    | https://1x.antdv.com/components/table-cn/#rowSelection                                                                | Object             | -      | null    |
| showPagination  | 显示分页选择器                                                                                                        | [string, boolean]  | 'auto' | boolean | 'auto' |
| dataSource      | 数据源                                                                                                                | Array              | -      | -       |
| pageURI         | enable page URI mode                                                                                                  | Boolean            | -      | false   |
| extraTool       | 添加额外的右上方工具项                                                                                                | Array              | -      | []      |

`extraTool`的属性数组

```text
 extraTool: [
          {
            icon: 'reload',
            title: '刷新',
            onClick: () => {
              this.refresh()
            }
          },
          {
            icon: 'column-height',
            title: '密度',
            isDropdown: true,
            menu: () => {
              const onClick = ({ key }) => {
                this.customSize = key
              }
              return (
                <a-menu slot="overlay" onClick={onClick} selectable defaultSelectedKeys={[this.customSize]}>
                  <a-menu-item key="default">默认</a-menu-item>
                  <a-menu-item key="middle">中等</a-menu-item>
                  <a-menu-item key="small">紧凑</a-menu-item>
                </a-menu>
              )
            },
            onClick: () => { }
          },
          {
            icon: 'setting',
            title: '列设置',
            isDropdown: true,
            menu: () => {
              return <columnSetting slot="overlay" columns={columns} onColumnChange={val => { changed = true; settingColumns = val }} />
            },
            onClick: () => { }
          }
        ]
```

`alert` 属性对象：

```text
alert: {
  show: Boolean,  
  clear: [Function, Boolean]//清空按钮
}
```

Columns Options:

| 参数       | 说明                                                                                                | 类型     | 可选值 | 默认值 |
| ---------- | --------------------------------------------------------------------------------------------------- | -------- | ------ | ------ | --------------------------------------------- | ------------- | ---- | ----- | --- | ---- | ----- | --- |
| type       | 展示类型                                                                                            | string   | text   | badge  | button                                        | date dateTime | link | price | tag | text | brand | -   |
| dict       | 字典名称 type 为 text、badge、link、tag 时生效                                                      | string   | -      | -      |
| onClick    | 点击事件回调方法，使用箭头函数,回调参数为 text,record                                               | function | -      | -      |
| ellipsis   | type 为 text、link 时，内容长度超过，则隐藏                                                         | number   | -      | -      |
| colors     | type 为 tag、badge 时的颜色配置,该字段为空且 dict 不为空时，取字典中的颜色                          | object   | array  | -      | -                                             |
| format     | type 为 date、dateTime 时的 moment 格式化配置                                                       | object   | array  | -      | date:YYYY-MM-DD dateTime: YYYY-MM-DD HH:mm:ss |
| buttons    | 操作按钮配置 见 Buttons Options                                                                     | array    | -      | -      |
| showNumber | 操作按钮显示个数,超过数量折叠显示                                                                   | number   | -      | 2      |
| permission | 按钮显示权限。传数组时，只要拥有其中一个权限就显示,以感叹号开头代表无该项权限!brDeposit:getALlPhone | string   | array  | -      | -                                             |
| describe   | 表头描述                                                                                            | string   | -      | -      |
| needTotal  | 选中项统计（需配合 alert 和 rowSelection 使用）                                                     | Boolean  | -      | -      |
| fold       | 多级表头可展开配置 （添加该字段启用表头展开功能；true 默认展开，false 默认关闭）                    | Boolean  | true   | false  | -                                             |

Buttons Options:

| 参数       | 说明                                               | 类型             | 可选值 | 默认值 |
| ---------- | -------------------------------------------------- | ---------------- | ------ | ------ | --- |
| name       | 名称                                               | string           | -      | -      |
| onClick    | 点击事件回调，使用箭头函数                         | fn               | -      | -      |
| permission | 按钮显示权限。传数组时，只要拥有其中一个权限就显示 | string           | array  | -      | -   |
| visible    | 按钮是否显示判断方法                               | boolean function | -      | -      |

```text
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
            onClick: (text, record) => {
              this.$refs.detailForm.detail(record)
            },
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

> 按钮判断条件复杂时建议使用插槽方式（不需要加分割线， 默认显示 2 个，超出隐藏，可以通过 showNumber 属性修改）

```text
  <template #action="{text, record}">
          <a
            v-if="(hasPerm('brDeposit:edit') & record.status === 2) && (userInfo.orgId==record.orgId || userInfo.orgId=='0'"
            @click="$refs.checkForm.check(record, formData)"
          >
            核验
          </a>
          <a
            @click="$refs.detailForm.detail(record)"
            v-if="hasPerm('brDeposit:detail')"
          >
            详情
          </a>
          <a
            @click="$refs.unsubscribeForm.unsubscribe(record,formData)"
            v-if="hasPerm('brDeposit:unsubscribe') & (record.status === 2 || record.status === 3 )"
          >
            退定
          </a>
          <a
            @click="$refs.examineForm.examine(record)"
            v-if="hasPerm('brDeposit:examine') & record.status === 4"
          >
            审核
          </a>
          <a
            @click="$refs.editForm.edit(record, formData)"
            v-if="hasPerm('brDeposit:editInfo') && record.orderNum === record.useNum && record.appointmentStatus == 0"
          >
            编辑
          </a>
          <a
            @click="$refs.resetAssociation.init(record)"
            v-if="hasPerm('brDeposit:resetAssociation') && record.status != 1 && record.status != 2 && record.status != 6"
          >
            重新关联
          </a>
        </template>

```

```text
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

字典

| 字典值      | 说明   | 获取方法                                                                                            |
| ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| department  | 事业部 | this.$store.dispatch('dict/getDepartments').then(res => { this.departments = res })                 |
| store       | 门店   | this.$store.dispatch('dict/getStores', {params: {}}).then(res => { this.stores = res })             |
| brand       | 品牌   | this.$store.dispatch('dict/getBrands', {params: {}}).then(res => { this.brands = res })             |
| channel     | 渠道   | this.$store.dispatch('dict/getChannels', {params: {}}).then(res => { this.channels = res })         |
| bookingItem | 项目   | this.$store.dispatch('dict/getBookingItems', {params: {}}).then(res => { this.bookingItems = res }) |
| tag         | 标签   | this.$store.dispatch('dict/getTags', {params: {}}).then(res => { this.tags = res })                 |
| post        | 职位   | this.$store.dispatch('dict/getPostMap', {}).then(res => { this.postMap = res })                     |

```text
// 表格中的数据只需要配置相应的字典值就能显示对应的中文；如果需要单独获取数据，请使用vuex获取
import { mdmStoreList, mdmDepartmentList, mdmChannelList, mdmBrandList, mdmBookingItemTree, ... } from '@/store/api'
​
mdmStoreList().then(res => {
​
})
​
...
​
```
