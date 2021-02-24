### Java实现复制文件夹下的所有文件

#### 需求

由于gitbook源文件和项目不在同一个文件夹下面，每次`gitbook build`之后，需要手动复制`_book`文件夹下所有文件到项目的根路径。操作比较繁琐，故使用工具类实现将文件从`_book`文件夹下转移到项目路径下。

#### 思路

使用递归遍历源文件夹下的所有文件，然后将文件内容写入到新文件夹下面。

#### 代码实现

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 复制文件工具类
 * @author Albert
 * @date 2021/2/20 上午11:07
 */
public class FileMoveUtils {

   public static void main(String[] args) throws IOException {
        //复制文件
        copyFile("/Users/yangjunwei/gitbook/_book","/Users/yangjunwei/IdeaProjects/gitbook-technology");
    }
  
    /**
     * 递归复制源文件夹下所有内容到指定文件夹
     * @param sourceFilePath 源文件夹名称
     * @param newFilePaht 指定文件夹名称
     * @throws IOException
     */
    public static void copyFile(String sourceFilePath,String newFilePaht) throws IOException {
        //目标源文件夹
        File source = new File(sourceFilePath);
        //目标新文件夹
        File fil = new File(newFilePaht);
        copy(source, fil);
        System.out.println("复制成功");
    }

    /**
     * 递归复制源文件夹下所有内容到指定文件夹
     * @param source 源文件夹
     * @param newFile 指定文件夹
     * @throws IOException
     */
    public static void copy(File source, File newFile) throws IOException {
        // 判断源目录是不是一个目录
        if (!source.isDirectory()) {
            //如果不是目录就不复制
            return;
        }
        //创建目标目录的file对象
        if (!newFile.exists()) {
            //不存在就创建文件夹
            newFile.mkdir();
        }
        //如果源文件存在就复制
        if (source.exists()) {
            // 获取源目录下的File对象列表
            File[] files = source.listFiles();
            if(files==null){
                return;
            }
            for (File file2 : files) {
                //新文件夹的路径
                File file4 = new File(newFile + File.separator + file2.getName());

                if (file2.isDirectory()) {
                    //递归读取文件夹内容
                    copy(file2, file4);
                }
                if (file2.isFile()) {
                    FileInputStream in = new FileInputStream(file2);
                    FileOutputStream out = new FileOutputStream(file4);

                    byte[] bs = new byte[1026];

                    int count = 0;
                    //循环把源文件的内容写入新文件
                    while ((count = in.read(bs, 0, bs.length)) != -1) {
                        out.write(bs, 0, count);
                    }
                    //关闭流
                    out.flush();
                    out.close();
                    in.close();
                }
            }
        }
    }

   
}

```

