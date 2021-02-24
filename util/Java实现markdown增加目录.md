### Java实现markdown增加目录

   * [Java实现markdown增加目录](#java实现markdown增加目录)
      * [需求](#需求)
      * [GitHub地址](#github地址)
      * [实现步骤](#实现步骤)
      * [实现效果](#实现效果)


#### 需求

markdown的`[toc]`语法可以自动生成目录，但是上传到`github`之后目录会`失效`，所以需要手动为markdown文件添加目录。


#### GitHub地址



[https://github.com/houbb/markdown-toc](https://github.com/houbb/markdown-toc)



#### 实现步骤

- 添加maven依赖

  ```
  <!--MD文件添加目录-->
  <dependency>
      <groupId>com.github.houbb</groupId>
      <artifactId>markdown-toc</artifactId>
      <version>1.0.2</version>
  </dependency>
  ```

- 测试类

  ```java
  /**
   * 为指定MD文件生成目录
   * @author Albert
   * @date 2021/1/25 下午5:30
   */
  public class MdCreateToc {
  
      public static void main(String[] args) {
          String macPath="/Users/yangjunwei/IdeaProjects/concurrent-practice/src/test/java/com/albert/concurrent/md/READMEBak.md";
          TocGen tocGen = AtxMarkdownToc.newInstance()
                  .genTocFile(macPath);
        	//打印生成的目录内容
          System.out.println(tocGen);
      }
  }
  ```



  #### 实现效果

自动在md文件顶部增加目录内容

![实现效果](https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210220125103.png)

