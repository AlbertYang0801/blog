## Gitbook搭配GitHubPages搭建主页

### 搭建流程

#### 1.初始化个人仓库

- github创建一个空仓库。

- 拉取到本地，在项目根路径创建一个index.html。

- 推送到github。

- 在github上找到该仓库设置，找到GitHub Pages。

  ![](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/github-pages.png)

- 设置主分支，并save。

- 访问生成的链接地址，即为index.html文件对应内容。


#### 2.同步gitbook静态文件

- 复制`_book`目录下所有文件复制到本地项目根路径下。

- 推送到github，即可完成gitbook到github的远程推送。

  注意：由于同步过程过于繁琐，开发了同步脚本来实现一键同步。

  参考：[Gitbook自动发布GitHub脚本](Gitbook自动发布GitHub脚本.html)

