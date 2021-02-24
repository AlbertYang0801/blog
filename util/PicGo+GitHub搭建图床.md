# PicGo+GitHub搭建图床

### GitHub配置

---

#### 1.初始化个人仓库

> 在GitHub上创建一个个人仓库，作为图床的仓库

![](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/%E5%9B%BE%E5%BA%8A%E4%BB%93%E5%BA%93.png)

#### 2.创建token

> 依次点击` settings`  ->  `Developer settings`  ->  `Personal access tokens`

![](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/toekn-settings.png)

### PicGo配置

---

#### 1.下载PicGo

下载地址：https://github.com/Molunerfinn/PicGo/releases

#### 2.配置PicGo

![](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210216232626.png)



- 设定仓库名：账户名/仓库名

- 设定分支名：仓库主分支名称

- 设定Token：在GitHub生成的Token

- 指定存储路径：自定义，上传图片到仓库指定路径下，若没有该目录会自动创建。

- 设置自定义域名：

  > 作用是在图片上传后，PicGo会按照【`自定义域名+存储路径+上传的图片名`】的方式生成访问链接，放到粘贴板上
  
  此处直接设置jsDelivr 加速的访问地址；
  
  推荐设置为：`https://cdn.jsdelivr.net/gh/{用户名}/{仓库名}@{分支名}`
  
  例如：https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main

