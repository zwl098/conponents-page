## UploadV2(上传组件)

> 属性

| 参数        | 说明                                                   | 类型                    | 可选值                 | 默认值                     |
| ----------- | ------------------------------------------------------ | ----------------------- | ---------------------- | -------------------------- |
| text        | 上传标题，如上传头像，上传文件夹                       | String                  | -                      | '上传'                     |
| listType    | 上传列表的内建样式，支持三种基本样式                   | String                  | 'text'                 | 'picture '                 |
| value       | 父组件传进来的与已有的图片数据对应的 id                | [Number, String, Array] | -                      | -                          |
| urls        | 似乎也是父组件传进来的已有的图片数据 url               | [String, Array]         |                        | []                         |
| module      | 用于文件路径拼接                                       | String                  | -                      | -                          |
| ossName     | 对象存储名                                             | String                  | -                      | ''                         |
| accept      | 接受上传的文件类型                                     | String                  | input accept Attribute | '.png, .jpg, .jpeg, .heic' |
| bizPath     | 后端要求携带的其他参数                                 | String                  | -                      | 'temp'                     |
| disabled    | 只能查看不可上传和删除时开启该属性                     | Boolean                 | -                      | false                      |
| isMultiple  | 是否支持多选。渲染历史数据(已有的数据)时，是否多张图片 | Boolean                 | -                      | false                      |
| limit       | 多图情况下限制图片张数                                 | Number                  | -                      | 9                          |
| size        | 限制文件上传大小 M                                     | Number                  | -                      | 2                          |
| isCheckKB   | 是否判断大小单位为 Kb                                  | Boolean                 | -                      | false                      |
| videoHeight | 视频帧高                                               | Number                  | -                      | -                          |
| videoWidth  | 视频帧宽                                               | Number                  | -                      | -                          |
| before      | 上传文件之前的钩子                                     | Function                | -                      | -                          |

> 1、其中属性 module 必填，远程的文件路径

> 2、如果要渲染历史数据要开启 isMultiple、UploadV2 是同目录下的 Upload 组件增强后的组件，对比 Upload 增加了一些属性，大体上是一致的

### 例子：

```javascript language
 <upload
            ref="upload"
            accept=".png, .jpg, .jpeg, .heic, .pdf, .ofd"
            placeholder="请上传活码"
            :urls="formData.voucherUrls || []"
            module="brCashBackApplication/voucher/"
            v-decorator="['voucher']"
            :isMultiple="true"
            :limit="5"
            :ossName="ossName"
          />

<script>
import Upload from '@/components/Upload/UploadV2.vue'
export default {
  components: {
    Upload
  }
}
</script>


```

对应值参考

formData.voucherUrls 的参考值：

![](https://tcs-devops.aliyuncs.com/storage/112z521e7f68fc703f9dc2fa9f50df7b0387?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTI4MCwiaWF0IjoxNzIzMTk2NDgwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMno1MjFlN2Y2OGZjNzAzZjlkYzJmYTlmNTBkZjdiMDM4NyJ9.Yo5EXJCuDdThmtbrDalrWFoWnIhHMQWhZy49eE-YIk4&download=image.png)

voucher 的参考值：

![](https://tcs-devops.aliyuncs.com/storage/112z6e9bb5b0c39ec5d89817e7103c5175ca?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTI4MCwiaWF0IjoxNzIzMTk2NDgwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMno2ZTliYjViMGMzOWVjNWQ4OTgxN2U3MTAzYzUxNzVjYSJ9.gaoUO8IHFNYW4RgQE37taxybHfcYWJEPHpLpkLBMdpw&download=image.png)

## 使用案例

首页/业务管理/返现管理-----已拒绝状态---重新申请弹窗

![](https://tcs-devops.aliyuncs.com/storage/112z0abcac6761ec8cb5bdc5ee29ecf8f2ac?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTI4MCwiaWF0IjoxNzIzMTk2NDgwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnowYWJjYWM2NzYxZWM4Y2I1YmRjNWVlMjllY2Y4ZjJhYyJ9.9x6Z6RSDA_yoG5Ds3Dgp-jrwJr3meKy6K4OmpIpl_SE&download=2ca4e73de2b545269bb0e9afe636d3ed~tplv-k3u1fbpfcp-watermark%5B1%5D.image)

![](https://tcs-devops.aliyuncs.com/storage/112zc2f5d7dd8e9f4d2c98f4200246a4f6f5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTcyMzgwMTI4MCwiaWF0IjoxNzIzMTk2NDgwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMnpjMmY1ZDdkZDhlOWY0ZDJjOThmNDIwMDI0NmE0ZjZmNSJ9.yTixjVC3FWL9FFFHcf2m9SvUTFsc6OPGhKqy_laxZAA&download=image.png)
