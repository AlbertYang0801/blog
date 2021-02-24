
## Gitbook使用

---

#### 1.目录文件介绍

>SUMMARY.md是gitbook的目录管理文件，使用超链接的格式创建目录，可实现多级目录。

SUMMARY.md文件内容如下：

```java
# Summary

* [概览](README.md)
* [Gitbook使用总结](gitbook使用总结.md)
* [PicGo+GitHub搭建图床](PicGo+GitHub搭建图床.md)
* [个人随笔](个人随笔说明.md)
    * [oppo出差随笔](oppo出差随笔.md)
```

#### 2.根据目录自动生成md文件

- 手动修改SUMMARY.md内容，在目录中增加文件名称。
- 在SUMMARY.md文件同级目录下执行以下命令。

```
gitbook init
```

- 执行过命令之后，若目录中的文件不存在，则会根据文件名称在同级目录自动创建。

#### 3.预览文件内容

>在SUMMARY.md同级目录下执行以下命令，访问链接即可预览文件内容。

```
gitbook serve
```

#### 4.生成静态文件

>可通过以下命令生成静态文件，搭配github Pages搭建主页，执行完成之后在同级目录`_book`文件夹下面生成静态文件。

```
gitbook build
```


