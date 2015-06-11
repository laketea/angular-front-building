## 前端Angularjs工程开发规范 ##

**Angularjs** 工程规范.  


> DEMO工程：  git@gitlab.testbird.io:zhangwei/angularjs-demo.git
	

### 编码规范 ###
参考 [angularjs best practice](http://markdownpad.com)

### 工程目录结构 ###
- **src** 
	- **app** : 模块目录，每个模块独立一个子目录
		- **about**
			- **modules.js** ：子模块的模块文件，在此文件中定义module，以及模块config，run。
			- **routers.js** ：子模块的路由配置文件
			- **controllers.js** :子模块controller文件，当前模块所以的controller都写在此文件中
			- **services.js** ：子模块service文件，当前模块所以的service都写在此文件中
			- **directives.js** ： 子模块指令文件，当前模块所以的指令都写在此文件中
			- **about.less** ：子模块less文件，当前模块所以的less都写在此文件中
		- **home**
			- 参考about
		- app.module.js ：主模块文件
		- routes.js ：主模块路由配置
		- templates.js ：全局模板cache文件
	- **assets**
		- **css**： css目录
		- **img** ：图片目录
		- **font** ：字体目录
	- **components** :组件目录，主要包含一些可复用的组件。
		- **componet-name** ：组件，每个组件都是单独的一个模块。
	- **less** ： less文件目录
		- **main.less** ：主less文件，app目录下每个子模块的less文件需要在此处配置import。
		- **variables.less** ：less变量
	- **locales**
	- **index.html** ：主html文件
- **Gruntfile.js** :grunt task配置文件
- **bower.json** 
- **package.json** 
- **.bowerrc** 
- **.gitignore**

### 国际化 ###
国际化使用 **angular-translate**来实现,使用文档请[点击此处](http://angular-translate.github.io/).
  
下面说明下基本的用法：  

在template中，使用`translate filter`来定义trans

	<h3>{{ '国际化' | translate }}<h3>

在指令/服务/Ctrl中，使用`$translate`来定义trans

	$translate.instant('任务需求不能超过100个字符！');

运行如下命令，会自动抽取源码中定义的key来生成各个语言版本translate.json。

	grunt i18n

### Less ###
系统中，less源码主要分为两种：

- 主工程less文件  
	  存放在`/src/less/`目录中,main.less为入口less文件
- 子模块less文件  
	 存放在各个子模块目录下，以模块名字命名  

每个子模块的less文件都需要在main.less文件中引入，参考如下：  

	@import '../app/home/home.less';
	@import '../app/home/about.less';

在开发过程中，可运行如下命令自动监听less文件变化并编译less文件

	grunt watch:styles

### 可复用组件 ###
可复用组件存放在**src/components/**目录中。  
可复用组件主要分为以下几类：

- UI控件
- 基础逻辑功能
- 通用的业务逻辑

### 依赖管理 ###
使用**Bower**来管理依赖,通过`.bowerrc`配置bower的第三方库安装目录为`vendor`，`vendor`目录不会提交到git中。  
第三方库安装完成后，不需要手动添加`js/css`链接到`index.html`，可运行如下命令，自动将第三方库的文件链接注入到`index.html`中.  

	grunt wiredep

### 静态资源版本更新与缓存 ###
静态资源版本的更新与缓存，主要通过在静态资源文件中，嵌入版本号来实现。
主要实现方式如下  

> 1. 执行grunt build时，需要传入tag，如：`grunt build --tag=1.0.0.1`
2. 在index.html中，配置合并文件嵌入tag，如：`<!-- build:js ./js/main-<%= grunt.option('tag') %>.min.js --> `

### Angularjs文件自动加载 ###
这里所说的自动加载，是指自动将`src`中的`js`文件链接注入到`index.html`,这样我们在新增或者删除js文件时，就不需要手动到html中添加或删除对于的文件链接。
### 自动化测试 ###
暂未集成

### 前端构建 ###
前端开发常用的task如下：

> 1. grunt server,启动http服务器
> 2. grunt i18n, 国际化处理，自动提取key。
> 3. grunt reload, 自动注入src中的文件链接到html中
> 4. grunt inject，自动注入vendor以及src中的文件链接到html中
> 5. grunt work，工作模式，开启文件监听，会自动编译less以及自动注入文件链接
> 6. grunt build，release代码到dist目录

相关的grunt插件如下:
> 1. grunt-wiredep，可以将bower配置的依赖库中的文件链接自动注入到html中。此插件需要在html中配置对于的占位符。
> 2. grunt-http-server,http服务器，方便调试
> 3. grunt-contrib-watch，监听文件变化，主要用来监听less文件变化后，实时编译css文件，以及js文件变化后，自动将js文件链接注入到html中。
> 4. grunt-ng-annotate，自动将angularjs中的service等加上依赖声音。
> 5. grunt-angular-file-loader，自动将工程中的js文件注入到html中。
> 6. grunt-angular-translate，angularjs i18n工具，主要用来提取trans key，以生成类似的po文件。
> 7. grunt-angular-templates，将angular中的html模板转换为js文件，并将内容存入templatecache中，解决了html的碎片化问题。
> 8. grunt-useref，根据html中的恶注释，自动合并并压缩JS/CSS文件，且支持文件名嵌入版本号
