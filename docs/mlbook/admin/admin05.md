# 表单设计
### 概述
---------------
&emsp;&emsp;在美乐低代码平台中，"表单设计"是一项非常重要的功能，旨在简化和加快表单的创建和定制过程。  
&emsp;&emsp;"表单设计"是平台提供的一种可视化工具，它使开发人员能够轻松创建和自定义各种类型的表单，通过直观的拖放界面，开发人员可以快速构建表单并定义其中的字段、验证规则和布局。

### 使用场景
---------------
&emsp;&emsp;可用于数据上报、申请、积分管理、销售客户与订单管理等场景。通过配置表单基本属性，使表单更符合主题。

### 表单设计页面功能区域
---------------
&emsp;&emsp;表单设计页面分为三个区域，分别是容器区，字段区，组件设置区，通过这些区域的结合使用，能够在表单设计页面上轻松创建、布局和设置自定义表单。容器区用于划分表单布局的不同部分，组件设置区则提供了配置每个组件的灵活性，而字段选择区则可以更加方便的添加和选择所需的字段。

![表单功能区域](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1%E5%8A%9F%E8%83%BD%E5%8C%BA%E5%9F%9F.png)

标注的区域分别为：  
1.容器区：  
容器区是表单设计页面的主要工作区域，它允许创建和布局表单的各个部分。可以通过拖放和调整容器来创建行和列，以在表单中划分不同的区域。这使用户能够以自定义方式组织表单的布局，并以更直观的方式设置表单的结构。  
2.字段区：  
字段选择区是选择实体现有字段的功能（字段添加可在 字段管理 中查看详细内容）。可以在此区域中查看所有可用的字段选项，并将它们拖放到容器区域中。这些字段可以是文本输入字段、日期选择器、下拉列表等。通过字段选择区，您可以方便地向表单添加不同类型的字段并对其进行调整。  
3.组件设置区：  
组件设置区是用于配置每个表单组件的属性和行为的区域。当将表单组件添加到容器区时，可以在组件设置区中对其进行详细配置。包括设置组件的标签、样式、验证规则、默认值等。还可以根据需要自定义每个组件的外观和行为，以满足表单的特定要求。


### 表单设计步骤
---------------
表单设计主要分为三个步骤：

**1.添加字段**  
&emsp;&emsp;从页面左侧选择需要的容器及已有字段拖动到页面中间区域，并可自定义字段位置及排版

![添加字段](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%B7%BB%E5%8A%A0%E5%AD%97%E6%AE%B5.png)

**2.组件设置（设置字段属性）**  
&emsp;&emsp;选择已添加的字段，在页面右侧区域 - 组件设置栏可设置字段的属性。包括字段的验证规则、是否必填、默认值、大小样式等。通过设置字段属性，确保用户输入的数据符合规范，并提供更好的用户体验。

![组件设置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E8%AE%BE%E7%BD%AE%E5%AD%97%E6%AE%B5%E5%B1%9E%E6%80%A7.png)

**3.全局设置（设置表单属性）**  
&emsp;&emsp;除了设置字段属性之外，还可以在页面右侧区域 - 全局设置中设置整个表单的属性。包括表单的样式、布局等。通过设置表单属性，可调整表单的外观和布局，以满足特定的设计需求，并提供更好的用户导航和交互体验。

![全局设置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE.png)

### 表单设计字段属性
---------------
### 1.文本

&emsp;&emsp;文本是最基础的字段，在表单中具有广泛的应用，可以用来收集文字、数字、编号等信息。

**应用场景**  
* 文本可用于录入内容较短的文本类信息，如姓名、产品名称、公司名称、规格、型号等；  
* 还可以用于录入不需要、不适合加减乘除计算的数字类信息，如手机号码、身份证号、员工编号、银行卡号、会员号等

**字段属性**
* 常见属性（其他类型字段部分一样的属性与此相同）

![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7%E6%96%87%E6%9C%AC.png)

标注的区域分别为：  
1.唯一名称：该字段唯一名称，与实体内其他字段名称不可重复；  
2.修改数据属性名称：数据库标识符，开启后可进行修改；  
3.标签：在表单上展示的名称标题；  
![标签](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%A0%87%E7%AD%BE.png)

4.字段标签对齐：在表单上展示的名称标题对齐方式；  
居左：  
![居左](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%AD%97%E6%AE%B5%E6%A0%87%E7%AD%BE%E5%AF%B9%E9%BD%90%E5%B1%85%E5%B7%A6.png)
居中：  
![居中](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%AD%97%E6%AE%B5%E6%A0%87%E7%AD%BE%E5%AF%B9%E9%BD%90%E5%B1%85%E4%B8%AD.png)
居右：  
![居右](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%AD%97%E6%AE%B5%E6%A0%87%E7%AD%BE%E5%AF%B9%E9%BD%90%E5%B1%85%E5%8F%B3.png)

5.显示类型可切换文本 / 密码
![文本/密码](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%98%BE%E7%A4%BA%E7%B1%BB%E5%9E%8B%E5%8F%AF%E5%88%87%E6%8D%A2%E6%96%87%E6%9C%AC%20%E5%AF%86%E7%A0%81.png)

6.默认值：设置后，用户新建表单时，该字段展示默认值内容；  
7.占位内容：为字段提供占位符，指示用户应该在字段中输入什么内容。它可以帮助用户明确输入的预期。
![占位内容](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%8D%A0%E4%BD%8D%E5%86%85%E5%AE%B9.png)

8.组件大小：可设置组件在表单中的大小（default：默认大小； large：大； small：小）
![组件大小](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E7%BB%84%E4%BB%B6%E5%A4%A7%E5%B0%8F.png)

9.标签宽度：支持输入数字，对表单上展示的标题的宽度进行调整；  
10.隐藏字段标签：隐藏后，表单上该字段将不再展示标题名称；  
11.标签超长换行：换行展示过长字数的标题名称；  
12.必填字段：开启后，该字段将校验必填；  
13.必填校验提示：开启必填字段后，未填写该字段时可自定义设置提示语；  
14.字段校验：字段的校验逻辑，可选择系统自带常用校验规则，也支持输入正则表达式；  
![字段校验](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%AD%97%E6%AE%B5%E6%A0%A1%E9%AA%8C.png)

15.校验失败提示：开启字段校验后，校验失败时可自定义设置提示语；  
16.只读：开启后只可查看不可编辑删除；  
17.禁用：开启后不可编辑该字段内容；  
18.隐藏：新建编辑时该字段隐藏不展示；  
19.可清除：清除字段内容；  
20.自定义CSS样式：支持自定义调整页面内容；  

* 高级属性

1.最小长度：字段所允许的最小字符数。  
2.最大长度：字段所允许的最大字符数，如果用户输入的内容超出最大长度限制，会自动进行截断。  
3.显示字数统计：在字段旁显示当前已输入的字数统计，帮助用户实时了解已输入的字数。  
4.头部icon / 尾部icon / 标签icon ：  
下方截图中，红色代表头部icon，黄色代表尾部icon，蓝色代表标签icon  
![icon位置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E9%AB%98%E7%BA%A7%E5%B1%9E%E6%80%A7%E5%A4%B4%E5%B0%BE%E6%A0%87%E7%AD%BE.png)

5.标签文字提示：对该字段的标签（名称）进行提示说明；  
6.添加后置按钮：在字段的末尾添加一个按钮。这个按钮可以用于触发特定的操作，如清空字段内容、执行验证、执行其他操作等。  
7.后置按钮禁用：允许在某些情况下禁用后置按钮。可以根据需要设置按钮的禁用状态；  
8.后置按钮icon：添加后置按钮后，按钮的icon标识；  
![后置按钮icon](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%90%8E%E7%BD%AE%E6%8C%89%E9%92%AEicon.png)

* 事件属性

支持自定义设置表单其他需求内容；

![事件属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E4%BA%8B%E4%BB%B6%E5%B1%9E%E6%80%A7.png)

1.onCreated：在字段创建时触发，可以用于执行一些初始化操作或设置字段的初始值；  
2.onMounted：在字段渲染到页面上时触发，可以用于执行与页面交互相关的操作。  
3.onInput：在用户输入时触发，可以用于实时获取输入内容并对其进行处理。  
4.onChange：在字段值发生变化时触发，可以用于监听字段值的变化并执行相应的逻辑。  
5.onFocus：在字段获得焦点时触发，可以用于执行当字段获得焦点时的操作。  
6.onBlur：在字段失去焦点时触发，可以用于执行当字段失去焦点时的操作。  
7.onValidate：在对字段进行验证时触发，可以用于自定义字段验证逻辑。  
8.onAppendButtonClick：在单击后置按钮时触发，可以用于执行与按钮关联的操作。

### 2.长文本

&emsp;&emsp;长文本类型字段通常用于收集用户输入的较长或详细的信息。

**应用场景**  
* 通常用于收集用户的意见、描述、备注等内容。

**字段属性**  
* 常见属性

![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E9%95%BF%E6%96%87%E6%9C%AC%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.自动适应高度：  
开启后，该属性可使文本字段根据输入的内容自动调整高度，以适应文本的长度。这样可以确保所有内容都能完整显示，无需用户手动调整滚动条或文本框大小。  
2.行数：  
若无需自动适应高度，则可自定义设置字段的显示行数，可以根据需要显示的文本行数，例如设置为3行或5行等。根据指定的行数，文本字段将自动进行高度调整，以容纳输入的文本。  

其他属性内容设置同 [文本字段属性]

### 3.整数 / 精度小数 / 百分比 / 金额

整数：用于接收整数数值的字段类型。适用于需要收集数量、计数或年龄等整数值的场景。  
精度小数：用于接收带有小数点的数值，可以设置精确度和小数位数。数字字段录入的数字，可以进行计算、统计、汇总等。例如商品单价、请假天数等。  
百分比：用于表示百分比值的字段类型，适用于需要收集百分比比例或指标的场景，如利润率、完成度等。  
金额：用于接收货币金额的字段类型。适用于需要收集金额、成本或价格等与货币有关的信息的场景。

**字段属性**  
* 常见属性

![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%95%B4%E6%95%B0%E5%B0%8F%E6%95%B0%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.显示控制按钮：该属性用于控制是否在整数字段旁边显示增加和减少的控制按钮，以方便用户通过按钮快速调整数值。可以选择显示或隐藏控制按钮。  
2.控制按钮位置：如果选择显示控制按钮，该属性用于指定控制按钮的位置。  
default为默认位置，居于字段尾部，如下图：
![默认位置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%8E%A7%E5%88%B6%E6%8C%89%E9%92%AE%E4%BD%8D%E7%BD%AE.png)

right为左侧位置，控制按钮增减居于字段不同侧。如下图：
![左侧位置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%8E%A7%E5%88%B6%E6%8C%89%E9%92%AE%E4%B8%8D%E5%90%8C%E4%BE%A7.png)

* 高级属性

![高级属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%95%B4%E6%95%B0%E5%B0%8F%E6%95%B0%E9%AB%98%E7%BA%A7%E5%B1%9E%E6%80%A7.png)

1.最大值：该属性用于设置整数字段所允许的最大值。用户无法输入大于该数值的整数。  
2.最小值：该属性用于设置整数字段所允许的最小值。用户无法输入小于该数值的整数。  
3.精度：精度属性用于控制整数字段的小数位数。对于整数类型的字段，精度通常设置为0，表示不允许包含小数。  
4.增长步长：该属性定义了在使用控制按钮（如增加按钮或减少按钮）调整数值时，每次增加或减少的数值。例如，增长步长设置为1时，每次点击增加按钮或减少按钮，数值将增加或减少1。

其他属性内容设置同 [文本字段属性]

### 4.单选项

用于提供单选选项的字段类型。适用于需要用户从多个选项中选择一个的场景，如性别、类别等。

**字段属性**  
* 常见属性

![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%8D%95%E9%80%89%E9%A1%B9%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.可搜索选项：开启后，允许用户在单选项字段中搜索匹配的选项。输入关键词，系统会自动过滤选项并显示匹配的结果，方便用户快速选择所需选项。  
2.允许创建选项：开启后，用户可以在选项列表中输入新选项，并将其添加到选项列表中。这样可以增加灵活性，满足用户特定需求的选择。  
3.可远程搜索：开启后，当选项的数量较大时，启用此属性可以实现远程搜索功能。输入关键词后，系统会向服务器发送请求，从服务器端获取匹配的选项，并将它们显示在下拉列表中，这样可以提高搜索的效率和准确性。  
4.自动弹出选项：开启后，当用户点击单选项字段时，下拉列表会自动弹出显示可选项。这样用户无需手动展开下拉列表，减少了用户的操作步骤，提供更便捷的选择体验。  
5.选项可多选：开启后，用户可以选择多个选项，而不仅限于单选。  
6.多选数量限制：在开启选项可多选的情况下，可以设置多选数量的限制。例如，限制用户最多选择3个选项。这样可以控制用户的选择范围，避免选择过多或过少的情况。
![数量限制](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%8D%95%E9%80%89%E9%A1%B9%E5%A4%9A%E9%80%89%E6%95%B0%E9%87%8F%E9%99%90%E5%88%B6.png)

### 5.多选项

用于提供多选选项的字段类型。适用于需要用户从多个选项中选择一个或多个的场景，如兴趣爱好、标签等。

**字段属性**  
* 常见属性
![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%A4%9A%E9%80%89%E9%A1%B9%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

属性内容设置同 [文本字段属性]

### 6.日期/日期时间

用于接收日期和时间值的字段类型。适用于需要收集特定日期的场景，如出生日期、项目截止日期、会议时间、活动开始时间等。

**字段属性**  
* 常见属性
![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.自动拉伸宽度：开启后自动拉伸宽度，使其根据内容的长度动态调整宽度。这样可以确保日期或日期时间的显示不会被截断，并提供更好的用户体验；  
2.可输入：开启后，允许用户输入日期或日期时间的值。可以通过点击或手动输入来选择日期或日期时间；  
3.显示格式：设置不同的显示格式，如年-月-日 (YYYY-MM-DD)、月/日/年 (MM/DD/YYYY) 或者其他格式。显示格式对应于用户在界面上看到的日期或日期时间的展示方式。  
![显示格式](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%97%B6%E9%97%B4%E6%97%A5%E6%9C%9F%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F.png)

4.绑定值格式：绑定值格式定义了该字段在提交表单时所使用的日期或日期时间的格式。不同的系统和后台处理程序需要不同的日期或日期时间格式。  
![绑定值格式](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E7%BB%91%E5%AE%9A%E5%80%BC%E6%A0%BC%E5%BC%8F.png)

其他属性内容设置同 [文本字段属性]

### 7.图片/文件

图片：用于上传和显示图像的字段类型。适用于需要用户上传图片或显示相关图像的场景，如头像、产品图片等。  
文件：用于上传和处理文件的字段类型。适用于需要用户上传和管理文件（如文档、音频、视频等）的场景。

**字段属性**  
* 常见属性
![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%9B%BE%E7%89%87%E6%96%87%E4%BB%B6%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.上传地址：指上传图片文件的目标地址或API端点。当用户选择图片并点击上传按钮时，图片将被发送到指定的上传地址。  
2.上传提示内容：在图片上传字段中提供一些提示信息，例如可以提示用户选择合适尺寸和格式的图片，或提醒用户不要上传敏感信息的图片。  
![上传提示内容](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%9B%BE%E7%89%87%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%8F%90%E7%A4%BA.png)

3.发送cookie凭证：如果应用程序需要验证用户身份或对上传的图片进行权限控制，则可以选择在上传请求中发送Cookie凭证，以确保只有经过身份验证的用户才能成功上传图片。  
4.文件可多选：控制是否可以选择多个文件进行上传。如果支持用户一次上传多个图片文件，可以将此属性设置为允许多选。  
5.最大上传数量：限制一次上传的图片数量。可根据业务需求设置最大允许的上传数量，确保用户不会一次上传过多的图片文件。  
6.文件大小限制：设置图片上传的图片大小限制，以确保用户上传的图片文件不超过规定的大小，例如可设置为最大允许上传10MB大小的图片。  
7.上传文件类型：规定用户只能上传特定类型的图片文件，例如JPEG、PNG等。这可以防止用户上传不支持的文件类型，从而保证上传的图片格式符合需求。

其他属性内容设置同[文本字段属性]

### 8.一对一引用

用于建立数据之间一对一关系的字段类型。适用于需要建立和管理不同数据记录之间关系的场景，如员工与部门的关系等。

**字段属性**  
* 常见属性
![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E4%B8%80%E5%AF%B9%E4%B8%80%E5%BC%95%E7%94%A8%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

属性内容设置同[文本字段属性]

### 9.布尔

布尔类型的字段通常用于表示一个是或否的逻辑值，即只有两个可能的取值：是（True）或否（False）。该类型字段主要用于条件判断、开关和选择性信息等。

**字段属性**  
* 常见属性
![常见属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%83%E5%B0%94%E5%B8%B8%E8%A7%81%E5%B1%9E%E6%80%A7.png)

1.显示样式：可以选择行排/竖排  
行内：  
![显示样式-行内](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%83%E5%B0%94%E6%98%BE%E7%A4%BA%E6%A0%B7%E5%BC%8F%E8%A1%8C%E5%86%85.png)

块：  
![显示样式-块](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%83%E5%B0%94%E6%98%BE%E7%A4%BA%E6%A0%B7%E5%BC%8F%E5%9D%97.png)

2.显示样式：选择后显示为按钮形式，有不同的视觉效果。
![显示样式 - 按钮](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%83%E5%B0%94%E6%98%BE%E7%A4%BA%E6%A0%B7%E5%BC%8F.png)

3.带有边框：可以选择是否带有边框。边框可以用来更明显地区分字段和周围的内容，使其更加突出和易于识别。
![带有边框](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E5%B8%83%E5%B0%94%E5%B8%A6%E6%9C%89%E8%BE%B9%E6%A1%86.png)

其他属性内容设置同[文本字段属性]

### 表单属性设置
---------------
&emsp;&emsp;在页面右侧区域 - 全局设置中设置整个表单的属性。包括表单的样式、布局等。通过设置表单属性，可调整表单的外观和布局，以满足特定的设计需求，并提供更好的用户导航和交互体验。

![表单属性](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E8%A1%A8%E5%8D%95%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE.png)

**基本属性设置**

1.全局组件大小：设置表单中组件（字段）的整体大小。  
![组件大小](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E7%BB%84%E4%BB%B6%E5%A4%A7%E5%B0%8F.png)

2.字段标签位置：定义字段标签的位置，可以选择放置在字段的左边或顶部。  
3.字段标签对齐：指定标签在字段内的对齐方式，可以选择左对齐、居中或右对齐。  
4.标签宽度：设置字段标签的宽度。  
5.表单全局CSS：支持为表单应用自定义的CSS样式，以定制表单的外观。  
6.自定义CSS样式：用于应用特定字段或组件的自定义CSS样式，以个性化表单的外观。  
7.表单全局函数：定义在表单中可用的全局函数，可以添加特定的自定义逻辑和功能。  

**生成SFC设置** 

1.数据对象名称：指定生成的单文件组件（SFC）中的数据对象名称，用于存储表单数据。  
2.引用名称：设置生成的SFC的引用名称，用于在其他组件中引用该表单。  
3.验证规则名称：定义用于验证表单字段的规则集的名称。

**事件属性**

1.onFormCreated：在表单创建时触发的事件，支持执行初始化操作或添加其他逻辑。  
2.onFormMounted：在表单挂载到DOM之后触发的事件，可以用于执行DOM相关的操作。  
3.onFormDataChange：当表单数据发生变化时触发的事件，可以根据需要执行特定的响应动作。  
4.onFormValidate：在进行表单验证时触发的事件，可以检查表单数据的有效性并采取适当的措施。

通过配置这些全局属性，可以定制和控制表单的外观和行为，以满足特定的需求和设计要求。

### 数据源设置
---------------
&emsp;&emsp;表单数据源设置是为了连接表单与后台数据源，确保表单元素与具体数据之间的数据交互和传输正常进行。
![数据源设置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E8%A1%A8%E5%8D%95%E8%AE%BE%E8%AE%A1/%E6%95%B0%E6%8D%AE%E6%BA%90%E8%AE%BE%E7%BD%AE.png)

以下是各个数据源设置的具体内容解释：  
1.唯一名称：为数据源设置一个唯一的名称，以便在表单中区分和识别不同的数据源。  
2.请求地址：填写向后台发送请求的地址，即 API 接口的 URL。该地址应该是后台服务器上的有效地址，用于获取、提交或处理数据。  
3.描述信息：提供对数据源进行描述的文本，可以包括数据源的用途、说明或其他相关信息，以方便理解和管理数据源。  
4.请求方法：选择合适的请求方法来与后台进行数据交互。常见的请求方法包括 GET（获取数据）、POST（提交数据）、PUT（更新数据）和 DELETE（删除数据）。  
5.请求头：在请求中发送的附加信息，例如身份验证令牌、数据格式等。请求头可以提供更多的上下文信息，帮助后台服务器正确处理请求。  
6.参数：在请求过程中传递给后台的额外参数。参数可以是键值对形式的数据，提供更多的请求细节和需要的信息。  
7.发送数据：指定要向后台发送的数据。可以是表单字段的值、用户输入、静态数据或其他方式提供的数据。具体的数据格式和内容根据后台的要求来设定。  
8.请求配置：进一步配置请求的处理方式，包括数据处理、错误处理和多数据集配置等。这些配置项可以根据具体情况进行设置和调整。  
9.数据处理：设置数据的解析和处理方式，例如将响应的数据转换为特定的格式或进行数据的转换和提取。    
10.错误处理：定义在数据源请求过程中发生错误时的处理方法，例如显示错误提示信息或执行特定的错误处理逻辑。  
11.多数据集配置：如果需要在一个请求中返回多个数据集，可以开启多数据集返回配置，并进行相应的设置。  
12.测试数据源：提供测试数据源的选项，以便在开发过程中检查数据源设置的正确性和有效性。测试数据源可以模拟数据请求和响应，以确保数据源的正常工作和结果的正确性。  

&emsp;&emsp;通过合理设置和配置表单数据源，可以确保表单与后台数据之间的有效交互，实现数据的获取、提交或更新，从而满足具体应用的需求。






