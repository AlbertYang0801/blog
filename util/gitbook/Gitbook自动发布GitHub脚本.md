## Gitbook自动发布到GitHub脚本

### 概述

我在使用`Gitbook`的时候，搭配使用了GitHub Pages搭建主页。由于`Gitbook`静态文件发布到`GitHub`较为繁琐，故开发了脚本来实现自动发布。

### 本地文件介绍

首先在本地创建了一个存放`Gitbook基础文件`的目录`gitbook`，创建了一个`Java项目`用来同步`Gitbook生成的静态文件`到`Github`。

- gitbook文件目录

  ![gitbook目录](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154231.png)

- java项目结构

  ![Java项目结构](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210222154325.png)

### 传统发布流程

1. 编写md文章。

2. 使用`gitbook build`命令生成html静态文件，使用后会在`gitbook基础文件目录`下的`_book`文件夹生成静态文件。

3. 复制`_book`文件夹下所有文件到`java项目`根路径下。

4. 使用git命令将`java项目`新增内容同步到github。

   *由于发布流程的第2、3、4步太过繁琐，故开发一个脚本，按照顺序执行2、3、4步完成自动发布的功能。*

### 自动脚本发布

> 支持手动同步和定时同步，可实现`gitbook`文件一键`gitbook build`,然后发布到`GitHub`上。

#### 手动同步

> 不需要部署服务器

1.  跳转到手动脚本：[GitbookManualScript.java](https://gitee.com/zztiyjw/gitbook-publish-autoscript/tree/master/src/main/java/com/albert/script/GitbookManualScript.java)
2.  手动指定必要参数

    ```java
    /**
     * gitbook本地目录
     */
    private final static String GITBOOK_PATH = "/Users/yangjunwei/gitbook";
    /**
     * github对应本地项目目录
     */
    private final static String GITHUB_PROJECT_PATH = "/Users/yangjunwei/IdeaProjects/gitbook-technology";
    /**
     * github对应remote
     */
    private final static String GITHUB_REMOTE = "origin";
    /**
     * github分支名称
     */
    private final static String GITHUB_BRANCH = "main";
    ```

3.  执行main()方法

#### 定时同步

> 可部署到服务器，参考安装教程

1. 修改配置文件：[application.properties](config/application.properties)中的属性值

    ```java
    #gitbook本地目录
    gitbook.path=/Users/yangjunwei/gitbook
    #github项目本地路径
    github.project.path=/Users/yangjunwei/IdeaProjects/gitbook-technology
    #github的remote值
    github.remote=origin
    #github分支名称
    github.branch=main
    #定时同步gitbook的cron表达式
    auto.sync.gitbook.cron='0 0 23 * * *'
    ```

2.启动 [Application.java](src/main/java/com/albert/Application.java)

#### 实现思路

1.使用Java执行命令`gitbook build`。

2.Java实现复制文件夹下的所有文件，将`_book`文件夹下所有文件复制到Java项目根路径下。

3.使用git命令将`java项目`新增内容同步到github。

​	同第一步一样，使用Java依次执行以下命令：

- `git add .`
- `git commit -m {msg}`
- `git push {remote} {branch}`

参考：[Java实现执行系统命令](ava实现执行系统命令.html)、[Java实现复制文件夹下的所有文件](Java实现复制文件夹下的所有文件.html)

