### MySwitch(权限开关组件)

开关按钮,可以给他权限,根据权限显示不同的内容

### 示例

 <MySwitch  
            checked-children="开启"  
            un-checked-children="禁用"  
            @confirm="() => changeStatus(record)"  
            :checked="!text"  
            permission="omCommentKeyword:changeStatus"/>

#### Props

|参数|说明|类型|可选值|默认|
|---|---|---|---|---|
|permission|权限字符|String|-|-|
|layout|风格:开关或a标签链接形式|String|switch\|Atag|switch|

无权限
![image.png](https://raw.githubusercontent.com/zwl098/pictureBed/master/img/202408101002820.png)
https://raw.githubusercontent.com/zwl098/pictureBed/master/img/202408101002820.png
有权限
![image.png](https://raw.githubusercontent.com/zwl098/pictureBed/master/img/202408101003194.png)
