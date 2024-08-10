## VoucherPage(图片凭证展示)

### 属性

| 参数    | 说明                      | 类型   | 可选值 | 默认值 |
| ------- | ------------------------- | ------ | ------ | ------ |
| voucher | 图片 url 数组[url1, url2] | Array  | -      | []     |
| size    | 预览图片大小，宽高一致    | Number | -      | 50     |

## 示例

```javascript language
<s-table
  ref="photoTable"
  :loading="confirmLoading"
  :columns="photoColumn"
  :data="imagePage"
  :pagination="false"
  :showPagination="false"
  :scroll="{x:'max-content',y:'calc(100vh - 500px)'}"
  rowKey="id">
    <span
      slot="voucherscopedSlots"
      slot-scope="text">
      <voucherPage :voucher="text? text.map(v => v.voucherUrl):[]" />
    </span>
</s-table>

<script>
import voucherPage from '@/components/voucherPage/voucherPage'
export default {
  components: {
    voucherPage
  }
}
</script>
```

## 使用案例

[首页](http://localhost:81/)/财务管理/退定返现打款（src\views\business\brFinancialPayment\index.vue）

![](https://tcs-devops.aliyuncs.com/storage/112y685b3f3bdb072953c949a3e405bcfb2f?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTMyMiwiaWF0IjoxNzIzMTk2NTIyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnk2ODViM2YzYmRiMDcyOTUzYzk0OWEzZTQwNWJjZmIyZiJ9.xdiMX_GclXbti2Cfo70APiaFG11oROfJA4zNcX-DGkQ&download=image.png)
