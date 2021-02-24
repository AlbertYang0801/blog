## Gitbook本地环境搭建

#### 1.安装node.js

- 下载安装包

  推荐下载地址：https://nodejs.org/dist/latest-v12.x/

  >注意：版本不易过高，使用推荐版本即可。


- 解压安装包并安装，使用以下命令查看是否安装成功。

  ```
  node -v
  npm -v
  ```

- 若安装版本过高，需要卸载node环境。

  >参考博客：https://www.jianshu.com/p/920961b6a538


#### 2.切换国内镜像

>npm国内下载速度较慢，可设置淘宝镜像。

设置淘宝镜像命令如下：

```
npm config set registry=http://registry.npm.taobao.org -g
```

#### 3.安装gitbook

官网地址：[https://www.npmjs.com/package/gitbook](https://www.npmjs.com/package/gitbook)

```
#使用npm安装gitbook客户端
npm install gitbook-cli -g 

#查看gitbook版本,若没有安装过gitbook，会自动安装
gitbook -V
```

[注意：详细请点击该链接查看参考博客](https://blog.csdn.net/weixin_43778378/article/details/113678085?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&spm=1001.2101.3001.4242)

#### 4.Gitbook安装遇到的问题

*4.1使用`gitbook serve`命令时报错*

- 异常信息：

```
Error: ENOENT: no such file or directory, stat 'D:\workspace\core-solution-docs\_book\gitbook\gitbook-plugin-fontsettings\fontsettings.js'
```

- 解决办法：

  修改用户目录的`.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js`文件，把所有的`confirm`改为`false`。

  文件目录：`\Users\yangjunwei\.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js`

*4.2 在安装gitbook时使用了`root`用户，导致`_book`目录普通用户无法操作。*

- 解决办法：

  将`_book`文件夹赋予权限，使用`chmod 777 -book`命令为文件夹添加全部权限。

